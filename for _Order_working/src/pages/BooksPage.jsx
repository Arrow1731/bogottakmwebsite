"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { BookOpen, Search, ArrowLeft } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { useLibrary } from "../contexts/LibraryContext"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

const genres = ["All", "Fiction", "Non-Fiction", "Mystery", "Science Fiction", "Biography"]

export default function BooksPage() {
  const { t } = useLanguage()
  const { books } = useLibrary()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("All")

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === "All" || book.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.backToHome}
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{t.bookCatalog}</h1>
          <p className="text-xl text-gray-600">{t.bookCatalogSubtitle}</p>
        </div>
      </section>

      <section className="py-8 border-b bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
              />
            </div>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre === "All" ? t.allGenres : genre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="card overflow-hidden group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="font-medium">
                      {t.by} {book.author}
                    </div>
                    <div>{book.genre}</div>
                    <div>
                      {t.published} {book.publishedYear}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">{book.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">{t.noBooksFound}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}