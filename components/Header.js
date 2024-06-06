import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image height={80}  width={80} src="https://pngfre.com/wp-content/uploads/cherry-42.png" />
      <div>
        <button>Carrinho</button>
        <button>Adicionar Produto</button>
      </div>
      <p>Para garotinhas!</p>
    </header>
  );
}
