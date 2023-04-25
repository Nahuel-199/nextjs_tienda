import Head from 'next/head'
import styles from "../styles/Home.module.scss";
import Banner from 'nahuel/components/Banner';
import Categories from 'nahuel/components/categories/Categories';
import Newsletter from 'nahuel/components/Newsletter';
import Footer from 'nahuel/components/Footer';
import { getData } from 'nahuel/utils/fetchData';
import { useState } from 'react';
import Product from 'nahuel/components/Product';
import Loading from 'nahuel/components/Loading';

const Home = (props) => {
  const [product, setProduct] = useState(props.products)



  return(
    <div>
      <Head>
        <title>Home</title>
    </Head>
    <Banner />
    <Categories />
    <div className={styles.container__products}>
    {
      product.length === 0
      ?
      <>
      <Loading />
      <h2>No hay productos</h2>
      </> 

      : product.map(produc => (
        <Product key={produc._id} product={produc} />
      ))
    }
        </div>
    <Newsletter />
    <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await getData("products")
  console.log(res)
  //Server siide rendering
  return {
      props: {
        products: res.products,
        result: res.result
      }, //Will be passed to the page component as props
  }
}

export default Home