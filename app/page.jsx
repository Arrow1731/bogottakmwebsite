"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, Clock, MapPin, Phone, Mail, Users, Award, Wifi } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Layout } from "@/components/layout"
import { Carousel } from "@/components/carousel"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.welcomeTitle}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t.welcomeSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/books">{t.browseBooks}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/news">{t.latestNews}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50,000+</div>
              <div className="text-sm text-muted-foreground">Books Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1,200+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">70+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Digital Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.aboutLibrary}</h2>
              <p className="text-muted-foreground mb-4">{t.aboutDescription1}</p>
              <p className="text-muted-foreground mb-6">{t.aboutDescription2}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Award-winning programs</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Community focused</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Wifi className="h-4 w-4 text-primary" />
                  <span>Free Wi-Fi</span>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 shadow-sm">
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.ourServices}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t.bookLending}</CardTitle>
                <CardDescription>{t.bookLendingDesc}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t.eventsPrograms}</CardTitle>
                <CardDescription>{t.eventsProgramsDesc}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t.studySpaces}</CardTitle>
                <CardDescription>{t.studySpacesDesc}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

            <div>
              <h2>SAytni Faoliyati uchun Mas'ul shaxs</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Roxmonova Zulfizar</span>
                </div>
              </div>
            </div>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.visitUs}</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>123 Main Street, Downtown, City 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>info@citylibrary.org</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.openingHours}</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>
                    {t.monday} - {t.friday}
                  </span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.saturday}</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.sunday}</span>
                  <span>12:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
