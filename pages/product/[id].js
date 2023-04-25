import Head from "next/head";
import { useState, useContext } from "react";
import { getData } from "../../utils/fetchData";
import { DataContext } from "../../store/GlobalState";
import Image from "next/image";
/* import { addToCart } from "../../store/Actions"; */
import styles from "../../styles/ProductDetails.module.scss";

const DetailProduct = (props) => {
  const [product] = useState(props.product);
  const [tab, setTab] = useState(0);

  const { state } = useContext(DataContext);
 /*  const { cart } = state; */

  const isActive = (index) => {
    if (tab === index) return " active";
    return "";
  };

  return (
    <div className={styles.single_product_main_content}>
      <Head>
        <title>Detalle Producto</title>
      </Head>
      <div className={styles.layout}>
        <div className={styles.single_product_page}>
          <div className={styles.left}>
            <Image
              src={product.images[tab].url}
              alt={product.images[tab].url}
              width={400}
              height={600}
            />
          </div>
          <div className={styles.twoImg.row}>
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img.url}
                alt="img1"
                className={`${styles.img_thumbnail} ${isActive(index)}`}
                onClick={() => setTab(index)}
                width={100}
                height={100}
              />
            ))}
          </div>
          <div className={styles.right}>
            <span className={styles.name}>{product.title}</span>
            <span className={styles.color}>Color {product.color}</span>
            <span className={styles.price}>${product.price}</span>
            <span className={styles.desc}>{product.description}</span>
            <span className={styles.divider} />
            <div className={styles.info_item}>
              <span className={styles.text_bold}>
                Catégoria: <span>{product.category}</span>
              </span>
              {product.inStock > 0 ? (
                <h6 className={styles.text_bold}>En Stock: {product.inStock}</h6>
              ) : (
                <h6 className={styles.text_bold}>Sin Stock</h6>
              )}

              <h6 className={styles.text_bold}>Vendidos: {product.sold}</h6>
              <button
          type="button"
          className={styles.btn}
         /*  onClick={() => dispatch(addToCart(product, cart))} */
        >
          COMPRAR
        </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`products/${id}`);
  // server side rendering
  return {
    props: { product: res.product }, // will be passed to the page component as props
  };
}

export default DetailProduct;
