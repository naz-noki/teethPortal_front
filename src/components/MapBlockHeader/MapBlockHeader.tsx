import style from "./MapBlockHeader.module.css";

const MapBlockHeader = () => {

    return (
        <header className={style.header}>
            <div className={style.header__title_block}>
                <h2 className={style.header__title_h2}>
                    ZONE
                </h2>
                <h1 className={style.header__title_h1}>
                    Welcome
                </h1>
            </div>
        </header>
    );
};

export default MapBlockHeader;
