import * as types from "./MapBlock.types";
import style from "./MapBlock.module.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ImagesStorage from "../../storage/imagesStorage/imagesStorage";
import languageStorage from "../../storage/languageStorage/languageStorage";

const MapBlock = () => {
    const monitor = useRef<null | HTMLElement>(null);
    const [mapElementWidth, setMapElementWidth] = useState<number>(65);

    const moveMonitor = (monitor: HTMLElement | null, event: MouseEvent) => {
        if(monitor === null) return;

        let x = event.clientX / window.innerWidth;
        let y = event.clientY / window.innerHeight;  
        monitor.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    }; 

    const scrollMapElement = (value: number) => {
        if(value > 0) {
            setMapElementWidth((prev) => {
                if(prev >= 165) return prev;
                return prev+5; 
            });
        } else {
            setMapElementWidth((prev) => {
                if(prev <= 35) return prev;
                return prev-5; 
            });
        };
    };
 
    useEffect(() => {
        window.addEventListener('mousemove', (e) => moveMonitor(monitor.current, e));
        window.addEventListener("wheel", (e) => scrollMapElement(e.deltaY));

        return () => {
            window.removeEventListener('mousemove', (e) => moveMonitor(monitor.current, e));
            window.removeEventListener("wheel", (e) => scrollMapElement(e.deltaY));
        };
    }, []);

    return (
        <section className={style.mainBlock} ref={monitor}>
            <div className={style.mapElement}>
                <Link 
                    to={"./contact"}
                    className={style.mapElement_link}
                >  
                    <img 
                        className={style.mapElement_icon}
                        src={ImagesStorage.mapElementImage} 
                        alt="Map element image" 
                        style={{
                            width: mapElementWidth
                        }}
                    />
                    <h1 className={style.mapElement_title}>
                        {languageStorage.GetPhrase("mapElementTitle")}
                    </h1>
                </Link>  
            </div>
        </section>
    );
};

export default MapBlock;
