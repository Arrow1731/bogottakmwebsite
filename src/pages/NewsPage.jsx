"use client"

import { Link } from "react-router-dom"
import { Calendar, ArrowLeft } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { useLibrary } from "../contexts/LibraryContext"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function NewsPage() {
  const { t } = useLanguage()
  const { news } = useLibrary()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.backToHome}
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{t.libraryNews}</h1>
          <p className="text-xl text-gray-600">{t.newsSubtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <div key={article.id} className="card overflow-hidden group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{article.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}