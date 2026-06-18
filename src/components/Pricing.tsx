import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AppColors, AppConfig, AppStrings } from "../constants";

const plans = [
  {
    name: "Basic",
    price: "₹499",
    period: "/month",
    popular: false,
    features: [
      "Gym Access",
      "Locker Facility",
      "Basic Equipment",
      "Free Assessment",
    ],
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    popular: true,
    features: [
      "Everything in Basic",
      "Personal Trainer",
      "Nutrition Guidance",
      "Group Classes",
      "Progress Tracking",
    ],
  },
  {
    name: "Elite",
    price: "₹1499",
    period: "/month",
    popular: false,
    features: [
      "Everything in Pro",
      "VIP Support",
      "Custom Workout Plan",
      "Priority Booking",
      "Premium Facilities",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
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
            {AppStrings.pricingBadge}
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            {AppStrings.pricingTitle}
          </h2>

          <p
            className="max-w-2xl mx-auto mt-6 text-lg"
            style={{
              color: AppColors.textSecondary,
            }}
          >
            {AppStrings.pricingDescription}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
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
              className={`
                relative
                rounded-3xl
                p-8
                overflow-hidden
                ${
                  plan.popular
                    ? "scale-105"
                    : ""
                }
              `}
              style={{
                backgroundColor: plan.popular
                  ? "rgba(34,197,94,0.08)"
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${
                  plan.popular
                    ? AppColors.primary
                    : AppColors.border
                }`,
              }}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-bold
                  "
                  style={{
                    backgroundColor: AppColors.primary,
                    color: AppColors.white,
                  }}
                >
                  {AppStrings.popularPlan}
                </div>
              )}

              <h3 className="text-2xl font-bold text-white">
                {plan.name}
              </h3>

              <div className="mt-6">
                <span
                  className="text-6xl font-black"
                  style={{
                    color: plan.popular
                      ? AppColors.primary
                      : AppColors.white,
                  }}
                >
                  {plan.price}
                </span>

                <span
                  className="ml-2"
                  style={{
                    color: AppColors.textSecondary,
                  }}
                >
                  {plan.period}
                </span>
              </div>

              <div className="mt-10 space-y-4">

                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      color={AppColors.primary}
                    />

                    <span
                      style={{
                        color: AppColors.textSecondary,
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/${AppConfig.whatsappNumber}?text=Hi, I'm interested in the ${plan.name} membership plan.`,
                    "_blank"
                  )
                }
                className="
                  w-full
                  mt-10
                  py-4
                  rounded-2xl
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                "
                style={{
                  backgroundColor: plan.popular
                    ? AppColors.primary
                    : "transparent",
                  color: AppColors.white,
                  border: `1px solid ${
                    plan.popular
                      ? AppColors.primary
                      : AppColors.border
                  }`,
                }}
              >
                {AppStrings.joinNow}
              </button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}