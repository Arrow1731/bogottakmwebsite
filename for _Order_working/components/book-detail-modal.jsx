"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { BookOpen, User, Calendar, Package } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function BookDetailModal({ book, isOpen, onClose }) {
  const { t } = useLanguage()

  if (!book) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{book.title}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {book.image ? (
              <img
                src={book.image || "/placeholder.svg"}
                alt={book.title}
                className="w-full h-80 object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-80 bg-muted rounded-lg flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-muted-foreground" />
              </div>
            )}

            {book.images && book.images.length > 0 && (
              <div className="grid grid-cols-2 gap-2">
                {book.images.slice(0, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${book.title} - Image ${index + 1}`}
                    className="w-full h-24 object-cover rounded"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">
                  {t.by} {book.author}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span>
                  {t.published} {book.publishedYear}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <Badge variant="secondary">{t[book.genre] || book.genre}</Badge>
              </div>

              <div className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-muted-foreground" />
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="font-medium">In Stock:</span> {book.inStock || 5}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Checked Out:</span> {book.checkedOut || 2}
                  </div>
                </div>
              </div>
            </div>

            {book.description && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{book.description}</p>
              </div>
            )}

            {book.authorInfo && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">About the Author</h3>
                <p className="text-muted-foreground leading-relaxed">{book.authorInfo}</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
