"use client"

import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, MapPin, Phone, Mail, Users, Award, Wifi } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DirektorImg from "../assets/Direktor_img.jpg";
import ResumeDownload from "../resume/ResumeDownload";
import MySwiper from "../components/MySwiper";
import FacebookIcon from '../assets/facebook-brands.svg';
import InstaIcon from '../assets/instagram-brands.svg';
import TelegramIcon from '../assets/telegram-brands.svg';
import YouTubeIcon from '../assets/youtube-brands.svg';
import TwitterIcon from '../assets/twitter-brands.svg';


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

      {/* <section className="section bg-white">
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
      </section> */}

      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{t.aboutLibrary}</h2>
              <p className="text-gray-600 mb-4">{t.aboutDescription1}</p>
              <p className="text-gray-600 mb-6">{t.aboutDescription2}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  {/* <Award className="h-4 w-4 text-blue-600" />
                  <span>Award-winning programs</span> */}
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  {/* <Users className="h-4 w-4 text-blue-600" />
                  <span>Community focused</span> */}
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  {/* <Wifi className="h-4 w-4 text-blue-600" />
                  <span>Free Wi-Fi</span> */}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <MySwiper />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
          {t.xorazm}
        </h2>

        <div className="container mx-auto bg-[#eeecec] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-[250px] max-w-[900px] p-6 rounded-3xl shadow-md">

          {/* Rasm */}
          <div className="flex-shrink-0">
            <img className="w-[150px] md:w-[180px] rounded-lg object-cover" src={DirektorImg} alt="Direktor rasmi" />
          </div>

          {/* Ma'lumotlar */}
          <div className="text-center md:text-left">
            <p className="text-xl sm:text-2xl font-semibold mb-4 font-lato">
              {t.name}
            </p>
            <p className="text-lg sm:text-xl font-semibold mb-4 font-lato">
              <strong>{t.tel}</strong> <a href="tel:+998991666900" className="text-blue-600 hover:underline">{t.num}</a>
            </p>
            <div className="text-lg sm:text-xl font-semibold mb-4 font-lato">
              <strong>{t.rec}</strong>
              <ul className="list-disc ml-5 text-left mt-1">
                <li className="mb-1">{t.wed}</li>
              </ul>
            </div>

            <div className="mt-4">
              <ResumeDownload />
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
                  <span><a href="https://maps.app.goo.gl/p5wXFZwSX5m4Xx9Z9" target='_bklank'>Beruniy MFY, O'zbekistan ko'chasi, 11 - uy</a></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span><a href="tel:+9983151951">+998 315-19-51</a></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span><a href="mailto: bogottakm@gmail.com">bogottakm@gmail.com</a></span>
                </div>

                {/* Social Media */}

                <div>
                  <div className="flex gap-[20px]">
                    <a href="https://t.me/BogotTAKM" target="_blank"><img className="w-[40px]" src={TelegramIcon} alt="" /></a>
                    <a href="https://www.facebook.com/Bogottumankutubxona" target="_blank"><img className="w-[40px] " src={FacebookIcon} alt="" /></a>
                    <a href="https://www.instagram.com/bogot_tuman_kutubxona/" target="_blank"><img className="w-[40px] " src={InstaIcon} alt="" /></a>
                    <a href="https://www.youtube.com/@bogottumankutubxona" target="_blank"><img className="w-[40px] " src={YouTubeIcon} alt="" /></a>
                    <a href="https://x.com/Bogot_tuman_AKM" target="_blank"><img className="w-[40px] " src={TwitterIcon} alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.openingHours}</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Dushanbadan - Jumagacha</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  {/* <span></span> */}
                  <span>Dam olish kuni</span>
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