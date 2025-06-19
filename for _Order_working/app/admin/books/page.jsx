"use client"

import { useAuth, AdminLogin } from "@/components/admin-auth"
import { AdminLayout } from "@/components/admin-layout"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { BookOpen, Plus, Edit, Trash2 } from "lucide-react"
import { useLibraryData } from "@/lib/library-context"
import { useLanguage } from "@/lib/language-context"
import { ImageUpload } from "@/components/image-upload"

export default function AdminBooksPage() {
  const { isAuthenticated } = useAuth()
  const { books, addBook, updateBook, deleteBook, getAllGenres, addCustomGenre } = useLibraryData()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingBook, setEditingBook] = useState(null)
  const [showCustomGenre, setShowCustomGenre] = useState(false)
  const [customGenreInput, setCustomGenreInput] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publishedYear: new Date().getFullYear(),
    image: null,
    description: "",
    authorInfo: "",
    inStock: 5,
    checkedOut: 0,
  })

  const { t } = useLanguage()

  if (!isAuthenticated) {
    return <AdminLogin />
  }

  const genres = getAllGenres()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingBook) {
      updateBook(editingBook.id, formData)
    } else {
      addBook(formData)
    }
    resetForm()
    setIsDialogOpen(false)
  }

  const handleEdit = (book) => {
    setEditingBook(book)
    setFormData({
      title: book.title || "",
      author: book.author || "",
      genre: book.genre || "",
      publishedYear: book.publishedYear || new Date().getFullYear(),
      image: book.image || null,
      description: book.description || "",
      authorInfo: book.authorInfo || "",
      inStock: book.inStock || 5,
      checkedOut: book.checkedOut || 0,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm(t.deleteConfirmBook)) {
      deleteBook(id)
    }
  }

  const handleAddCustomGenre = () => {
    if (customGenreInput.trim()) {
      addCustomGenre(customGenreInput.trim())
      setFormData({ ...formData, genre: customGenreInput.trim() })
      setCustomGenreInput("")
      setShowCustomGenre(false)
    }
  }

  const getGenreTranslation = (genre) => {
    return t[genre] || genre
  }

  const handleNumberChange = (field, value) => {
    const numValue = Number.parseInt(value) || 0
    setFormData({ ...formData, [field]: numValue })
  }

  const resetForm = () => {
    setEditingBook(null)
    setFormData({
      title: "",
      author: "",
      genre: "",
      publishedYear: new Date().getFullYear(),
      image: null,
      description: "",
      authorInfo: "",
      inStock: 5,
      checkedOut: 0,
    })
    setShowCustomGenre(false)
    setCustomGenreInput("")
  }

  return (
    <AdminLayout>
      {/* Header */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{t.manageBooksTitle}</h1>
              <p className="text-muted-foreground">{t.manageBooksSubtitle}</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm}>
                  <Plus className="h-4 w-4 mr-2" />
                  {t.addBook}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
                <form onSubmit={handleSubmit}>
                  <DialogHeader>
                    <DialogTitle>{editingBook ? t.editBook : t.addBook}</DialogTitle>
                    <DialogDescription>{editingBook ? t.updateBookDesc : t.addBookDesc}</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="title">{t.title}</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="author">{t.author}</Label>
                        <Input
                          id="author"
                          value={formData.author}
                          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="genre">{t.genre}</Label>
                        <div className="flex gap-2">
                          <Select
                            value={formData.genre}
                            onValueChange={(value) => {
                              if (value === "custom") {
                                setShowCustomGenre(true)
                              } else {
                                setFormData({ ...formData, genre: value })
                              }
                            }}
                          >
                            <SelectTrigger className="flex-1">
                              <SelectValue placeholder="Select a genre" />
                            </SelectTrigger>
                            <SelectContent>
                              {genres.map((genre) => (
                                <SelectItem key={genre} value={genre}>
                                  {getGenreTranslation(genre)}
                                </SelectItem>
                              ))}
                              <SelectItem value="custom">{t.addGenre}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {showCustomGenre && (
                          <div className="flex gap-2 mt-2">
                            <Input
                              placeholder={t.customGenre}
                              value={customGenreInput}
                              onChange={(e) => setCustomGenreInput(e.target.value)}
                            />
                            <Button type="button" size="sm" onClick={handleAddCustomGenre}>
                              Add
                            </Button>
                            <Button type="button" size="sm" variant="outline" onClick={() => setShowCustomGenre(false)}>
                              Cancel
                            </Button>
                          </div>
                        )}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="year">{t.publishedYear}</Label>
                        <Input
                          id="year"
                          type="number"
                          min="1000"
                          max={new Date().getFullYear()}
                          value={formData.publishedYear}
                          onChange={(e) => handleNumberChange("publishedYear", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="inStock">In Stock</Label>
                        <Input
                          id="inStock"
                          type="number"
                          min="0"
                          value={formData.inStock}
                          onChange={(e) => handleNumberChange("inStock", e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="checkedOut">Checked Out</Label>
                        <Input
                          id="checkedOut"
                          type="number"
                          min="0"
                          value={formData.checkedOut}
                          onChange={(e) => handleNumberChange("checkedOut", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <ImageUpload
                        label={t.image}
                        value={formData.image}
                        onChange={(image) => setFormData({ ...formData, image })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">{t.description}</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="authorInfo">{t.authorInfo}</Label>
                      <Textarea
                        id="authorInfo"
                        value={formData.authorInfo}
                        onChange={(e) => setFormData({ ...formData, authorInfo: e.target.value })}
                        rows={3}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">{editingBook ? t.update : t.create}</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Books Table */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle>Book Catalog</CardTitle>
              <CardDescription>Manage all books in the library collection.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>{t.title}</TableHead>
                    <TableHead>{t.author}</TableHead>
                    <TableHead>{t.genre}</TableHead>
                    <TableHead>{t.year}</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead className="text-right">{t.actions}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {books.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>
                        {book.image ? (
                          <img
                            src={book.image || "/placeholder.svg"}
                            alt={book.title}
                            className="w-16 h-20 object-cover rounded"
                          />
                        ) : (
                          <div className="w-16 h-20 bg-muted rounded flex items-center justify-center">
                            <BookOpen className="h-6 w-6 text-muted-foreground" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{getGenreTranslation(book.genre)}</TableCell>
                      <TableCell>{book.publishedYear}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>In: {book.inStock || 0}</div>
                          <div>Out: {book.checkedOut || 0}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleEdit(book)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDelete(book.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {books.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">{t.noBooksFoundAdmin}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </AdminLayout>
  )
}
