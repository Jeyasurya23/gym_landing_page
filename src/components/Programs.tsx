import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  UserRound,
  Apple,
  ArrowUpRight,
} from "lucide-react";
import { AppColors, AppStrings } from "../constants";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build muscle, increase strength, & improve overall performance.",
  },
  {
    icon: HeartPulse,
    title: "Weight Loss",
    description:
      "Burn calories efficiently with customized fat-loss programs.",
  },
  {
    icon: UserRound,
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your goals and fitness level.",
  },
  {
    icon: Apple,
    title: "Nutrition Coaching",
    description:
      "Meal plans and nutrition guidance for faster results.",
  },
];

export default function Program() {
  return (
    <section
      id="programs"
      className="py-32 px-6"
      style={{
        backgroundColor: AppColors.background,
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
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
            {AppStrings.programs}
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            {AppStrings.trainingProgram}
            <br />
            {AppStrings.forEveryGoal}
          </h2>

          <p
            className="max-w-2xl mx-auto mt-6 text-lg"
            style={{
              color: AppColors.textSecondary,
            }}
          >
            {AppStrings.programSub}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                  relative
                  overflow-hidden
                  rounded-3xl
                  p-8
                  cursor-pointer
                "
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: `1px solid ${AppColors.border}`,
                }}
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  "
                  style={{
                    background: `radial-gradient(circle at top, ${AppColors.primary}20, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                    style={{
                      backgroundColor: `${AppColors.primary}20`,
                    }}
                  >
                    <Icon
                      size={30}
                      color={AppColors.primary}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {program.title}
                  </h3>

                  <p
                    className="leading-relaxed"
                    style={{
                      color: AppColors.textSecondary,
                    }}
                  >
                    {program.description}
                  </p>
                  
                  <button
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="
    mt-8
    inline-flex
    items-center
    gap-2
    px-5
    py-3
    rounded-xl
    border
    transition-all
    duration-300
    hover:scale-105
  "
  style={{
    borderColor: AppColors.border,
    color: AppColors.primary,
  }}
>
  {AppStrings.learnMore}

  <ArrowUpRight
    size={18}
  />
</button>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}