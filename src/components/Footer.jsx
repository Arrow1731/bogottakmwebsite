"use client"

import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container text-center">
        <p>&copy; 2025 Bog'ot tumani - AKM. Barcha huquqlar himoyalangan. <br /> WebSite Powered by <span className='font-bold'><a href="#">MAX - V</a></span></p>
      </div>
    </footer>
  )
}
