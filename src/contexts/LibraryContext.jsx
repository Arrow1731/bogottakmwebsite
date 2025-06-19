// // "use client"

// // import { createContext, useContext, useState } from "react"

// // const initialNews = [
// //   {
// //     id: 1,
// //     title: "Summer Reading Program Begins",
// //     content:
// //       "Join us for our annual summer reading program! Register now and earn prizes for reading books throughout the summer. Activities include weekly story times, book discussions, and special author visits. This year's theme is 'Adventure Awaits' and we have exciting prizes for participants of all ages.",
// //     date: "2024-06-01",
// //     image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
// //   },
// //   {
// //     id: 2,
// //     title: "New Digital Collection Available",
// //     content:
// //       "We are excited to announce the launch of our new digital collection featuring over 5,000 e-books and audiobooks. Access them anytime with your library card through our online portal. The collection includes bestsellers, classics, and educational materials for all age groups.",
// //     date: "2024-05-15",
// //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
// //   },
// //   {
// //     id: 3,
// //     title: "Library Renovation Update",
// //     content:
// //       "The second floor renovation is progressing well. New study rooms and computer stations will be available starting next month. Thank you for your patience during this improvement project. The new spaces will feature modern furniture, improved lighting, and enhanced Wi-Fi connectivity.",
// //     date: "2024-05-10",
// //     image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500&h=300&fit=crop",
// //   },
// //   {
// //     id: 4,
// //     title: "Author Meet & Greet Event",
// //     content:
// //       "Join us for an exclusive meet and greet with bestselling author Sarah Johnson on June 15th at 6 PM. She will be discussing her latest novel 'Whispers in the Wind' and signing copies. Light refreshments will be served. Registration required due to limited seating.",
// //     date: "2024-06-10",
// //     image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=300&fit=crop",
// //   },
// // ]

// // const initialBooks = [
// //   {
// //     id: 1,
// //     title: "To Kill a Mockingbird",
// //     author: "Harper Lee",
// //     genre: "Fiction",
// //     publishedYear: 1960,
// //     image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
// //     description:
// //       "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl.",
// //     inStock: 5,
// //     checkedOut: 2,
// //   },
// //   {
// //     id: 2,
// //     title: "The Great Gatsby",
// //     author: "F. Scott Fitzgerald",
// //     genre: "Fiction",
// //     publishedYear: 1925,
// //     image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
// //     description:
// //       "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when gin was the national drink and sex the national obsession.",
// //     inStock: 3,
// //     checkedOut: 4,
// //   },
// //   {
// //     id: 3,
// //     title: "Sapiens: A Brief History of Humankind",
// //     author: "Yuval Noah Harari",
// //     genre: "Non-Fiction",
// //     publishedYear: 2011,
// //     image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
// //     description:
// //       "A brief history of humankind, exploring how Homo sapiens came to dominate the world. From the Stone Age to the Silicon Age, this book examines how we organized ourselves in cities, kingdoms, and empires.",
// //     inStock: 8,
// //     checkedOut: 1,
// //   },
// //   {
// //     id: 4,
// //     title: "The Girl with the Dragon Tattoo",
// //     author: "Stieg Larsson",
// //     genre: "Mystery",
// //     publishedYear: 2005,
// //     image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
// //     description:
// //       "A gripping thriller about a journalist and a hacker investigating a wealthy family's dark secrets. When Harriet Vanger disappeared over forty years ago, the search for her remains a mystery.",
// //     inStock: 6,
// //     checkedOut: 3,
// //   },
// //   {
// //     id: 5,
// //     title: "Dune",
// //     author: "Frank Herbert",
// //     genre: "Science Fiction",
// //     publishedYear: 1965,
// //     image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
// //     description:
// //       "Set in the distant future amidst a feudal interstellar society, it tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis.",
// //     inStock: 4,
// //     checkedOut: 5,
// //   },
// //   {
// //     id: 6,
// //     title: "Steve Jobs",
// //     author: "Walter Isaacson",
// //     genre: "Biography",
// //     publishedYear: 2011,
// //     image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=400&fit=crop",
// //     description:
// //       "The exclusive biography of Steve Jobs, based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues.",
// //     inStock: 7,
// //     checkedOut: 2,
// //   },
// // ]

// // const LibraryContext = createContext()

// // export function LibraryProvider({ children }) {
// //   const [news, setNews] = useState(initialNews)
// //   const [books, setBooks] = useState(initialBooks)

// //   const value = {
// //     news,
// //     books,
// //     setNews,
// //     setBooks,
// //   }

// //   return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
// // }

// // export function useLibrary() {
// //   const context = useContext(LibraryContext)
// //   if (!context) {
// //     throw new Error("useLibrary must be used within a LibraryProvider")
// //   }
// //   return context
// // }

































// // "use client"

