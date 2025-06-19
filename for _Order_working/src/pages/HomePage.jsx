"use client"

import { Link } from "react-router-dom"
import { BookOpen, Calendar, Clock, MapPin, Phone, Mail, Users, Award, Wifi } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">{t.welcomeTitle}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t.welcomeSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/books" className="btn btn-primary">
              {t.browseBooks}
            </Link>
            <Link to="/news" className="btn btn-outline">
              {t.latestNews}
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">50,000+</div>
              <div className="text-sm text-gray-600">Books Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">1,200+</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">70+</div>
              <div className="text-sm text-gray-600">Years of Service</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Digital Access</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{t.aboutLibrary}</h2>
              <p className="text-gray-600 mb-4">{t.aboutDescription1}</p>
              <p className="text-gray-600 mb-6">{t.aboutDescription2}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>Award-winning programs</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>Community focused</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Wifi className="h-4 w-4 text-blue-600" />
                  <span>Free Wi-Fi</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.ourServices}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.bookLending}</h3>
              <p className="text-gray-600">{t.bookLendingDesc}</p>
            </div>
            <div className="card p-6">
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.eventsPrograms}</h3>
              <p className="text-gray-600">{t.eventsProgramsDesc}</p>
            </div>
            <div className="card p-6">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.studySpaces}</h3>
              <p className="text-gray-600">{t.studySpacesDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{t.visitUs}</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span>123 Main Street, Downtown, City 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span>info@citylibrary.org</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.openingHours}</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}