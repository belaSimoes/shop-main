
import styles from "./main.module.css";

export default async function Main() {
  const response = await fetch("https://fakestoreapi.com/products");
  const produtos = await response.json();

  return (
    <main>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <img src={produto.imagem} />
          <h3>{produto.titulo}</h3>
          <p>{produto.descricao}</p>
          <p>categoria: {produto.categoria}</p>
          <p>preco: R${produto.preco}</p>
        </div>
      ))}
    </main>
  );
}
