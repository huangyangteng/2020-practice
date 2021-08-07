class Arrow{
    constructor(){
        this.x=0
        this.y=0
        this.color='#ffff00'
        this.rotation=0

    }
    draw(context){
        /** @type {CanvasRenderingContext2D} */
        const ctx=context

        ctx.save()
        ctx.beginPath()
        ctx.translate(this.x,this.y)
        ctx.rotate(this.rotation)
        ctx.lineWidth=2
        ctx.fillStyle=this.color
        ctx.moveTo(-50,-25)
        ctx.lineTo(0,-25)
        ctx.lineTo(0,-50)
        ctx.lineTo(50,0)
        ctx.lineTo(0,50)
        ctx.lineTo(0,25)
        ctx.lineTo(-50,25)
        ctx.lineTo(-50,-25)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        ctx.restore()

    }
}