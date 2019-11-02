import Konva from "konva";
import { SystemInfo } from "./service/systemInfo.service";


export const star = () => {
    let circle = new Konva.Circle({
        x : 10 + Math.random() * ( SystemInfo.width - 10 ) ,
        y : 5 + Math.random() * ( SystemInfo.height - 50 ),
        radius : .2 + Math.random() * 1.5 ,
        fill : `rgba(255,255,255,${.3 + Math.random() * .7})` ,
        opacity : .3 + Math.random() * .7 ,
        shadowColor : "rgba(255,255,255,1)" ,
        shadowBlur : 2 + Math.random() * 10 ,
        shadowOpacity : 1
        //dash : [10,2]
    });

    return circle;
};

export const moon = () => {
    let shape = new Konva.Shape({
        x : SystemInfo.width * .6 ,
        y : 0 ,
        //fill:"red",
        sceneFunc : function (context, shape) {
            let gradient = context.createRadialGradient(150 , 150, 50, 150, 150, 150);
            //径向渐变
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.01, 'rgba(134,141,189,.7)');
            gradient.addColorStop(0.3, 'rgba(101,111,179,.4)');
            gradient.addColorStop(0.5, 'rgba(85,95,172,.2)');
            gradient.addColorStop(1, 'rgba(15,78,127,0)');
            context._context.fillStyle = gradient;
            context.fillRect(0, 0, 300, 300);

            context.fillStrokeShape( this );
        }
    });
    //shape.fillRadialGradientColorStops.push()

    return shape;
}