// // import { createContext, useContext, useEffect, useState } from "react"

// // const initialNews = [/* same initialNews array as you have */]
// // const initialBooks = [/* same initialBooks array as you have */]

// // const LibraryContext = createContext()

// // export function LibraryProvider({ children }) {
// //   const [news, setNews] = useState([])
// //   const [books, setBooks] = useState([])

// //   // Load from localStorage on first render
// //   useEffect(() => {
// //     const storedNews = localStorage.getItem("news")
// //     const storedBooks = localStorage.getItem("books")

// //     setNews(storedNews ? JSON.parse(storedNews) : initialNews)
// //     setBooks(storedBooks ? JSON.parse(storedBooks) : initialBooks)
// //   }, [])

// //   // Save to localStorage when news changes
// //   useEffect(() => {
// //     localStorage.setItem("news", JSON.stringify(news))
// //   }, [news])

// //   // Save to localStorage when books change
// //   useEffect(() => {
// //     localStorage.setItem("books", JSON.stringify(books))
// //   }, [books])

// //   const value = {
// //     news,
// //     books,
// //     setNews,
// //     setBooks,
// //   }

// //   return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
// // }

// // export function useLibrary() {
// //   const context = useContext(LibraryContext)
// //   if (!context) {
// //     throw new Error("useLibrary must be used within a LibraryProvider")
// //   }
// //   return context
// // }
































// "use client"

// import { createContext, useContext, useEffect, useState } from "react"

// const initialNews = [
//   {
//     id: 1,
//     title: "Library Summer Program Begins!",
//     content: "Join our reading challenge this summer and earn rewards!",
//     image: "/news1.jpg",
//     date: "2025-06-15"
//   },
//   {
//     id: 2,
//     title: "New Books Arrived!",
//     content: "Check out the latest arrivals in fiction and non-fiction.",
//     image: "/news2.jpg",
//     date: "2025-06-01"
//   }
// ]

// const initialBooks = [
//   {
//     id: 1,
//     title: "Atomic Habits",
//     author: "James Clear",
//     genre: "Non-Fiction",
//     publishedYear: 2018,
//     image: "/books/atomic.jpg",
//     description: "An easy & proven way to build good habits and break bad ones.",
//     inStock: 5
//   },
//   {
//     id: 2,
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     genre: "Fiction",
//     publishedYear: 2000,
//     image: "/books/harry.jpg",
//     description: "A young wizard's adventures at Hogwarts.",
//     inStock: 3
//   }
// ]

// const LibraryContext = createContext()

// export function LibraryProvider({ children }) {
//   const [news, setNews] = useState([])
//   const [books, setBooks] = useState([])

//   // Load from localStorage
//   useEffect(() => {
//     const storedNews = localStorage.getItem("news")
//     const storedBooks = localStorage.getItem("books")

//     setNews(storedNews ? JSON.parse(storedNews) : initialNews)
//     setBooks(storedBooks ? JSON.parse(storedBooks) : initialBooks)
//   }, [])

//   // Save to localStorage on change
//   useEffect(() => {
//     localStorage.setItem("news", JSON.stringify(news))
//   }, [news])

//   useEffect(() => {
//     localStorage.setItem("books", JSON.stringify(books))
//   }, [books])

//   const value = {
//     news,
//     books,
//     setNews,
//     setBooks
//   }

//   return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
// }

// export function useLibrary() {
//   const context = useContext(LibraryContext)
//   if (!context) {
//     throw new Error("useLibrary must be used within a LibraryProvider")
//   }
//   return context
// }






























// src/contexts/LibraryContext.jsx
"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { db } from "../firebase/firebase"
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"

const LibraryContext = createContext()

export function LibraryProvider({ children }) {
  const [news, setNews] = useState([])
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const querySnapshot = await getDocs(collection(db, "books"))
    const bookData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    setBooks(bookData)
  }

  const fetchNews = async () => {
    const querySnapshot = await getDocs(collection(db, "news"))
    const newsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    setNews(newsData)
  }

  useEffect(() => {
    fetchBooks()
    fetchNews()
  }, [])

  const addBook = async (book) => {
    await addDoc(collection(db, "books"), book)
    fetchBooks()
  }

  const deleteBook = async (id) => {
    await deleteDoc(doc(db, "books", id))
    fetchBooks()
  }

  const addNews = async (article) => {
    await addDoc(collection(db, "news"), article)
    fetchNews()
  }

  const deleteNews = async (id) => {
    await deleteDoc(doc(db, "news", id))
    fetchNews()
  }

  const value = {
    news,
    books,
    addBook,
    addNews,
    deleteBook,
    deleteNews,
  }

  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
}

export function useLibrary() {
  const context = useContext(LibraryContext)
  if (!context) {
    throw new Error("useLibrary must be used within a LibraryProvider")
  }
  return context
}