"use client"

import { useState } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search } from "lucide-react"
import { useLibraryData } from "@/lib/library-context"
import { useLanguage } from "@/lib/language-context"
import { Layout } from "@/components/layout"
import { BookDetailModal } from "@/components/book-detail-modal"

export default function BooksPage() {
  const { books, getAllGenres } = useLibraryData()
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [selectedBook, setSelectedBook] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const genres = ["all", ...getAllGenres()]

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  const handleBookClick = (book) => {
    setSelectedBook(book)
    setIsModalOpen(true)
  }

  const getGenreTranslation = (genre) => {
    if (genre === "all") return t.allGenres
    return t[genre] || genre
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t.bookCatalog}</h1>
          <p className="text-xl text-muted-foreground">{t.bookCatalogSubtitle}</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder={t.selectGenre} />
              </SelectTrigger>
              <SelectContent>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {getGenreTranslation(genre)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <Card
                key={book.id}
                className="hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group"
                onClick={() => handleBookClick(book)}
              >
                <CardHeader className="p-0">
                  <div className="aspect-[3/4] overflow-hidden">
                    {book.image ? (
                      <img
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardHeader className="pt-4">
                  <CardTitle className="line-clamp-2 text-lg group-hover:text-primary transition-colors">
                    {book.title}
                  </CardTitle>
                  <CardDescription>
                    <div className="space-y-1">
                      <div className="font-medium">
                        {t.by} {book.author}
                      </div>
                      <div className="text-sm">{getGenreTranslation(book.genre)}</div>
                      <div className="text-sm">
                        {t.published} {book.publishedYear}
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{t.noBooksFound}</p>
            </div>
          )}
        </div>
      </section>

      <BookDetailModal book={selectedBook} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  )
}
