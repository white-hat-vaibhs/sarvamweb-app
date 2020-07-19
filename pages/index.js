import React from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList'

function Home({ products }) {
  // console.log(products)

  return <ProductList products={products} />
}

Home.getInitialProps = async () => {
  //fetch data on server 
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url)
  return { products: response.data }
  // return response data as an object 
  return { hello: "world" };
  // note: thid object eill be merged with existing ptop
}

export default Home;
















//database credentials 
//sarvam
//manomaya
