// src/pages/ManageBooks.jsx
import { useState } from "react"
import { useLibrary } from "../contexts/LibraryContext"

export default function ManageBooks() {
  const { books, addBook, deleteBook } = useLibrary()

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "Fiction",
    publishedYear: new Date().getFullYear(),
    image: "",
    description: "",
    inStock: 1,
  })

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setNewBook({ ...newBook, image: reader.result })
    }
    if (file) reader.readAsDataURL(file)
  }

  const handleAddBook = async () => {
    const { title, author, image, publishedYear } = newBook
    if (!title || !author || !image || !publishedYear) {
      return alert("Please fill in all fields.")
    }
    await addBook({ ...newBook, createdAt: new Date().toISOString() })
    setNewBook({
      title: "",
      author: "",
      genre: "Fiction",
      publishedYear: new Date().getFullYear(),
      image: "",
      description: "",
      inStock: 1,
    })
  }

  return (
    <div className="container py-12">
      <h2 className="text-2xl font-bold mb-6">Manage Books</h2>

      <div className="mb-6 space-y-4">
        <input className="w-full border p-2 rounded" placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input className="w-full border p-2 rounded" placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <select className="w-full border p-2 rounded"
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
        >
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Mystery</option>
          <option>Science Fiction</option>
          <option>Biography</option>
        </select>
        <input type="number" className="w-full border p-2 rounded" placeholder="Published Year"
          value={newBook.publishedYear}
          onChange={(e) => setNewBook({ ...newBook, publishedYear: parseInt(e.target.value) })}
        />
        <input type="file" accept="image/*" className="w-full border p-2 rounded"
          onChange={handleImageUpload}
        />
        {newBook.image && <img src={newBook.image} alt="Preview" className="w-32 h-48 object-cover" />}
        <textarea className="w-full border p-2 rounded" placeholder="Description"
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAddBook}>Add Book</button>
      </div>

      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{book.title}</p>
              <p className="text-sm text-gray-500">By {book.author}</p>
            </div>
            <button className="btn btn-outline" onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}