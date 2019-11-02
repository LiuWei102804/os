import Konva from 'konva';

interface Data{
    x : number ,
    y : number ,
    title : string ,
    data: {
        list : Array<any>
    }
}
export const NewsRect = ( data:Data ) => {
    let group = new Konva.Group({
        x : data.x ,
        y : data.y ,
        draggable : true
    });
    let banner = new Konva.Rect({
        x : 0 ,
        y : 0 ,
        width : 300 ,
        height : 50 ,
        fill : "#2F4056" ,
    });
    let bannerText = new Konva.Text({
        x : 15 ,
        y : 15 ,
        fontSize: 25 ,
        fill : "#fff" ,
        text : data.title,
        width : 300
    });
    banner.rotation(45);

    // bannerText.cache();
    // bannerText.filters([Konva.Filters.Blur]);
    // bannerText.blurRadius(15);
    // console.log( bannerText.blurRadius() )

    //group.clear();

    //console.log( bannerText.getAttr("x") );
    group.add( banner ).add( bannerText );
    for( let i = 0; i < data.data.list.length; i++ ) {
        let newGroup = new Konva.Group({
            x : 0 ,
            y : 50 + i * 31
        });
        let rect = new Konva.Rect({
            x : 0 ,
            y : 0 ,
            width : 300 ,
            height : 29 ,
            fill : "#2F4056"
        });
        let line = new Konva.Rect({
            x : 0 ,
            y : 30,
            width : 300 ,
            height : 1 ,
            fill : "#fff"
        });
        let text = new Konva.Text({
            x : 10 ,
            y : 7  ,
            text : data.data.list[i].text ,
            fill : "#fff" ,
            fontSize:16 ,
            width :300
        });
        newGroup.add( rect ).add( line ).add( text );

        // newGroup.to({
        //     x : 0 ,
        //     y : 50 + i * 31 ,
        //     duration : .8 ,
        //     opacity: 1
        // });
        group.add( newGroup );
    }


    return group;
};