import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AppColors, AppStrings } from "../constants";

export default function CtaBanner() {
  return (
    <section
      className="px-6 py-24"
      style={{
        backgroundColor: AppColors.background,
      }}
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            p-10
            md:p-16
            text-center
          "
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: `1px solid ${AppColors.border}`,
          }}
        >

          {/* Glow Left */}
          <div
            className="
              absolute
              top-0
              left-0
              w-[300px]
              h-[300px]
              rounded-full
              blur-[100px]
            "
            style={{
              backgroundColor: AppColors.primary,
              opacity: 0.15,
            }}
          />

          {/* Glow Right */}
          <div
            className="
              absolute
              bottom-0
              right-0
              w-[300px]
              h-[300px]
              rounded-full
              blur-[100px]
            "
            style={{
              backgroundColor: AppColors.primary,
              opacity: 0.15,
            }}
          />

          <div className="relative z-10">

            {/* Badge */}
            <p
              className="font-semibold mb-4"
              style={{
                color: AppColors.primary,
              }}
            >
              {AppStrings.ctaBadge}
            </p>

            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              {AppStrings.ctaTitle}
            </h2>

            {/* Description */}
            <p
              className="max-w-2xl mx-auto mt-6 text-lg"
              style={{
                color: AppColors.textSecondary,
              }}
            >
              {AppStrings.ctaDescription}
            </p>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-2xl
                font-semibold
              "
              style={{
                backgroundColor: AppColors.primary,
                color: AppColors.white,
              }}
            >
              {AppStrings.ctaButton}

              <ArrowRight size={20} />
            </motion.button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}