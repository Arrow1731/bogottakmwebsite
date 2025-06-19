"use client"

import { useState } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { useLibraryData } from "@/lib/library-context"
import { useLanguage } from "@/lib/language-context"
import { Layout } from "@/components/layout"
import { NewsDetailModal } from "@/components/news-detail-modal"

export default function NewsPage() {
  const { news } = useLibraryData()
  const { t } = useLanguage()
  const [selectedNews, setSelectedNews] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleNewsClick = (newsItem) => {
    setSelectedNews(newsItem)
    setIsModalOpen(true)
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t.libraryNews}</h1>
          <p className="text-xl text-muted-foreground">{t.newsSubtitle}</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <Card
                key={article.id}
                className="hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group"
                onClick={() => handleNewsClick(article)}
              >
                {article.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{article.content}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {news.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t.noNewsAvailable}</p>
            </div>
          )}
        </div>
      </section>

      <NewsDetailModal news={selectedNews} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  )
}
