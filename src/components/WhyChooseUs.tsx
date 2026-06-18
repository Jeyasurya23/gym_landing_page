import { motion } from "framer-motion";
import {
  ShieldCheck,
  Dumbbell,
  Clock3,
  Trophy,
  CheckCircle2,
} from "lucide-react";
import { AppColors, AppStrings } from "../constants";

const features = [
  {
    icon: ShieldCheck,
    title: "Certified Trainers",
    description:
      "Train with experienced professionals dedicated to your success.",
  },
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "State-of-the-art fitness equipment for every workout style.",
  },
  {
    icon: Clock3,
    title: "24/7 Access",
    description:
      "Flexible training schedules that fit your lifestyle.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description:
      "Programs designed to deliver measurable progress and results.",
  },
];

const benefits = [
  "Personalized workout plans",
  "Nutrition guidance",
  "Progress tracking",
  "Friendly fitness community",
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-32 px-6"
      style={{
        backgroundColor: AppColors.background,
      }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Glow */}
            <div
              className="
                absolute
                w-[350px]
                h-[350px]
                rounded-full
                blur-[100px]
              "
              style={{
                backgroundColor: AppColors.primary,
                opacity: 0.15,
              }}
            />

            <img
              src="/images/why-choose-us.jpg"
              alt="Why Choose Us"
              className="
                relative
                z-10
                w-full
                h-[650px]
                object-cover
                rounded-[32px]
                border
              "
              style={{
                borderColor: AppColors.border,
              }}
            />

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
                absolute
                bottom-8
                right-8
                z-20
                rounded-3xl
                p-6
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
                {AppStrings.thousand}
              </h3>

              <p
                style={{
                  color: AppColors.textSecondary,
                }}
              >
                {AppStrings.succesfullTransformation}
              </p>
            </motion.div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p
              className="font-semibold mb-3"
              style={{
                color: AppColors.primary,
              }}
            >
              {AppStrings.whyChooseUs}
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              {AppStrings.moreThanGym}
              <br />
              {AppStrings.aFitnessLife}
            </h2>

            <p
              className="mt-6 text-lg leading-relaxed"
              style={{
                color: AppColors.textSecondary,
              }}
            >
              {AppStrings.whyChooseUsSub}
            </p>

            {/* Benefits */}
            <div className="mt-4 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={22}
                    color={AppColors.primary}
                  />

                  <span
                    style={{
                      color: AppColors.white,
                    }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-5 mt-8">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      rounded-3xl
                      p-6
                    "
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: `1px solid ${AppColors.border}`,
                    }}
                  >
                    <Icon
                      size={32}
                      color={AppColors.primary}
                    />

                    <h3 className="text-xl font-bold text-white mt-4">
                      {feature.title}
                    </h3>

                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{
                        color: AppColors.textSecondary,
                      }}
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}