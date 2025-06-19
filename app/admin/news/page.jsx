"use client"

import { useAuth, AdminLogin } from "@/components/admin-auth"
import { AdminLayout } from "@/components/admin-layout"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Plus, Edit, Trash2, Calendar } from "lucide-react"
import { useLibraryData } from "@/lib/library-context"
import { useLanguage } from "@/lib/language-context"
import { ImageUpload } from "@/components/image-upload"

export default function AdminNewsPage() {
  const { isAuthenticated } = useAuth()
  const { news, addNews, updateNews, deleteNews } = useLibraryData()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingNews, setEditingNews] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    image: null,
  })

  const { t } = useLanguage()

  if (!isAuthenticated) {
    return <AdminLogin />
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingNews) {
      updateNews(editingNews.id, formData)
    } else {
      addNews(formData)
    }
    setFormData({ title: "", content: "", date: new Date().toISOString().split("T")[0], image: null })
    setEditingNews(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem)
    setFormData({
      title: newsItem.title || "",
      content: newsItem.content || "",
      date: newsItem.date || new Date().toISOString().split("T")[0],
      image: newsItem.image || null,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm(t.deleteConfirmNews)) {
      deleteNews(id)
    }
  }

  const resetForm = () => {
    setEditingNews(null)
    setFormData({ title: "", content: "", date: new Date().toISOString().split("T")[0], image: null })
  }

  return (
    <AdminLayout>
      {/* Header */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{t.manageNewsTitle}</h1>
              <p className="text-muted-foreground">{t.manageNewsSubtitle}</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm}>
                  <Plus className="h-4 w-4 mr-2" />
                  {t.addNews}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                <form onSubmit={handleSubmit}>
                  <DialogHeader>
                    <DialogTitle>{editingNews ? t.editNewsArticle : t.addNewsArticle}</DialogTitle>
                    <DialogDescription>{editingNews ? t.updateNewsDesc : t.createNewsDesc}</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
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
                      <Label htmlFor="date">{t.date}</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <ImageUpload
                        label={t.image}
                        value={formData.image}
                        onChange={(image) => setFormData({ ...formData, image })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="content">{t.content}</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">{editingNews ? t.update : t.create}</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* News Table */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle>News Articles</CardTitle>
              <CardDescription>Manage all news articles and announcements.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>{t.contentPreview}</TableHead>
                    <TableHead className="text-right">{t.actions}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {news.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>
                        {article.image ? (
                          <img
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-muted rounded flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">No Image</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">{article.title}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        <p className="truncate">{article.content}</p>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm" onClick={() => handleEdit(article)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDelete(article.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {news.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">{t.noNewsFound}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </AdminLayout>
  )
}
