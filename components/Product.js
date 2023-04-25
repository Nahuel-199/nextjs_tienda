import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Product.module.scss";


const Product = ({ product }) => {
  return (
    <div className={styles.container_product}>
        <div className={styles.circle}></div>
        <Image src={product.images[0].url} alt={product.images[0].url} className={styles.img_product} width={400} height={400}/>
        <div className={styles.info}>
           
            <div className={styles.icon}>
            <Link href={`/product/${product._id}`}>
              <BiSearch  style={{color: "black"}}/>
                </Link>
            </div>
          
        </div>
    </div>
  )
}

export default Product