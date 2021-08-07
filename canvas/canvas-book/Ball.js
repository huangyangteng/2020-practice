class Ball{
    constructor({radius=40,color='#990000'}={}){
        this.x=0
        this.y=0
        this.radius=radius
        this.rotation=0
        this.scaleX=1
        this.scaleY=1
        this.color=color
        this.lineWidth=1
    }
    draw(context){
         /**@type {CanvasRenderingContext2D} */
        const ctx=context
        ctx.save()
        ctx.beginPath()
        ctx.translate(this.x,this.y)
        ctx.rotate(this.rotation)
        ctx.scale(this.scaleX,this.scaleY)
        ctx.lineWidth=this.lineWidth
        ctx.fillStyle=this.color
        ctx.arc(0,0,this.radius,0,(Math.PI*2),true)
        ctx.closePath()
        ctx.fill()
        if(this.lineWidth>0){
            ctx.stroke()
        }
        ctx.restore()

    
        

    }
}