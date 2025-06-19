"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar } from "lucide-react"

export function NewsDetailModal({ news, isOpen, onClose }) {
  if (!news) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{news.title}</DialogTitle>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{new Date(news.date).toLocaleDateString()}</span>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {news.image && (
            <div className="w-full">
              <img
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          <div className="prose max-w-none">
            <p className="text-base leading-relaxed whitespace-pre-wrap">{news.content}</p>
          </div>

          {news.images && news.images.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Images</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {news.images.map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${news.title} - Image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
