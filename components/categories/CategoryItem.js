import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/CategoryItem.module.scss";


const CategoryItem = ({ item }) => {
    return (
      <div className={styles.container__category}>
        <Link href={`/products/${item.cat}`}>
          <Image src={item.img} alt="img" className={styles.image_category} />
        </Link>
      </div>
    )
  }
  
  export default CategoryItem