// // "use client"

// // import { useState } from "react"
// // import { Link } from "react-router-dom"
// // import { BookOpen, Users, Newspaper, BarChart3, ArrowLeft } from "lucide-react"
// // import { useLanguage } from "../contexts/LanguageContext"
// // import { useLibrary } from "../contexts/LibraryContext"
// // import Navigation from "../components/Navigation"
// // import Footer from "../components/Footer"

// // export default function AdminPage() {
// //   const { t } = useLanguage()
// //   const { books, news } = useLibrary()
// //   const [isAuthenticated, setIsAuthenticated] = useState(false)
// //   const [credentials, setCredentials] = useState({ username: "", password: "" })

// //   const handleLogin = (e) => {
// //     e.preventDefault()
// //     if (credentials.username === "admin" && credentials.password === "library2024") {
// //       setIsAuthenticated(true)
// //     } else {
// //       alert("Invalid credentials. Use: admin / library2024")
// //     }
// //   }

// //   if (!isAuthenticated) {
// //     return (
// //       <div className="min-h-screen flex flex-col">
// //         <Navigation />

// //         <div className="flex-1 flex items-center justify-center bg-gray-50">
// //           <div className="bg-white p-8 rounded-lg shadow-sm border max-w-md w-full mx-4">
// //             <div className="text-center mb-6">
// //               <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
// //               <h1 className="text-2xl font-bold text-gray-900">{t.adminPanel}</h1>
// //               <p className="text-gray-600 mt-2">{t.adminSubtitle}</p>
// //             </div>

// //             <form onSubmit={handleLogin} className="space-y-4">
// //               <div>
// //                 <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
// //                   {t.username}
// //                 </label>
// //                 <input
// //                   id="username"
// //                   type="text"
// //                   value={credentials.username}
// //                   onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
// //                   {t.password}
// //                 </label>
// //                 <input
// //                   id="password"
// //                   type="password"
// //                   value={credentials.password}
// //                   onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
// //                   required
// //                 />
// //               </div>

// //               <button type="submit" className="w-full btn btn-primary">
// //                 {t.login}
// //               </button>
// //             </form>

// //             <div className="mt-6 text-center text-sm text-gray-500">
// //               <p>Demo credentials:</p>
// //               <p>
// //                 <strong>Username:</strong> admin
// //               </p>
// //               <p>
// //                 <strong>Password:</strong> library2024
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         <Footer />
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       <Navigation />

// //       <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
// //         <div className="container">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <Link
// //                 to="/"
// //                 className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors"
// //               >
// //                 <ArrowLeft className="h-4 w-4 mr-2" />
// //                 {t.backToHome}
// //               </Link>
// //               <h1 className="text-4xl font-bold mb-4 text-gray-900">{t.adminPanel}</h1>
// //               <p className="text-xl text-gray-600">{t.adminSubtitle}</p>
// //             </div>
// //             <button onClick={() => setIsAuthenticated(false)} className="btn btn-outline">
// //               {t.logout}
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="section">
// //         <div className="container">
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
// //             <div className="card p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-sm font-medium text-gray-600">Total Books</p>
// //                   <p className="text-2xl font-bold text-gray-900">{books.length}</p>
// //                 </div>
// //                 <BookOpen className="h-8 w-8 text-blue-600" />
// //               </div>
// //             </div>

// //             <div className="card p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-sm font-medium text-gray-600">Available Books</p>
// //                   <p className="text-2xl font-bold text-gray-900">
// //                     {books.reduce((sum, book) => sum + (book.inStock || 0), 0)}
// //                   </p>
// //                 </div>
// //                 <BarChart3 className="h-8 w-8 text-green-600" />
// //               </div>
// //             </div>

// //             <div className="card p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-sm font-medium text-gray-600">News Articles</p>
// //                   <p className="text-2xl font-bold text-gray-900">{news.length}</p>
// //                 </div>
// //                 <Newspaper className="h-8 w-8 text-blue-600" />
// //               </div>
// //             </div>

// //             <div className="card p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-sm font-medium text-gray-600">Active Members</p>
// //                   <p className="text-2xl font-bold text-gray-900">1,247</p>
// //                 </div>
// //                 <Users className="h-8 w-8 text-purple-600" />
// //               </div>
// //             </div>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             <div className="card p-8">
// //               <Newspaper className="h-12 w-12 text-blue-600 mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">Manage News</h3>
// //               <p className="text-gray-600 mb-4">Add, edit, and delete news articles and announcements.</p>
// //               <button className="btn btn-primary">Manage News</button>
// //             </div>

// //             <div className="card p-8">
// //               <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
// //               <h3 className="text-xl font-semibold mb-2">Manage Books</h3>
// //               <p className="text-gray-600 mb-4">
// //                 Add new books to the catalog, update information, and manage availability.
// //               </p>
// //               <button className="btn btn-primary">Manage Books</button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   )
// // }































// "use client"

// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { BookOpen, Users, Newspaper, BarChart3, ArrowLeft } from "lucide-react"
// import { useLanguage } from "../contexts/LanguageContext"
// import { useLibrary } from "../contexts/LibraryContext"
// import Navigation from "../components/Navigation"
// import Footer from "../components/Footer"

// export default function AdminPage() {
//   const { t } = useLanguage()
//   const { books, news } = useLibrary()
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [credentials, setCredentials] = useState({ username: "", password: "" })
//   const navigate = useNavigate()

