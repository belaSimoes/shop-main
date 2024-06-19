"use client"
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import Spinner from '../components/Spinner'; 

export default  function Main() {

  const [listProduct, setProduct] = useState ([]);

  useEffect( ()=> { 
    const getProduct = async() => {
      const response = await fetch("https://fakestoreapi.com/products");
      const produtos = await response.json();
      setProduct(produtos);
    }
    getProduct();
  },[]);

    const orderAz = () => {
      const listAuxiliar = [...listProduct].sort((a,b) => a.title.localeCompare(b.title) );

      setProduct(listAuxiliar);
    }

    const orderZa = () => {
      let listAuxiliar = [...listProduct].sort((a,b) => a.title.localeCompare(b.title) );

      listAuxiliar = listAuxiliar.reverse();
      setProduct(listAuxiliar);
    }

    const orderCrescente = () => {
      const listaOrdem = [...listProduct].sort((a,b) => a.price - b.price);
      setProduct(listaOrdem);
    }

    const orderDescrescente = () => {
      let listaOrdem = [...listProduct].sort((a,b) => a.price - b.price);
      listaOrdem = listaOrdem.reverse();
      setProduct(listaOrdem);
    }
    
    if( listProduct[0] == null) {
      return (
      <Spinner/>
      );
    }

  return (
    <>
    <div className={styles.filters}>
      <div>
        <button onClick={ orderAz }>Az</button>
        <button onClick={ orderZa }>Za</button>
        <button onClick={ orderCrescente }>Ordem Crescente</button>
        <button onClick={ orderDescrescente }>Ordem Descrescente</button>
      </div>
    </div>
    <main>
      <div className={styles.grid}>
        {listProduct.map((produto) => (
          <div key={produto.id} className={styles.cereja1}>
            <h3>{produto.title}</h3>
            <img src={produto.image} alt={produto.title} className={styles.imagem} />
            <p>Price: R${produto.price}</p>
            <p>{produto.description}</p>
            <p>Category: {produto.category}</p>
            <p>Rating: {produto.rating.count}</p>
          </div>
        ))}
      </div>
    </main>
    </>
  );
}
