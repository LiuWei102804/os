export class Ball{
    public radius:number = 1;
    public color:string;
    public birthX:number;
    public birthY:number;
    public targetX:number;
    public targetY:number;
    public stop:boolean = false;

    constructor( options ){
        this.radius = options.radius;
        this.color = options.color;
        this.birthX = options.birthX;
        this.birthY = options.birthY;
        this.targetX = options.targetX;
        this.targetY = options.targetY;

    }
    move( ctx ){
        let frameId,sx,sy;
        let animate = () => {
            if( this.birthX == this.targetX ) {
                cancelAnimationFrame( frameId );
            } else {
                sx = ( this.targetX - this.birthX ) / 15;
                sx = sx > 0 ? Math.ceil( sx ) : Math.floor( sx );
                sy = ( this.targetY - this.birthY ) / 15;
                sy = sy > 0 ? Math.ceil( sy ) : Math.floor( sy );
                this.birthX += sx;
                ctx.fillRect( this.birthX , this.birthY , this.radius , this.radius );
                frameId = requestAnimationFrame( animate );
            }
        }
        frameId = requestAnimationFrame( animate );
    }
    draw( ctx ){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect( this.birthX , this.birthY , this.radius , this.radius );
        //ctx.arc( this.birthX , this.birthY , this.radius , 0 , 2 * Math.PI );
        ctx.fill();
        ctx.closePath();
    }
    update(fn?:Function){
        let x = ( this.targetX - this.birthX ) / 20;
        let y = ( this.targetY - this.birthY ) / 20;
        x = x > 0 ? Math.ceil( x ) : Math.floor( x );
        y = y > 0 ? Math.ceil( y ) : Math.floor( y );
        this.birthX += x;
        this.birthY += y;

        if( this.birthX == this.targetX ) {
            this.stop = true;
        };
        fn && fn();
    }
}