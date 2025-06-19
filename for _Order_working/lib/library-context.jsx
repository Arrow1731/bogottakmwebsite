"use client"

import { createContext, useContext, useState } from "react"

const LibraryContext = createContext(undefined)

const initialNews = [
  {
    id: "1",
    title: "Summer Reading Program Begins",
    content:
      "Join us for our annual summer reading program! Register now and earn prizes for reading books throughout the summer. Activities include weekly story times, book discussions, and special author visits. This year's theme is 'Adventure Awaits' and we have exciting prizes for participants of all ages.",
    date: "2024-06-01",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "2",
    title: "New Digital Collection Available",
    content:
      "We are excited to announce the launch of our new digital collection featuring over 5,000 e-books and audiobooks. Access them anytime with your library card through our online portal. The collection includes bestsellers, classics, and educational materials for all age groups.",
    date: "2024-05-15",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "3",
    title: "Library Renovation Update",
    content:
      "The second floor renovation is progressing well. New study rooms and computer stations will be available starting next month. Thank you for your patience during this improvement project. The new spaces will feature modern furniture, improved lighting, and enhanced Wi-Fi connectivity.",
    date: "2024-05-10",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "4",
    title: "Author Meet & Greet Event",
    content:
      "Join us for an exclusive meet and greet with bestselling author Sarah Johnson on June 15th at 6 PM. She will be discussing her latest novel 'Whispers in the Wind' and signing copies. Light refreshments will be served. Registration required due to limited seating.",
    date: "2024-06-10",
    image: "/placeholder.svg?height=300&width=500",
  },
]

const initialBooks = [
  {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "fiction",
    publishedYear: 1960,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.",
    authorInfo:
      "Harper Lee was an American novelist widely known for To Kill a Mockingbird, published in 1960, which won the 1961 Pulitzer Prize for Fiction. She also wrote Go Set a Watchman in the mid-1950s and published it in July 2015 as a sequel to Mockingbird.",
    inStock: 5,
    checkedOut: 2,
  },
  {
    id: "2",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "fiction",
    publishedYear: 1925,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s.",
    authorInfo:
      "F. Scott Fitzgerald was an American novelist and short story writer, widely regarded as one of the greatest American writers of the 20th century. He is best known for his novel The Great Gatsby (1925) which epitomizes the Jazz Age.",
    inStock: 3,
    checkedOut: 4,
  },
  {
    id: "3",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "nonFiction",
    publishedYear: 2011,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "A brief history of humankind, exploring how Homo sapiens came to dominate the world. From the Stone Age to the Silicon Age, this book examines how we organized ourselves in cities, kingdoms, and empires; why we came to believe in gods, nations, and human rights; how we came to trust money, books, and laws.",
    authorInfo:
      "Yuval Noah Harari is an Israeli public intellectual, historian and professor in the Department of History at the Hebrew University of Jerusalem. He is the author of the popular science bestsellers Sapiens, Homo Deus, and 21 Lessons for the 21st Century.",
    inStock: 8,
    checkedOut: 1,
  },
  {
    id: "4",
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "mystery",
    publishedYear: 2005,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "A gripping thriller about a journalist and a hacker investigating a wealthy family's dark secrets. When Harriet Vanger, a scion of one of Sweden's wealthiest families, disappeared over forty years ago, the search for her remains a mystery that consumes her great-uncle, Henrik Vanger.",
    authorInfo:
      "Stieg Larsson was a Swedish journalist and writer, best known for his Millennium trilogy of crime novels, which were published posthumously, starting in 2005, and adapted as films and a TV series.",
    inStock: 6,
    checkedOut: 3,
  },
  {
    id: "5",
    title: "Dune",
    author: "Frank Herbert",
    genre: "scienceFiction",
    publishedYear: 1965,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Set in the distant future amidst a feudal interstellar society, it tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or 'spice', a drug that extends life and enhances mental abilities.",
    authorInfo:
      "Frank Herbert was an American science fiction author best known for the 1965 novel Dune and its five sequels. Though he became famous for his novels, he also wrote short stories and worked as a newspaper journalist, photographer, book reviewer, ecological consultant, and lecturer.",
    inStock: 4,
    checkedOut: 5,
  },
  {
    id: "6",
    title: "Steve Jobs",
    author: "Walter Isaacson",
    genre: "biography",
    publishedYear: 2011,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "The exclusive biography of Steve Jobs, based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur.",
    authorInfo:
      "Walter Isaacson is an American author, journalist, and professor. He has been the President and CEO of the Aspen Institute, a nonpartisan policy studies organization based in Washington, D.C. He has also been the chairman and CEO of CNN and the editor of Time magazine.",
    inStock: 7,
    checkedOut: 2,
  },
  {
    id: "7",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    publishedYear: 1954,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "An epic high-fantasy novel that follows the quest to destroy the One Ring and defeat the Dark Lord Sauron. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.",
    authorInfo:
      "John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings.",
    inStock: 9,
    checkedOut: 3,
  },
  {
    id: "8",
    title: "Gone Girl",
    author: "Gillian Flynn",
    genre: "thriller",
    publishedYear: 2012,
    image: "/placeholder.svg?height=400&width=300",
    description:
      "A psychological thriller about Nick Dunne who becomes the prime suspect in the sudden disappearance of his wife Amy. The story unfolds through dual narratives, revealing the complexities of their marriage and the dark secrets they both harbor.",
    authorInfo:
      "Gillian Flynn is an American author, screenwriter, and former television critic for Entertainment Weekly. She has published three novels, Sharp Objects, Dark Places, and Gone Girl, all three of which have been adapted for film or television.",
    inStock: 5,
    checkedOut: 4,
  },
]

