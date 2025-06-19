"use client"

import { createContext, useContext, useState } from "react"

const translations = {
  en: {
    home: "Home",
    news: "News",
    books: "Books",
    admin: "Admin",
    welcomeTitle: "Welcome to City Library",
    welcomeSubtitle:
      "Your gateway to knowledge, learning, and community. Discover thousands of books, attend events, and connect with fellow readers.",
    browseBooks: "Browse Books",
    latestNews: "Latest News",
    aboutLibrary: "About Our Library",
    aboutDescription1:
      "Established in 1952, City Library has been serving our community for over 70 years. We pride ourselves on being more than just a repository of books – we're a hub for learning, creativity, and community engagement.",
    aboutDescription2:
      "Our collection includes over 50,000 books, digital resources, periodicals, and multimedia materials. We offer programs for all ages, from story time for children to book clubs for adults.",
    ourServices: "Our Services",
    bookLending: "Book Lending",
    bookLendingDesc: "Borrow from our extensive collection of fiction, non-fiction, and reference materials.",
    eventsPrograms: "Events & Programs",
    eventsProgramsDesc: "Join our book clubs, author readings, workshops, and community events.",
    studySpaces: "Study Spaces",
    studySpacesDesc: "Quiet study areas, group rooms, and computer stations available for all members.",
    visitUs: "Visit Us",
    openingHours: "Opening Hours",
    libraryNews: "Library News",
    newsSubtitle: "Stay updated with the latest events, announcements, and happenings at City Library.",
    backToHome: "Back to Home",
    bookCatalog: "Book Catalog",
    bookCatalogSubtitle: "Explore our extensive collection of books across various genres and topics.",
    searchPlaceholder: "Search books by title or author...",
    selectGenre: "Select genre",
    allGenres: "All Genres",
    by: "by",
    published: "Published:",
    noBooksFound: "No books found matching your criteria.",
    adminPanel: "Admin Panel",
    adminSubtitle: "Manage library content and monitor statistics.",
    username: "Username",
    password: "Password",
    login: "Login",
    logout: "Logout",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    close: "Close",
  },
  uz: {
    home: "Bosh sahifa",
    news: "Yangiliklar",
    books: "Kitoblar",
    admin: "Admin",
    welcomeTitle: "Shahar Kutubxonasiga Xush Kelibsiz",
    welcomeSubtitle:
      "Bilim, ta'lim va jamiyat uchun darvozangiz. Minglab kitoblarni kashf eting, tadbirlarda qatnashing va boshqa kitobxonlar bilan bog'laning.",
    browseBooks: "Kitoblarni Ko'rish",
    latestNews: "So'nggi Yangiliklar",
    aboutLibrary: "Kutubxonamiz Haqida",
    aboutDescription1:
      "1952 yilda tashkil etilgan Shahar Kutubxonasi 70 yildan ortiq vaqt davomida jamiyatimizga xizmat ko'rsatib kelmoqda.",
    aboutDescription2:
      "Bizning kolleksiyamizda 50,000 dan ortiq kitoblar, raqamli resurslar, davriy nashrlar va multimedia materiallari mavjud.",
    ourServices: "Bizning Xizmatlarimiz",
    bookLending: "Kitob Berish",
    bookLendingDesc: "Badiiy, ilmiy va ma'lumotnoma materiallarining keng kolleksiyasidan foydalaning.",
    eventsPrograms: "Tadbirlar va Dasturlar",
    eventsProgramsDesc: "Kitob klublari, muallif uchrashuvlari, seminarlar va jamiyat tadbirlariga qo'shiling.",
    studySpaces: "O'qish Joylari",
    studySpacesDesc: "Barcha a'zolar uchun jim o'qish joylari, guruh xonalari va kompyuter stansiyalari mavjud.",
    visitUs: "Bizga Tashrif Buyuring",
    openingHours: "Ish Vaqti",
    libraryNews: "Kutubxona Yangiliklari",
    newsSubtitle: "Shahar Kutubxonasidagi so'nggi tadbirlar, e'lonlar va voqealar bilan tanishib turing.",
    backToHome: "Bosh sahifaga qaytish",
    bookCatalog: "Kitoblar Katalogi",
    bookCatalogSubtitle: "Turli janr va mavzulardagi kitoblarimizning keng kolleksiyasini o'rganing.",
    searchPlaceholder: "Kitoblarni nom yoki muallif bo'yicha qidiring...",
    selectGenre: "Janrni tanlang",
    allGenres: "Barcha Janrlar",
    by: "muallifi",
    published: "Nashr yili:",
    noBooksFound: "Mezonlaringizga mos kitoblar topilmadi.",
    adminPanel: "Admin Paneli",
    adminSubtitle: "Kutubxona kontentini boshqaring va statistikalarni kuzating.",
    username: "Foydalanuvchi nomi",
    password: "Parol",
    login: "Kirish",
    logout: "Chiqish",
    loading: "Yuklanmoqda...",
    error: "Xato",
    success: "Muvaffaqiyat",
    cancel: "Bekor qilish",
    save: "Saqlash",
    close: "Yopish",
  },
  ru: {
    home: "Главная",
    news: "Новости",
    books: "Книги",
    admin: "Админ",
    welcomeTitle: "Добро пожаловать в Городскую Библиотеку",
    welcomeSubtitle:
      "Ваш путь к знаниям, обучению и сообществу. Откройте для себя тысячи книг, посещайте мероприятия и общайтесь с другими читателями.",
    browseBooks: "Просмотр Книг",
    latestNews: "Последние Новости",
    aboutLibrary: "О Нашей Библиотеке",
    aboutDescription1: "Основанная в 1952 году, Городская Библиотека служит нашему сообществу уже более 70 лет.",
    aboutDescription2:
      "Наша коллекция включает более 50 000 книг, цифровые ресурсы, периодические издания и мультимедийные материалы.",
    ourServices: "Наши Услуги",
    bookLending: "Выдача Книг",
    bookLendingDesc: "Берите из нашей обширной коллекции художественной, научной и справочной литературы.",
    eventsPrograms: "События и Программы",
    eventsProgramsDesc:
      "Присоединяйтесь к нашим книжным клубам, встречам с авторами, семинарам и общественным мероприятиям.",
    studySpaces: "Места для Учебы",
    studySpacesDesc: "Тихие учебные зоны, групповые комнаты и компьютерные станции доступны для всех участников.",
    visitUs: "Посетите Нас",
    openingHours: "Часы Работы",
    libraryNews: "Новости Библиотеки",
    newsSubtitle: "Будьте в курсе последних событий, объявлений и происходящего в Городской Библиотеке.",
    backToHome: "Вернуться на главную",
    bookCatalog: "Каталог Книг",
    bookCatalogSubtitle: "Изучите нашу обширную коллекцию книг различных жанров и тематик.",
    searchPlaceholder: "Поиск книг по названию или автору...",
    selectGenre: "Выберите жанр",
    allGenres: "Все Жанры",
    by: "автор",
    published: "Опубликовано:",
    noBooksFound: "Книги, соответствующие вашим критериям, не найдены.",
    adminPanel: "Панель Администратора",
    adminSubtitle: "Управляйте контентом библиотеки и отслеживайте статистику.",
    username: "Имя пользователя",
    password: "Пароль",
    login: "Войти",
    logout: "Выйти",
    loading: "Загрузка...",
    error: "Ошибка",
    success: "Успех",
    cancel: "Отмена",
    save: "Сохранить",
    close: "Закрыть",
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}