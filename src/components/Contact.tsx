import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle,
  Clock3,
  Users,
} from "lucide-react";
import {
  AppColors,
  AppConfig,
  AppStrings,
} from "../constants";

export default function Contact() {

  return (
    <section
      id="contact"
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
            {AppStrings.contactBadge}
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            {AppStrings.contactTitle}
          </h2>

          <p
            className="max-w-2xl mx-auto mt-6 text-lg"
            style={{
              color: AppColors.textSecondary,
            }}
          >
            {AppStrings.contactDescription}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="rounded-3xl p-6 flex flex-col"
  style={{
    backgroundColor: "rgba(255,255,255,0.04)",
    border: `1px solid ${AppColors.border}`,
  }}
>
  <div className="grid md:grid-cols-2 gap-6">

    {/* Phone */}
    <div className="flex items-center gap-4">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
        style={{
          backgroundColor: `${AppColors.primary}20`,
        }}
      >
        <Phone
          size={24}
          color={AppColors.primary}
        />
      </div>

      <div>
        <h3
          className="font-semibold"
          style={{
            color: AppColors.white,
          }}
        >
          {AppStrings.contactPhone}
        </h3>

        <p
          style={{
            color: AppColors.textSecondary,
          }}
        >
          {AppConfig.phone}
        </p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-center gap-4">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
        style={{
          backgroundColor: `${AppColors.primary}20`,
        }}
      >
        <Mail
          size={24}
          color={AppColors.primary}
        />
      </div>

      <div>
        <h3
          className="font-semibold"
          style={{
            color: AppColors.white,
          }}
        >
          {AppStrings.contactEmail}
        </h3>

        <p
          style={{
            color: AppColors.textSecondary,
          }}
        >
          {AppConfig.email}
        </p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-center gap-4">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
        style={{
          backgroundColor: `${AppColors.primary}20`,
        }}
      >
        <MapPin
          size={24}
          color={AppColors.primary}
        />
      </div>

      <div>
        <h3
          className="font-semibold"
          style={{
            color: AppColors.white,
          }}
        >
          {AppStrings.contactLocation}
        </h3>

        <p
          style={{
            color: AppColors.textSecondary,
          }}
        >
          {AppConfig.location}
        </p>
      </div>
    </div>

    {/* Timing */}
    <div className="flex items-center gap-4">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
        style={{
          backgroundColor: `${AppColors.primary}20`,
        }}
      >
        <Clock3
          size={24}
          color={AppColors.primary}
        />
      </div>

      <div>
        <h3
          className="font-semibold"
          style={{
            color: AppColors.white,
          }}
        >
          {AppStrings.contactTiming}
        </h3>

        <p
          style={{
            color: AppColors.textSecondary,
          }}
        >
          {AppConfig.timing}
        </p>
      </div>
    </div>

  </div>

  <div className="mt-8">
    <h3
      className="text-lg font-semibold mb-4"
      style={{
        color: AppColors.white,
      }}
    >
      {AppStrings.findUs}
    </h3>

    <div
      className="overflow-hidden rounded-3xl h-[300px]"
      style={{
        border: `1px solid ${AppColors.border}`,
      }}
    >
      <iframe
        title="Location Map"
        src="https://www.google.com/maps?q=coimbatore&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        className="border-0"
      />
    </div>
  </div>
</motion.div>

          {/* Whatsapp */}
          <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="rounded-3xl p-8 flex flex-col justify-center"
  style={{
    backgroundColor: "rgba(255,255,255,0.04)",
    border: `1px solid ${AppColors.border}`,
  }}
>

  <div className="flex items-center gap-5 mb-6">

  <div
    className="w-20 h-20 rounded-3xl flex items-center justify-center shrink-0"
    style={{
      backgroundColor: `${AppColors.primary}20`,
    }}
  >
    <MessageCircle
      size={40}
      color={AppColors.primary}
    />
  </div>

  <div>
    <h3
      className="text-3xl md:text-4xl font-black leading-tight"
      style={{
        color: AppColors.white,
      }}
    >
      {AppStrings.whatsappTitle}
    </h3>

    <p
      className="mt-2"
      style={{
        color: AppColors.textSecondary,
      }}
    >
      {AppStrings.whatsappSubtitle}
    </p>
  </div>

</div>

  <p
    className="mt-0 text-lg leading-relaxed"
    style={{
      color: AppColors.textSecondary,
    }}
  >
    {AppStrings.whatsappDescription}
  </p>

  {/* Benefits */}

  <div className="mt-8 space-y-4">

   {AppStrings.benefits.map((item) => (
      <div
        key={item}
        className="flex items-center gap-3"
      >
        <CheckCircle
          size={20}
          color={AppColors.primary}
        />

        <span
          style={{
            color: AppColors.white,
          }}
        >
          {item}
        </span>
      </div>
    ))}

  </div>

  {/* Button */}

  <button
    onClick={() =>
      window.open(
        `https://wa.me/${AppConfig.whatsappNumber}?text=Hi, I'm interested in joining the gym.`,
        "_blank"
      )
    }
    className="
      mt-10
      py-4
      rounded-2xl
      font-semibold
      flex
      items-center
      justify-center
      gap-3
      transition-all
      duration-300
      hover:scale-105
    "
    style={{
      backgroundColor: AppColors.primary,
      color: AppColors.white,
    }}
  >
    <MessageCircle size={22} />
    {AppStrings.chatWhatsapp}
  </button>

  {/* Stats */}

  <div className="grid grid-cols-2 gap-4 mt-8">

    <div
      className="rounded-2xl p-4"
      style={{
        backgroundColor: `${AppColors.primary}10`,
        border: `1px solid ${AppColors.border}`,
      }}
    >
      <Clock3
        size={22}
        color={AppColors.primary}
      />

      <p
        className="mt-2 font-semibold"
        style={{
          color: AppColors.white,
        }}
      >
        {AppStrings.responseTimeTitle}
      </p>

      <span
        style={{
          color: AppColors.textSecondary,
        }}
      >
        {AppStrings.responseTimeValue}
      </span>
    </div>

    <div
      className="rounded-2xl p-4"
      style={{
        backgroundColor: `${AppColors.primary}10`,
        border: `1px solid ${AppColors.border}`,
      }}
    >
      <Users
        size={22}
        color={AppColors.primary}
      />

      <p
        className="mt-2 font-semibold"
        style={{
          color: AppColors.white,
        }}
      >
        {AppStrings.happyMembersValue}
      </p>

      <span
        style={{
          color: AppColors.textSecondary,
        }}
      >
        {AppStrings.happyMembersTitle}
      </span>
    </div>

  </div>

</motion.div>

        </div>

      </div>
    </section>
  );
}