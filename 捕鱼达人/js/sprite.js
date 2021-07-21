class Sprite{
  //w,h,x,y,rotate
  //draw(),碰撞检测()

  constructor(drawRect, x=0, y=0, rotation=0){
    if(!(drawRect instanceof DrawRect)){
      throw new Error('img must be a DrawRect');
    }

    this.setDrawRect(drawRect);
    this.x=x;
    this.y=y;
    this.rotation=rotation;
  }

  setDrawRect(drawRect){
    this.drawRect=drawRect;
    this.width=drawRect.sw;
    this.height=drawRect.sh;
  }

  draw(gd){
    gd.save();

    gd.translate(this.x, this.y);
    gd.rotate(d2a(this.rotation));

    gd.drawImage(
      this.drawRect.img,
      this.drawRect.sx, this.drawRect.sy, this.width, this.height,
      -this.width/2, -this.height/2, this.width, this.height
    );

    gd.restore();
  }

  inRect(x, y){
    if(
      this.x-this.width/2<=x && x<=this.x+this.width/2 &&
      this.y-this.height/2<=y && y<=this.y+this.height/2
    ){
      return true;
    }else{
      return false;
    }
  }
}
