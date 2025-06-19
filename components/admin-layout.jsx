"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, LogOut } from "lucide-react"
import { useAuth } from "@/components/admin-auth"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function AdminLayout({ children }) {
  const { logout } = useAuth()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">City Library - Admin</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  {t.home}
                </Link>
                <Link href="/news" className="text-muted-foreground hover:text-primary">
                  {t.news}
                </Link>
                <Link href="/books" className="text-muted-foreground hover:text-primary">
                  {t.books}
                </Link>
                <Link href="/admin" className="text-muted-foreground hover:text-primary">
                  {t.admin}
                </Link>
              </div>
              <LanguageSwitcher />
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4 mr-2" />
                {t.logout}
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}
