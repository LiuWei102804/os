import Konva from 'konva';

interface Data{
    x : number ,
    y : number ,
    data: any
}
export const NewsRect = ( data:Data ) => {
    let group = new Konva.Group({
        x : data.x ,
        y : data.y
    });

    let line = new Konva.Rect({
        x : 0 ,
        y : 30 ,
        width : 300 ,
        height : 1 ,
        fill : "#fff"
    });
    let rect = new Konva.Rect({
        x : 0 ,
        y : 0 ,
        width : 300 ,
        height : 29 ,
        fill : "#2F4056"
    });
    let text = new Konva.Text({
        x : 10 ,
        y : 7 ,
        text : data.data.text ,
        fill : "#fff" ,
        fontSize:16 ,
        width :300
    });
    group.add(line).add( rect ).add( text );
    return group;
};