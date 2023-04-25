import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Payment from "../public/assets/payments.png";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  
    return (
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.col}>
            <div className={styles.title}>Acerca de nosotros</div>
            <div className={styles.text}>
              Somos un emprendimiento, dedicado a hacer estampados, tanto en tela
              negra y blanca, como diferentes tipo y colores. Nos especializamos
              en remeras, buzos y stickers...
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.title}>Contacto</div>
            <div className={styles.cItem}>
              <FaMobileAlt />
              <div className={styles.text}>Teléfono: 1123359620</div>
            </div>
            <div className={styles.cItem}>
              <FaEnvelope />
              <div className={styles.text}>Email: aoetiendavirtual@gmail.com</div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.title}>Categorías</div>
            <Link href="/products/remeras%20negras">
            <span className={styles.text}>Remeras Negras</span>
            </Link>
            <Link href="/products/remeras%20blancas">
            <span className={styles.text}>Remeras Blancas</span>
            </Link>
            <Link href="/products/buzos%20negros">
            <span className={styles.text}>Buzos Negros</span>
            </Link>
            <Link href="/products/buzos%20blancos">
            <span className={styles.text}>Buzos Blancos</span>
            </Link>
            <Link href="/products/stickers">
            <span className={styles.text}>Stikers</span>
            </Link>
          </div>
          <div className={styles.col}>
            <div className={styles.title}>Paginas</div>
            <span className={styles.text}>Home</span>
            <span className={styles.text}>Nosotros</span>
            <span className={styles.text}>Política de privacidad</span>
            <span className={styles.text}>Términos y condiciones</span>
            <span className={styles.text}>Contáctenos</span>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.bottomBarContent}>
            <span className={styles.text}>
              AOE-TIENDA 2022 CREADO POR NAHUEL CERNADAS. SOLUCIONES PREMIUM DE
              COMERCIO ELECTRÓNICO.
            </span>
            <Image src={Payment} alt="payment" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;