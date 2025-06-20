// // // // import { useLibrary } from "../contexts/LibraryContext"
// // // // import { useState } from "react"

// // // // export default function ManageNews() {
// // // //   const { news, setNews } = useLibrary()
// // // //   const [newPost, setNewPost] = useState({ title: "", content: "" })

// // // //   const handleAddNews = () => {
// // // //     if (!newPost.title || !newPost.content) return alert("Please fill all fields.")
// // // //     setNews([...news, { ...newPost, id: Date.now() }])
// // // //     setNewPost({ title: "", content: "" })
// // // //   }

// // // //   const handleDelete = (id) => {
// // // //     setNews(news.filter(post => post.id !== id))
// // // //   }

// // // //   return (
// // // //     <div className="container py-12">
// // // //       <h2 className="text-2xl font-bold mb-6">Manage News</h2>

// // // //       <div className="mb-6 space-y-4">
// // // //         <input
// // // //           className="w-full border p-2 rounded"
// // // //           placeholder="Title"
// // // //           value={newPost.title}
// // // //           onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
// // // //         />
// // // //         <textarea
// // // //           className="w-full border p-2 rounded"
// // // //           placeholder="Content"
// // // //           value={newPost.content}
// // // //           onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
// // // //         />
// // // //         <button className="btn btn-primary" onClick={handleAddNews}>Add News</button>
// // // //       </div>

// // // //       <ul className="space-y-4">
// // // //         {news.map((post) => (
// // // //           <li key={post.id} className="p-4 border rounded flex justify-between items-center">
// // // //             <div>
// // // //               <p className="font-semibold">{post.title}</p>
// // // //               <p className="text-sm text-gray-500">{post.content.slice(0, 80)}...</p>
// // // //             </div>
// // // //             <button className="btn btn-outline" onClick={() => handleDelete(post.id)}>Delete</button>
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   )
// // // // }



















// // // import { useLibrary } from "../contexts/LibraryContext"
// // // import { useState } from "react"

// // // export default function ManageNews() {
// // //   const { news, setNews } = useLibrary()
// // //   const [newPost, setNewPost] = useState({ title: "", content: "" })

// // //   const handleAddNews = () => {
// // //     if (!newPost.title || !newPost.content) return alert("Please fill all fields.")
// // //     const currentDate = new Date().toISOString()
// // //     setNews([...news, { ...newPost, id: Date.now(), date: currentDate }])
// // //     setNewPost({ title: "", content: "" })
// // //   }

// // //   const handleDelete = (id) => {
// // //     setNews(news.filter(post => post.id !== id))
// // //   }

// // //   return (
// // //     <div className="container py-12">
// // //       <h2 className="text-2xl font-bold mb-6">Manage News</h2>

// // //       <div className="mb-6 space-y-4">
// // //         <input
// // //           className="w-full border p-2 rounded"
// // //           placeholder="Title"
// // //           value={newPost.title}
// // //           onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
// // //         />
// // //         <textarea
// // //           className="w-full border p-2 rounded"
// // //           placeholder="Content"
// // //           value={newPost.content}
// // //           onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
// // //         />
// // //         <button className="btn btn-primary" onClick={handleAddNews}>Add News</button>
// // //       </div>

// // //       <ul className="space-y-4">
// // //         {news.map((post) => (
// // //           <li key={post.id} className="p-4 border rounded flex justify-between items-center">
// // //             <div>
// // //               <p className="font-semibold">{post.title}</p>
// // //               <p className="text-sm text-gray-500">{post.content.slice(0, 80)}...</p>
// // //             </div>
// // //             <button className="btn btn-outline" onClick={() => handleDelete(post.id)}>Delete</button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   )
// // // }































// // import { useLibrary } from "../contexts/LibraryContext"
// // import { useState } from "react"

// // export default function ManageNews() {
// //   const { news, setNews } = useLibrary()

// //   const [newPost, setNewPost] = useState({
// //     title: "",
// //     content: "",
// //     image: "",
// //     date: new Date().toISOString().split("T")[0],
// //   })

// //   const handleAddNews = () => {
// //     if (!newPost.title || !newPost.content || !newPost.image || !newPost.date) {
// //       return alert("Please fill in all fields.")
// //     }
// //     setNews([...news, { ...newPost, id: Date.now() }])
// //     setNewPost({
// //       title: "",
// //       content: "",
// //       image: "",
// //       date: new Date().toISOString().split("T")[0],
// //     })
// //   }

// //   const handleDelete = (id) => {
// //     setNews(news.filter(post => post.id !== id))
// //   }

// //   return (
// //     <div className="container py-12">
// //       <h2 className="text-2xl font-bold mb-6">Manage News</h2>

// //       <div className="mb-6 space-y-4">
// //         <input className="w-full border p-2 rounded" placeholder="Title"
// //           value={newPost.title}
// //           onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
// //         />
// //         <textarea className="w-full border p-2 rounded" placeholder="Content"
// //           value={newPost.content}
// //           onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
// //         />
// //         <input className="w-full border p-2 rounded" placeholder="Image URL"
// //           value={newPost.image}
// //           onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
// //         />
// //         <input className="w-full border p-2 rounded" type="date"
// //           value={newPost.date}
// //           onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
// //         />
// //         <button className="btn btn-primary" onClick={handleAddNews}>Add News</button>
// //       </div>

// //       <ul className="space-y-4">
// //         {news.map((post) => (
// //           <li key={post.id} className="p-4 border rounded flex justify-between items-center">
// //             <div>
// //               <p className="font-semibold">{post.title}</p>
// //               <p className="text-sm text-gray-500">{post.content.slice(0, 80)}...</p>
// //             </div>
// //             <button className="btn btn-outline" onClick={() => handleDelete(post.id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   )
// // }
































// src/pages/ManageNews.jsx
import { useState } from "react"
import { useLibrary } from "../contexts/LibraryContext"
import Navigation from "../components/Navigation";


export default function ManageNews() {
  const { news, addNews, deleteNews } = useLibrary()

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: "",
    date: new Date().toISOString().split("T")[0],
  })

  const handleAddNews = async () => {
    const { title, content, image, date } = newPost
    if (!title || !content || !image || !date) {
      return alert("Please fill in all fields.")
    }
    await addNews({ ...newPost, createdAt: new Date().toISOString() })
    setNewPost({
      title: "",
      content: "",
      image: "",
      date: new Date().toISOString().split("T")[0],
    })
  }

  return (
    <div className="container py-12">
      <Navigation />
      <h2 className="text-2xl font-bold mb-6">Manage News</h2>

      <div className="mb-6 space-y-4">
        <input className="w-full border p-2 rounded" placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea className="w-full border p-2 rounded" placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <input className="w-full border p-2 rounded" placeholder="Image URL"
          value={newPost.image}
          onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
        />
        <input className="w-full border p-2 rounded" type="date"
          value={newPost.date}
          onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAddNews}>Add News</button>
      </div>

      <ul className="space-y-4">
        {news.map((post) => (
          <li key={post.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{post.title}</p>
              <p className="text-sm text-gray-500">{post.content.slice(0, 80)}...</p>
            </div>
            <button className="btn btn-outline" onClick={() => deleteNews(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}