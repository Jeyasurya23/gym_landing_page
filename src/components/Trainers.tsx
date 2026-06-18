import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { AppColors } from "../constants";

const trainers = [
  {
    name: "John Carter",
    role: "Strength Coach",
    image: "/images/trainer-1.jpg",
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Wilson",
    role: "Fitness Expert",
    image: "/images/trainer-2.jpg",
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Michael Lee",
    role: "Personal Trainer",
    image: "/images/trainer-3.jpg",
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Davis",
    role: "Nutrition Coach",
    image: "/images/trainer-4.jpg",
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
];

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="py-32 px-6"
      style={{
        backgroundColor: AppColors.background,
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            className="font-semibold mb-4"
            style={{
              color: AppColors.primary,
            }}
          >
            EXPERT TRAINERS
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            Meet Our Team
          </h2>

          <p
            className="max-w-2xl mx-auto mt-6 text-lg"
            style={{
              color: AppColors.textSecondary,
            }}
          >
            Train with certified professionals committed to helping
            you achieve your fitness goals.
          </p>
        </motion.div>

        {/* Trainer Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                overflow-hidden
                rounded-3xl
              "
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: `1px solid ${AppColors.border}`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="
                    w-full
                    h-[380px]
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    flex
                    items-end
                    justify-center
                    pb-6
                  "
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  }}
                >
                  <div className="flex gap-4">

                    <a
                    href={trainer.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        w-10
                        h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        transition-all
                        duration-300
                        hover:scale-110
                    "
                    style={{
                        backgroundColor: AppColors.primary,
                    }}
                    >
                        <FaInstagram size={18} />
                    </a>

                    <a
                    href={trainer.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        w-10
                        h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        transition-all
                        duration-300
                        hover:scale-110
                    "
                    style={{
                        backgroundColor: AppColors.primary,
                    }}
                    >
                        <FaFacebookF size={18} />
                    </a>

                    <a
                    href={trainer.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        w-10
                        h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        transition-all
                        duration-300
                        hover:scale-110
                    "
                    style={{
                        backgroundColor: AppColors.primary,
                    }}
                    >
                        <FaXTwitter size={18} />
                    </a>

                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {trainer.name}
                </h3>

                <p
                  className="mt-2"
                  style={{
                    color: AppColors.primary,
                  }}
                >
                  {trainer.role}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}