const defaultGenres = [
  "fiction",
  "nonFiction",
  "mystery",
  "romance",
  "scienceFiction",
  "biography",
  "history",
  "children",
  "youngAdult",
  "fantasy",
  "thriller",
  "horror",
  "poetry",
  "drama",
  "philosophy",
]

export function LibraryProvider({ children }) {
  const [news, setNews] = useState(initialNews)
  const [books, setBooks] = useState(initialBooks)
  const [customGenres, setCustomGenres] = useState([])

  const addNews = (newsData) => {
    const newNews = {
      ...newsData,
      id: Date.now().toString(),
    }
    setNews((prev) => [newNews, ...prev])
  }

  const updateNews = (id, newsData) => {
    setNews((prev) => prev.map((item) => (item.id === id ? { ...newsData, id } : item)))
  }

  const deleteNews = (id) => {
    setNews((prev) => prev.filter((item) => item.id !== id))
  }

  const addBook = (bookData) => {
    const newBook = {
      ...bookData,
      id: Date.now().toString(),
    }
    setBooks((prev) => [newBook, ...prev])
  }

  const updateBook = (id, bookData) => {
    setBooks((prev) => prev.map((book) => (book.id === id ? { ...bookData, id } : book)))
  }

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id))
  }

  const addCustomGenre = (genre) => {
    if (!customGenres.includes(genre) && !defaultGenres.includes(genre)) {
      setCustomGenres((prev) => [...prev, genre])
    }
  }

  const getAllGenres = () => {
    return [...defaultGenres, ...customGenres]
  }

  return (
    <LibraryContext.Provider
      value={{
        news,
        books,
        addNews,
        updateNews,
        deleteNews,
        addBook,
        updateBook,
        deleteBook,
        customGenres,
        addCustomGenre,
        getAllGenres,
      }}
    >
      {children}
    </LibraryContext.Provider>
  )
}

export function useLibraryData() {
  const context = useContext(LibraryContext)
  if (context === undefined) {
    throw new Error("useLibraryData must be used within a LibraryProvider")
  }
  return context
}
