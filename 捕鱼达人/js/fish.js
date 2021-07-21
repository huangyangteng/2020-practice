class Fish extends Sprite{
  constructor(type, x=0, y=0, rotation=0){
    if(type>5 || type<1){
      throw new Error('unkonw fish type');
    }

    const SIZE=[
      null,
      {w: 55, h: 37},
      {w: 78, h: 64},
      {w: 72, h: 56},
      {w: 77, h: 59},
      {w: 107, h: 122}
    ];

    //父类
    super(_imgs[`fish${type}`], SIZE[type].w, SIZE[type].h, x, y, rotation);

    //子类
    this.type=type;

    this.curFrame=0;
    this.MAX_FRAME=4;
  }

  nextFrame(){
    this.curFrame++;
    if(this.curFrame>=this.MAX_FRAME){
      this.curFrame=0;
    }

    this.sy=this.height*this.curFrame;
  }
}
