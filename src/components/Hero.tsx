import { motion } from "framer-motion";
import { AppColors, AppStrings } from "../constants";
import { useEffect, useState } from "react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Members",
  },
  {
    value: 10,
    suffix: "+",
    label: "Trainers",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Access",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
        pt-28
        md:pt-32
      "
      style={{
        backgroundColor: AppColors.background,
      }}
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-20
          right-0
          w-[600px]
          h-[600px]
          rounded-full
          blur-[150px]
        "
        style={{
          backgroundColor: AppColors.primary,
          opacity: 0.15,
        }}
      />

      <div className="max-w-8xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">

          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >

            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className="
                  inline-flex
                  items-center
                  px-5
                  py-3
                  rounded-full
                  text-sm
                  font-medium
                "
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: `1px solid ${AppColors.border}`,
                  color: AppColors.primary,
                }}
              >
                {AppStrings.heroBadge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="
                mt-8
                text-5xl
                md:text-7xl
                xl:text-8xl
                font-black
                uppercase
                leading-[0.9]
                tracking-tight
              "
              style={{
                color: AppColors.white,
              }}
            >
              {AppStrings.heroTitle1}

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-green-400
                  to-emerald-500
                  bg-clip-text
                  text-transparent
                "
              >
                {AppStrings.heroTitle2}
              </span>

              <br />

              {AppStrings.heroTitle3}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="
                mt-8
                text-lg
                md:text-xl
                max-w-2xl
                leading-relaxed
              "
              style={{
                color: AppColors.textSecondary,
              }}
            >
              {AppStrings.heroDescription}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-10"
            >
              <button
                className="
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
                style={{
                  backgroundColor: AppColors.primary,
                  color: AppColors.white,
                }}
              >
                Join Now
              </button>

              <button
                className="
                  px-8
                  py-4
                  rounded-2xl
                  backdrop-blur-md
                  hover:bg-white/5
                  transition-all
                  duration-300
                "
                style={{
                  border: `1px solid ${AppColors.border}`,
                  color: AppColors.white,
                }}
              >
                View Plans
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-4
                mt-16
              "
            >
              {stats.map((item) => (
                <motion.div
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  key={item.label}
                  className="
                    rounded-2xl
                    p-5
                    backdrop-blur-md
                  "
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: `1px solid ${AppColors.border}`,
                  }}
                >
                  <h3
                    className="text-3xl font-bold"
                    style={{
                      color: AppColors.primary,
                    }}
                  >
                    <AnimatedCounter end={item.value} />
                    {item.suffix}
                  </h3>

                  <p
                    className="mt-2 text-sm"
                    style={{
                      color: AppColors.textSecondary,
                    }}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="
              relative
              hidden
              lg:flex
              justify-center
              items-center
            "
          >

            {/* Main Glow */}
            <div
              className="
                absolute
                w-[500px]
                h-[500px]
                rounded-full
                blur-[120px]
              "
              style={{
                backgroundColor: AppColors.primary,
                opacity: 0.2,
              }}
            />

            {/* Main Image */}
            <motion.img
              src="/images/hero.webp"
              alt="gym-image"
              fetchPriority="high"
              className="
                relative
                z-10
                w-[420px]
                xl:w-[480px]
                h-[680px]
                object-fit
                shadow-2xl
              "
              style={{
                borderColor: AppColors.border,
              }}
            />

            {/* Experience Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                top-12
                -left-6
                z-20
                rounded-3xl
                p-5
                backdrop-blur-xl
              "
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: `1px solid ${AppColors.border}`,
              }}
            >
              <h3
                className="text-3xl font-bold"
                style={{
                  color: AppColors.primary,
                }}
              >
                {AppStrings.years}
              </h3>

              <p
                style={{
                  color: AppColors.textSecondary,
                }}
              >
                {AppStrings.yearsOfExperience}
              </p>
            </motion.div>

            {/* Members Card */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-12
                -right-0
                z-20
                rounded-3xl
                p-5
                backdrop-blur-xl
              "
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: `1px solid ${AppColors.border}`,
              }}
            >
              <h3
                className="text-3xl font-bold"
                style={{
                  color: AppColors.primary,
                }}
              >
                {AppStrings.members}
              </h3>

              <p
                style={{
                  color: AppColors.textSecondary,
                }}
              >
                {AppStrings.activeMembers}
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.ceil(end / 40);

      if (current >= end) {
        current = end;
        clearInterval(interval);
      }

      setCount(current);
    }, 40);

    return () => clearInterval(interval);
  }, [end]);

  return <>{count}</>;
}