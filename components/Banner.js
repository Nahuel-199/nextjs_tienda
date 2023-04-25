import Link from "next/link";
import Image from "next/image";
import BannerImg from "../public/assets/bannerE.png";
import styles from "../styles/Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.herobanner}>
      <div className={styles.content}>
        <div className={styles.textcontent}>
          <h1>OFERTAS</h1>
          <p>Remeras a </p>
          <p style={{ fontSize: "3rem" }}>$3000</p>
          <p>¡haga su pedido!</p>
          <div className={styles.ctas}>
            <Link href="/products">
              <button>
                <span>COMPRAR</span>
              </button>
            </Link>
          </div>
        </div>
        <Image className={styles.bannerimg} src={BannerImg} alt="bannerimg" />
      </div>
    </div>
  );
};

export default Banner;
