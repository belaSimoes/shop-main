import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header classe={styles.cabecalho}>
      <Image height={80}  width={80} src="" />
      <div classe={styles.icon}>
        <button classe={styles.carrinho}>Carrinho</button>
        <button classe={styles.adcProduto}>Adicionar Produto</button>
      </div>
      <p classe={styles.frase}></p>
    </header>
  );
}
