import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AppColors, AppStrings } from "../constants";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    AppStrings.navHome,
    AppStrings.navPrograms,
    AppStrings.navFeatures,
    AppStrings.navTrainers,
    AppStrings.navPricing,
    AppStrings.navContact,
  ];

  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`
      }
    >
      <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.h1
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="text-2xl font-bold text-white"
        >
          {AppStrings.fit}
          <span className="text-green-500">
            {AppStrings.zone}
          </span>
        </motion.h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link,index) => (
            <motion.a
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4 + index * 0.1,
              }}
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-green-500 transition"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.9,
            duration: 0.4,
          }}
          whileHover={{
            scale: 1.05,
          }}
          onClick={() =>
            document
              .getElementById("pricing")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="
            hidden
            md:block
            bg-green-500
            hover:bg-green-600
            px-5
            py-2
            rounded-lg
            font-medium
            transition
          "
        >
          {AppStrings.joinNow}
        </motion.button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="md:hidden bg-black border-t border-white/10 overflow-hidden"
        >
          <nav className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-green-500"
              >
                {link}
              </a>
            ))}

            <button 
            onClick={() =>
              document
                .getElementById("pricing")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            } 
            className="py-3 rounded-lg font-medium mt-2 transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: AppColors.primary,
              color: AppColors.white,
            }}
            >
              {AppStrings.joinNow}
            </button>
          </nav>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
}