import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LanguageProvider } from "./contexts/LanguageContext"
import { LibraryProvider } from "./contexts/LibraryContext"
import HomePage from "./pages/HomePage"
import NewsPage from "./pages/NewsPage"
import BooksPage from "./pages/BooksPage"
import AdminPage from "./pages/AdminPage"
import ManageBooks from "./pages/ManageBooks"
import ManageNews from "./pages/ManageNews"

function App() {
  return (
    <LanguageProvider>
      <LibraryProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/books" element={<ManageBooks />} />
              <Route path="/admin/news" element={<ManageNews />} />
            </Routes>
          </div>
        </Router>
      </LibraryProvider>
    </LanguageProvider>
  )
}

export default App