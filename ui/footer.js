import Link from "next/link"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/mentions_legals">Mentions Legals / CGU</Link>
      <h4>Marque</h4>
      <a href="https://www.w3schools.com" target="_blank">
        Socials link
      </a>
    </footer>
  )
}
