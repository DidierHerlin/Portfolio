import "./globals.css"
import { JetBrains_Mono } from "next/font/google"

import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/ui/StairTransition";
import { LanguageProvider } from "../context/LanguageContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "ANDRIATAHINA Didier Herlin",
  description: "Personal portfolio of ANDRIATAHINA Didier Herlin — Full-Stack Developer showcasing projects, skills, and experience.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <LanguageProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <StairTransition />
        </LanguageProvider>
      </body>
    </html>
  )
}
