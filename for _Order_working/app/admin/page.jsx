"use client"

import { useAuth, AdminLogin } from "@/components/admin-auth"
import { AdminLayout } from "@/components/admin-layout"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, Book, Users } from "lucide-react"
import { useLibraryData } from "@/lib/library-context"
import { useLanguage } from "@/lib/language-context"

export default function AdminPage() {
  const { isAuthenticated } = useAuth()
  const { news, books } = useLibraryData()
  const { t } = useLanguage()

  if (!isAuthenticated) {
    return <AdminLogin />
  }

  return (
    <AdminLayout>
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t.adminDashboard}</h1>
          <p className="text-xl text-muted-foreground">{t.adminSubtitle}</p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t.totalBooks}</CardTitle>
                <Book className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{books.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t.availableBooks}</CardTitle>
                <Book className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{books.reduce((sum, book) => sum + (book.inStock || 0), 0)}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t.newsArticles}</CardTitle>
                <Newspaper className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{news.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{t.activeMembers}</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,247</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Management Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Newspaper className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t.manageNews}</CardTitle>
                <CardDescription>{t.manageNewsDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/news"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  {t.manageNews}
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Book className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t.manageBooks}</CardTitle>
                <CardDescription>{t.manageBooksDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/books"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  {t.manageBooks}
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}