//   const handleLogin = (e) => {
//     e.preventDefault()
//     if (credentials.username === "admin" && credentials.password === "library2024") {
//       setIsAuthenticated(true)
//     } else {
//       alert("Invalid credentials. Use: admin / library2024")
//     }
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Navigation />

//         <div className="flex-1 flex items-center justify-center bg-gray-50">
//           <div className="bg-white p-8 rounded-lg shadow-sm border max-w-md w-full mx-4">
//             <div className="text-center mb-6">
//               <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//               <h1 className="text-2xl font-bold text-gray-900">{t.adminPanel}</h1>
//               <p className="text-gray-600 mt-2">{t.adminSubtitle}</p>
//             </div>

//             <form onSubmit={handleLogin} className="space-y-4">
//               <div>
//                 <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
//                   {t.username}
//                 </label>
//                 <input
//                   id="username"
//                   type="text"
//                   value={credentials.username}
//                   onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                   {t.password}
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   value={credentials.password}
//                   onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                   required
//                 />
//               </div>

//               <button type="submit" className="w-full btn btn-primary">
//                 {t.login}
//               </button>
//             </form>

//             <div className="mt-6 text-center text-sm text-gray-500">
//               <p>Demo credentials:</p>
//               <p><strong>Username:</strong> admin</p>
//               <p><strong>Password:</strong> library2024</p>
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navigation />

//       <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
//         <div className="container">
//           <div className="flex items-center justify-between">
//             <div>
//               <Link
//                 to="/"
//                 className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors"
//               >
//                 <ArrowLeft className="h-4 w-4 mr-2" />
//                 {t.backToHome}
//               </Link>
//               <h1 className="text-4xl font-bold mb-4 text-gray-900">{t.adminPanel}</h1>
//               <p className="text-xl text-gray-600">{t.adminSubtitle}</p>
//             </div>
//             <button onClick={() => setIsAuthenticated(false)} className="btn btn-outline">
//               {t.logout}
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="section">
//         <div className="container">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             <div className="card p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">Total Books</p>
//                   <p className="text-2xl font-bold text-gray-900">{books.length}</p>
//                 </div>
//                 <BookOpen className="h-8 w-8 text-blue-600" />
//               </div>
//             </div>

//             <div className="card p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">Available Books</p>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {books.reduce((sum, book) => sum + (book.inStock || 0), 0)}
//                   </p>
//                 </div>
//                 <BarChart3 className="h-8 w-8 text-green-600" />
//               </div>
//             </div>

//             <div className="card p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">News Articles</p>
//                   <p className="text-2xl font-bold text-gray-900">{news.length}</p>
//                 </div>
//                 <Newspaper className="h-8 w-8 text-blue-600" />
//               </div>
//             </div>

//             <div className="card p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">Active Members</p>
//                   <p className="text-2xl font-bold text-gray-900">1,247</p>
//                 </div>
//                 <Users className="h-8 w-8 text-purple-600" />
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="card p-8">
//               <Newspaper className="h-12 w-12 text-blue-600 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Manage News</h3>
//               <p className="text-gray-600 mb-4">Add, edit, and delete news articles and announcements.</p>
//               <button className="btn btn-primary" onClick={() => navigate("/manage-news")}>
//                 Manage News
//               </button>
//             </div>

//             <div className="card p-8">
//               <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Manage Books</h3>
//               <p className="text-gray-600 mb-4">Add new books to the catalog, update info, and manage stock.</p>
//               <button className="btn btn-primary" onClick={() => navigate("/manage-books")}>
//                 Manage Books
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }






















"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { BookOpen, Users, Newspaper, BarChart3, ArrowLeft } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { useLibrary } from "../contexts/LibraryContext"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function AdminPage() {
  const { t } = useLanguage()
  const { books, news } = useLibrary()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  const handleLogin = (e) => {
    e.preventDefault()
    if (credentials.username === "admin" && credentials.password === "library2024") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials. Use: admin / library2024")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="bg-white p-8 rounded-lg shadow-sm border max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900">{t.adminPanel}</h1>
              <p className="text-gray-600 mt-2">{t.adminSubtitle}</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.username}
                </label>
                <input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.password}
                </label>
                <input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              <button type="submit" className="w-full btn btn-primary">
                {t.login}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Demo credentials:</p>
              <p><strong>Username:</strong> admin</p>
              <p><strong>Password:</strong> library2024</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.backToHome}
              </Link>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">{t.adminPanel}</h1>
              <p className="text-xl text-gray-600">{t.adminSubtitle}</p>
            </div>
            <button onClick={() => setIsAuthenticated(false)} className="btn btn-outline">
              {t.logout}
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Books</p>
                  <p className="text-2xl font-bold text-gray-900">{books.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Available Books</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {books.reduce((sum, book) => sum + (book.inStock || 0), 0)}
                  </p>
                </div>
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">News Articles</p>
                  <p className="text-2xl font-bold text-gray-900">{news.length}</p>
                </div>
                <Newspaper className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Members</p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <Newspaper className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Manage News</h3>
              <p className="text-gray-600 mb-4">Add, edit, and delete news articles and announcements.</p>
              <Link to="/admin/news" className="btn btn-primary">Manage News</Link>
            </div>

            <div className="card p-8">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Manage Books</h3>
              <p className="text-gray-600 mb-4">
                Add new books to the catalog, update information, and manage availability.
              </p>
              <Link to="/admin/books" className="btn btn-primary">Manage Books</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}