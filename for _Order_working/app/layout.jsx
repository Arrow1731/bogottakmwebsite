import { Inter } from "next/font/google"
import "./globals.css"
import { LibraryProvider } from "@/lib/library-context"
import { LanguageProvider } from "@/lib/language-context"
import { AuthProvider } from "@/components/admin-auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "City Library",
  description: "Your gateway to knowledge, learning, and community",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <LanguageProvider>
            <LibraryProvider>{children}</LibraryProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
