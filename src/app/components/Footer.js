import styles from "./footer.module.css";

export default function Footer(){

    return(
        <footer className={styles.rodape}>   
        <ul>
            <li>
                <a href="https://instagram.com">
                <p>Instagram</p>
                </a>
            </li>
            <li>
                <a href="https://facebook.com">
                <p>Facebook</p>
                </a>
            </li>
            <li>
                <a href="https://twitter.com">
                <p>Twitter</p>
                </a>
            </li>
            <li>
                <a href="https://tiktok.com">
                <p>Tik Tok</p>
                </a>
            </li>
        </ul>
        <p>© 2007 liz e bela</p>
        </footer>
    )};