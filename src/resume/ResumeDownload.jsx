import { useLanguage } from "../contexts/LanguageContext"

import React from "react";
import Resume_CV from "../assets/Resume.pdf";

export default function ResumeDownload() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume_CV; // import qilingan fayl
    link.download = "Resume_Gulbahor.pdf"; // foydalanuvchiga ko‘rinadigan fayl nomi
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  const { t } = useLanguage()

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      {t.cv}
    </button>
  );
}