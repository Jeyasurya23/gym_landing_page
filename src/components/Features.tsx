import { motion } from "framer-motion";
import {
  Dumbbell,
  ShieldCheck,
  Apple,
  Clock3,
  BarChart3,
  Users,
} from "lucide-react";
import {
  AppColors,
  AppStrings,
} from "../constants";

const features = [
  {
    icon: Dumbbell,
    title: AppStrings.feature1Title,
    description: AppStrings.feature1Description,
  },
  {
    icon: ShieldCheck,
    title: AppStrings.feature2Title,
    description: AppStrings.feature2Description,
  },
  {
    icon: Apple,
    title: AppStrings.feature3Title,
    description: AppStrings.feature3Description,
  },
  {
    icon: Clock3,
    title: AppStrings.feature4Title,
    description: AppStrings.feature4Description,
  },
  {
    icon: BarChart3,
    title: AppStrings.feature5Title,
    description: AppStrings.feature5Description,
  },
  {
    icon: Users,
    title: AppStrings.feature6Title,
    description: AppStrings.feature6Description,
  },
];

export default function Features() {
  return (
    <section
      id="features"
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
            {AppStrings.featuresBadge}
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            {AppStrings.featuresTitle}
          </h2>

          <p
            className="max-w-2xl mx-auto mt-6 text-lg"
            style={{
              color: AppColors.textSecondary,
            }}
          >
            {AppStrings.featuresDescription}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-3xl
                  p-8
                  group
                  relative
                  overflow-hidden
                "
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: `1px solid ${AppColors.border}`,
                }}
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                  style={{
                    background: `radial-gradient(circle at top, ${AppColors.primary}15, transparent 70%)`,
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

                  <h3 className="text-2xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p
                    className="mt-4 leading-relaxed"
                    style={{
                      color: AppColors.textSecondary,
                    }}
                  >
                    {feature.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}