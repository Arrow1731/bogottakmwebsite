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