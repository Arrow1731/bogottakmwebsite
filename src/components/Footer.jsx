"use client"

import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container text-center">
        <p>&copy; 2024 City Library. All rights reserved.</p>
      </div>
    </footer>
  )
}
