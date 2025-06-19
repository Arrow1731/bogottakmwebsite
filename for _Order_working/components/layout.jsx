"use client"

import { Navigation } from "@/components/navigation"
import { useLanguage } from "@/lib/language-context"

export function Layout({ children }) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 City Library. {t.allRightsReserved}</p>
        </div>
      </footer>
    </div>
  )
}
