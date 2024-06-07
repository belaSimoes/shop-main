import styles from "./main.module.css";

export default async function Main() {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-cache"
  });
  const produtos = await response.json();

  return (
    <main>
      <div className={styles.grid}>
        {produtos.map((produto) => (
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
  );
}
