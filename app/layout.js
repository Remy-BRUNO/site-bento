import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import StyledComponentsRegistry from "@/lib/registry"

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({ subsets: ["latin"], weight: "400", style: "normal" })

export const metadata = {
  title: "Bento Site",
  description: "un site template de type Bento",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <StyledComponentsRegistry className={roboto.className}>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
