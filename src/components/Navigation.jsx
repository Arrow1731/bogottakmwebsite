"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { BookOpen, Globe, Menu, X } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "uz", name: "O'zbek", flag: "🇺🇿" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
]

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const location = useLocation()

  const currentLang = languages.find((lang) => lang.code === language)

  const navItems = [
    { path: "/", label: t.home },
    { path: "/news", label: t.news },
    { path: "/books", label: t.books },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">City Library</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {currentLang.flag} {currentLang.name}
                </span>
                <span className="sm:hidden">{currentLang.flag}</span>
              </button>

              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setShowLanguageMenu(false)
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-2 first:rounded-t-lg last:rounded-b-lg ${
                        language === lang.code ? "bg-blue-50 text-blue-600" : ""
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-1 px-2 py-1 border border-gray-300 rounded hover:bg-gray-50"
              >
                <Globe className="h-4 w-4" />
                <span>{currentLang.flag}</span>
              </button>

              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setShowLanguageMenu(false)
                      }}
                      className={`w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center space-x-2 text-sm first:rounded-t-lg last:rounded-b-lg ${
                        language === lang.code ? "bg-blue-50 text-blue-600" : ""
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="truncate">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="p-2 rounded-lg hover:bg-gray-100">
              {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setShowMobileMenu(false)}
                  className={`block text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.path ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}