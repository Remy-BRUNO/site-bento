import { navbar } from "@/lib/data"
import Image from "next/image"
import styles from "./navbar.module.css"

export default function Navbar() {
  const { logo, title, links } = navbar
  const { facebook, instagram, twitter } = links
  return (
    <nav className={styles.nav}>
      <Image
        className={styles.logo}
        src={logo}
        alt={title}
        width={150}
        height={150}
      ></Image>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.socials}>
        <a href={facebook.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={facebook.logo}
            alt={"facebook"}
            width={50}
            height={50}
          ></Image>
        </a>
        <a href={instagram.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={instagram.logo}
            alt={"instagram"}
            width={50}
            height={50}
          ></Image>
        </a>
        <a href={twitter.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={twitter.logo}
            alt={"twitter"}
            width={50}
            height={50}
          ></Image>
        </a>
      </div>
    </nav>
  )
}
