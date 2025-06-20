// "use client"

// import { useLanguage } from "../contexts/LanguageContext";
// import Footer_Map from '../assets/Map_img_ss.png';

// export default function Footer() {
//   const { t } = useLanguage()

//   return (
//     <footer className=" text-white py-8 mt-auto">
//       <div className="mt-[34px] relative w-full text-center">
//         <a href="https://maps.app.goo.gl/9YrUNXxMrvW9P9CKA" target="_blank" rel="noopener noreferrer">
//           <img src={Footer_Map} alt="Google Map" className="w-full block container" /></a>
//         <div className="bg-gray-800 w-full h-[150px] -mt-[65px]">
//           <p className="pt-[70px]">&copy; 2025 Bog'ot tumani - AKM. Barcha huquqlar himoyalangan. <br /> WebSite Powered by <span className='font-bold'><a href="#">azizbek1701</a></span> <br /> <span className='font-bold'><a href="#">Sobirjon</a></span></p>
//         </div>
//       </div>
//       {/* <div className="container text-center">
        
//       </div> */}
//     </footer>
//   )
// }









"use client"

import { useLanguage } from "../contexts/LanguageContext";
import Footer_Map from '../assets/Map_img_ss.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="text-white py-8 mt-auto">
      <div className="mt-[34px] relative w-full text-center">
        <a
          href="https://maps.app.goo.gl/9YrUNXxMrvW9P9CKA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Footer_Map}
            alt="Google Map"
            className="w-full h-auto object-cover container rounded-[30px]"
          />
        </a>
        <div className="bg-gray-800 w-full h-auto -mt-[65px] px-4 py-6">
          <p className="text-sm sm:text-base leading-relaxed mt-[50px]">
            &copy; 2025 Bog'ot tumani - AKM. Barcha huquqlar himoyalangan. <br />
            WebSite Powered by{" "}
            <span className="font-bold">
              <a href="https://azizbekkamilov.vercel.app/" target="_blank">azizbek1701</a>
            </span> <br />
            <span className="font-bold">
              <a href="https://sob1rjon.vercel.app/" target="_blank">Sobirjon</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}