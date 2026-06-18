import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { AppColors, AppStrings } from "../constants";

const testimonials = [
  {
    name: "James Anderson",
    role: "Fitness Member",
    image: "/images/testimonial-1.webp",
    review:
      "The trainers are incredible and the environment keeps me motivated every day. I've achieved results I never thought possible.",
  },
  {
    name: "Sophia Miller",
    role: "Weight Loss Program",
    image: "/images/testimonial-2.webp",
    review:
      "I lost over 15kg and gained confidence. The personalized coaching and nutrition support made all the difference.",
  },
  {
    name: "David Wilson",
    role: "Strength Training",
    image: "/images/testimonial-3.webp",
    review:
      "The equipment, trainers, and community are top-notch. Every workout feels productive and enjoyable.",
  },
];

export default function Testimonials() {
  return (
    <section
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
            {AppStrings.testimonialsBadge}
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            {AppStrings.testimonialsTitle}
          </h2>

          <p
            className="max-w-2xl mx-auto mt-6 text-lg"
            style={{
              color: AppColors.textSecondary,
            }}
          >
            {AppStrings.testimonialsDescription}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
                rounded-3xl
                p-8
              "
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: `1px solid ${AppColors.border}`,
              }}
            >

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={AppColors.primary}
                    color={AppColors.primary}
                  />
                ))}
              </div>

              {/* Review */}
              <p
                className="leading-relaxed text-lg"
                style={{
                  color: AppColors.textSecondary,
                }}
              >
                "{testimonial.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>

                  <p
                    className="text-sm"
                    style={{
                      color: AppColors.primary,
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}