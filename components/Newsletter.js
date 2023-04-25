import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import styles from "../styles/Newsletter.module.scss";

const Newsletter = () => {

    return (
        <div className={styles.newsletterSection}>
            <div className={styles.newsletterContent}>
                <span className={styles.smallText}>Novedades</span>
                <span style={{color:"black"}} className={styles.bigText}>
                REGÍSTRESE PARA RECIBIR LAS ÚLTIMAS ACTUALIZACIONES Y OFERTAS
                </span>
                <div className={styles.form}>
                    <input type="text" placeholder="Dirección de email" />
                    <button>Subscribite</button>
                </div>
                <span className={styles.text}>
                Se utilizará de acuerdo con nuestra Política de Privacidad
                </span>
                <span className={styles.socialIcons}>
                    <div className={styles.icon}>
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className={styles.icon}>
                        <FaFacebookF size={14} />
                    </div>
                    <div className={styles.icon}>
                        <FaTwitter size={14} />
                    </div>
                    <div className={styles.icon}>
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter