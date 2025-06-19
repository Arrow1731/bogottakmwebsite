"use client"

import { createContext, useContext, useState } from "react"

const translations = {
  en: {
    // Navigation
    home: "Home",
    news: "News",
    books: "Books",
    admin: "Admin",

    // Home page
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
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",

    // News page
    libraryNews: "Library News",
    newsSubtitle: "Stay updated with the latest events, announcements, and happenings at City Library.",
    noNewsAvailable: "No news articles available at the moment.",

    // Books page
    bookCatalog: "Book Catalog",
    bookCatalogSubtitle: "Explore our extensive collection of books across various genres and topics.",
    searchPlaceholder: "Search books by title or author...",
    selectGenre: "Select genre",
    allGenres: "All Genres",
    by: "by",
    published: "Published:",
    noBooksFound: "No books found matching your criteria.",

    // Genres
    fiction: "Fiction",
    nonFiction: "Non-Fiction",
    mystery: "Mystery",
    romance: "Romance",
    scienceFiction: "Science Fiction",
    biography: "Biography",
    history: "History",
    children: "Children",
    youngAdult: "Young Adult",
    fantasy: "Fantasy",
    thriller: "Thriller",
    horror: "Horror",
    poetry: "Poetry",
    drama: "Drama",
    philosophy: "Philosophy",

    // Admin
    adminDashboard: "Admin Dashboard",
    adminSubtitle: "Manage your library's content and monitor key statistics.",
    totalBooks: "Total Books",
    availableBooks: "Available Books",
    newsArticles: "News Articles",
    activeMembers: "Active Members",
    manageNews: "Manage News",
    manageNewsDesc: "Add, edit, and delete news articles and announcements.",
    manageBooks: "Manage Books",
    manageBooksDesc: "Add new books to the catalog, update information, and manage availability.",

    // Admin News
    manageNewsTitle: "Manage News",
    manageNewsSubtitle: "Add, edit, and delete news articles.",
    addNews: "Add News",
    editNews: "Edit News",
    addNewsArticle: "Add News Article",
    editNewsArticle: "Edit News Article",
    createNewsDesc: "Create a new news article for the library.",
    updateNewsDesc: "Update the news article information.",
    title: "Title",
    date: "Date",
    content: "Content",
    image: "Image",
    uploadImage: "Upload Image",
    changeImage: "Change Image",
    contentPreview: "Content Preview",
    actions: "Actions",
    create: "Create",
    update: "Update",
    noNewsFound: "No news articles found. Create your first article!",
    createFirstArticle: "Create your first article!",
    deleteConfirmNews: "Are you sure you want to delete this news article?",

    // Admin Books
    manageBooksTitle: "Manage Books",
    manageBooksSubtitle: "Add, edit, and manage the book catalog.",
    addBook: "Add Book",
    editBook: "Edit Book",
    addBookDesc: "Add a new book to the library catalog.",
    updateBookDesc: "Update the book information.",
    author: "Author",
    genre: "Genre",
    publishedYear: "Published Year",
    year: "Year",
    noBooksFoundAdmin: "No books found. Add your first book to the catalog!",
    addFirstBook: "Add your first book to the catalog!",
    deleteConfirmBook: "Are you sure you want to delete this book?",
    description: "Description",
    authorInfo: "Author Information",
    addGenre: "Add New Genre",
    customGenre: "Custom Genre",

    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    save: "Save",
    close: "Close",
    logout: "Logout",

    // Footer
    allRightsReserved: "All rights reserved.",
  },

  uz: {
    // Navigation
    home: "Bosh sahifa",
    news: "Yangiliklar",
    books: "Kitoblar",
    admin: "Admin",

    // Home page
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
    monday: "Dushanba",
    tuesday: "Seshanba",
    wednesday: "Chorshanba",
    thursday: "Payshanba",
    friday: "Juma",
    saturday: "Shanba",
    sunday: "Yakshanba",

    // News page
    libraryNews: "Kutubxona Yangiliklari",
    newsSubtitle: "Shahar Kutubxonasidagi so'nggi tadbirlar, e'lonlar va voqealar bilan tanishib turing.",
    noNewsAvailable: "Hozircha yangilik maqolalari mavjud emas.",

    // Books page
    bookCatalog: "Kitoblar Katalogi",
    bookCatalogSubtitle: "Turli janr va mavzulardagi kitoblarimizning keng kolleksiyasini o'rganing.",
    searchPlaceholder: "Kitoblarni nom yoki muallif bo'yicha qidiring...",
    selectGenre: "Janrni tanlang",
    allGenres: "Barcha Janrlar",
    by: "muallifi",
    published: "Nashr yili:",
    noBooksFound: "Mezonlaringizga mos kitoblar topilmadi.",

    // Genres
    fiction: "Badiiy adabiyot",
    nonFiction: "Ilmiy adabiyot",
    mystery: "Sirli",
    romance: "Romantik",
    scienceFiction: "Ilmiy fantastika",
    biography: "Biografiya",
    history: "Tarix",
    children: "Bolalar",
    youngAdult: "Yoshlar",
    fantasy: "Fantaziya",
    thriller: "Triller",
    horror: "Qo'rqinchli",
    poetry: "She'riyat",
    drama: "Drama",
    philosophy: "Falsafa",

    // Admin
    adminDashboard: "Admin Paneli",
    adminSubtitle: "Kutubxona kontentini boshqaring va asosiy statistikalarni kuzating.",
    totalBooks: "Jami Kitoblar",
    availableBooks: "Mavjud Kitoblar",
    newsArticles: "Yangilik Maqolalari",
    activeMembers: "Faol A'zolar",
    manageNews: "Yangiliklar Boshqaruvi",
    manageNewsDesc: "Yangilik maqolalari va e'lonlarni qo'shing, tahrirlang va o'chiring.",
    manageBooks: "Kitoblar Boshqaruvi",
    manageBooksDesc: "Katalogga yangi kitoblar qo'shing, ma'lumotlarni yangilang va mavjudligini boshqaring.",

    // Admin News
    manageNewsTitle: "Yangiliklar Boshqaruvi",
    manageNewsSubtitle: "Yangilik maqolalarini qo'shing, tahrirlang va o'chiring.",
    addNews: "Yangilik Qo'shish",
    editNews: "Yangilikni Tahrirlash",
    addNewsArticle: "Yangilik Maqolasi Qo'shish",
    editNewsArticle: "Yangilik Maqolasini Tahrirlash",
    createNewsDesc: "Kutubxona uchun yangi yangilik maqolasi yarating.",
    updateNewsDesc: "Yangilik maqolasi ma'lumotlarini yangilang.",
    title: "Sarlavha",
    date: "Sana",
    content: "Mazmun",
    image: "Rasm",
    uploadImage: "Rasm Yuklash",
    changeImage: "Rasmni O'zgartirish",
    contentPreview: "Mazmun Ko'rinishi",
    actions: "Amallar",
    create: "Yaratish",
    update: "Yangilash",
    noNewsFound: "Yangilik maqolalari topilmadi. Birinchi maqolangizni yarating!",
    createFirstArticle: "Birinchi maqolangizni yarating!",
    deleteConfirmNews: "Ushbu yangilik maqolasini o'chirishga ishonchingiz komilmi?",

    // Admin Books
    manageBooksTitle: "Kitoblar Boshqaruvi",
    manageBooksSubtitle: "Kitoblar katalogini qo'shing, tahrirlang va boshqaring.",
    addBook: "Kitob Qo'shish",
    editBook: "Kitobni Tahrirlash",
    addBookDesc: "Kutubxona katalogiga yangi kitob qo'shing.",
    updateBookDesc: "Kitob ma'lumotlarini yangilang.",
    author: "Muallif",
    genre: "Janr",
    publishedYear: "Nashr Yili",
    year: "Yil",
    noBooksFoundAdmin: "Kitoblar topilmadi. Katalogga birinchi kitobingizni qo'shing!",
    addFirstBook: "Katalogga birinchi kitobingizni qo'shing!",
    deleteConfirmBook: "Ushbu kitobni o'chirishga ishonchingiz komilmi?",
    description: "Tavsif",
    authorInfo: "Muallif Haqida",
    addGenre: "Yangi Janr Qo'shish",
    customGenre: "Maxsus Janr",

    // Common
    loading: "Yuklanmoqda...",
    error: "Xato",
    success: "Muvaffaqiyat",
    cancel: "Bekor qilish",
    delete: "O'chirish",
    edit: "Tahrirlash",
    save: "Saqlash",
    close: "Yopish",
    logout: "Chiqish",

    // Footer
    allRightsReserved: "Barcha huquqlar himoyalangan.",
  },

  ru: {
    // Navigation
    home: "Главная",
    news: "Новости",
    books: "Книги",
    admin: "Админ",

    // Home page
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
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота",
    sunday: "Воскресенье",

    // News page
    libraryNews: "Новости Библиотеки",
    newsSubtitle: "Будьте в курсе последних событий, объявлений и происходящего в Городской Библиотеке.",
    noNewsAvailable: "В данный момент новостных статей нет.",

    // Books page
    bookCatalog: "Каталог Книг",
    bookCatalogSubtitle: "Изучите нашу обширную коллекцию книг различных жанров и тематик.",
    searchPlaceholder: "Поиск книг по названию или автору...",
    selectGenre: "Выберите жанр",
    allGenres: "Все Жанры",
    by: "автор",
    published: "Опубликовано:",
    noBooksFound: "Книги, соответствующие вашим критериям, не найдены.",

    // Genres
    fiction: "Художественная литература",
    nonFiction: "Научная литература",
    mystery: "Детектив",
    romance: "Романтика",
    scienceFiction: "Научная фантастика",
    biography: "Биография",
    history: "История",
    children: "Детские",
    youngAdult: "Молодежные",
    fantasy: "Фэнтези",
    thriller: "Триллер",
    horror: "Ужасы",
    poetry: "Поэзия",
    drama: "Драма",
    philosophy: "Философия",

    // Admin
    adminDashboard: "Панель Администратора",
    adminSubtitle: "Управляйте контентом библиотеки и отслеживайте ключевую статистику.",
    totalBooks: "Всего Книг",
    availableBooks: "Доступные Книги",
    newsArticles: "Новостные Статьи",
    activeMembers: "Активные Участники",
    manageNews: "Управление Новостями",
    manageNewsDesc: "Добавляйте, редактируйте и удаляйте новостные статьи и объявления.",
    manageBooks: "Управление Книгами",
    manageBooksDesc: "Добавляйте новые книги в каталог, обновляйте информацию и управляйте доступностью.",

    // Admin News
    manageNewsTitle: "Управление Новостями",
    manageNewsSubtitle: "Добавляйте, редактируйте и удаляйте новостные статьи.",
    addNews: "Добавить Новость",
    editNews: "Редактировать Новость",
    addNewsArticle: "Добавить Новостную Статью",
    editNewsArticle: "Редактировать Новостную Статью",
    createNewsDesc: "Создайте новую новостную статью для библиотеки.",
    updateNewsDesc: "Обновите информацию новостной статьи.",
    title: "Заголовок",
    date: "Дата",
    content: "Содержание",
    image: "Изображение",
    uploadImage: "Загрузить Изображение",
    changeImage: "Изменить Изображение",
    contentPreview: "Предварительный Просмотр",
    actions: "Действия",
    create: "Создать",
    update: "Обновить",
    noNewsFound: "Новостные статьи не найдены. Создайте свою первую статью!",
    createFirstArticle: "Создайте свою первую статью!",
    deleteConfirmNews: "Вы уверены, что хотите удалить эту новостную статью?",

    // Admin Books
    manageBooksTitle: "Управление Книгами",
    manageBooksSubtitle: "Добавляйте, редактируйте и управляйте каталогом книг.",
    addBook: "Добавить Книгу",
    editBook: "Редактировать Книгу",
    addBookDesc: "Добавьте новую книгу в каталог библиотеки.",
    updateBookDesc: "Обновите информацию о книге.",
    author: "Автор",
    genre: "Жанр",
    publishedYear: "Год Издания",
    year: "Год",
    noBooksFoundAdmin: "Книги не найдены. Добавьте свою первую книгу в каталог!",
    addFirstBook: "Добавьте свою первую книгу в каталог!",
    deleteConfirmBook: "Вы уверены, что хотите удалить эту книгу?",
    description: "Описание",
    authorInfo: "Об Авторе",
    addGenre: "Добавить Новый Жанр",
    customGenre: "Пользовательский Жанр",

    // Common
    loading: "Загрузка...",
    error: "Ошибка",
    success: "Успех",
    cancel: "Отмена",
    delete: "Удалить",
    edit: "Редактировать",
    save: "Сохранить",
    close: "Закрыть",
    logout: "Выйти",

    // Footer
    allRightsReserved: "Все права защищены.",
  },
}

const LanguageContext = createContext(undefined)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
