import styles from "./page.module.css"
import Box from "@/ui/box"
import { arrayBox } from "@/lib/data"
import Navbar from "@/ui/navbar"
import Footer from "@/ui/footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        {arrayBox.map((box, index) => {
          const { img, border, title, info, boxsize, gridId, id } = box

          return (
            <Box
              key={index}
              pcBoxWidth={boxsize.pcwidth}
              pcBoxHeight={boxsize.pcheight}
              boxWidth={boxsize.width}
              boxHeight={boxsize.height}
              borderColor={border}
              bgImage={img}
              title={title}
              info={info}
              id={id}
              gridId={gridId}
            />
          )
        })}
      </main>
      <Footer />
    </div>
  )
}
