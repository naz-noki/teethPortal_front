import LanguageStorage from "../../storage/languageStorage/languageStorage";
import ImagesStorage from "../../storage/imagesStorage/imagesStorage";
import style from "./TelegramBlock.module.css";

const TelegramBlock = () => {

    return ( 
        <section className={style.wrapper}>
            <div className={style.block}>
                <p className={style.text}>
                    {LanguageStorage.GetPhrase("goTGtext")}
                </p>
                <a 
                    className={style.link}
                    href={LanguageStorage.GetPhrase("goTGlink")}
                    target="_blank"
                >
                    <img 
                        src={ImagesStorage.telegramQRcodeImage} 
                        alt="QR code for Telegram" 
                        className={style.qrcode}
                    />
                </a>
            </div>
        </section>
    );
};

export default TelegramBlock;
