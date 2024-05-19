import * as types from "./MapBlock.types";
import style from "./MapBlock.module.css";

const mapList: types.I_MapElement[] = [
    {
        link: "/empire",
        imagePath: "./images/tower.png",
        title: "empire",
    },
    {
        link: "/tape",
        imagePath: "./images/tower1.png",
        title: "tape",
    },
    {
        link: "/gallery",
        imagePath: "./images/tower2.png",
        title: "gallery",
    },
    {
        link: "/library",
        imagePath: "./images/tower3.png",
        title: "library",
    },
    {
        link: "/player",
        imagePath: "./images/tower4.png",
        title: "player",
    },
];

const MapBlock = () => {

    return (
        <section className={style.mainBlock}>
        {
            mapList.map((el) => 
                <div className={style.mapElement}>
                    <img 
                        src={el.imagePath} 
                        alt="Map element image" 
                    />
                    <h1>{el.title.toUpperCase()}</h1>
                </div>
            )
        }
        </section>
    );
};

export default MapBlock;
