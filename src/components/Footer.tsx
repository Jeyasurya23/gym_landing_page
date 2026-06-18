import { Dumbbell } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import {
  AppColors,
  AppConfig,
  AppStrings,
} from "../constants";

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-8 px-6"
      style={{
        backgroundColor: AppColors.background,
        borderTop: `1px solid ${AppColors.border}`,
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Dumbbell
                color={AppColors.primary}
                size={28}
              />

              <h3 className="text-2xl font-bold text-white">
                {AppStrings.fit}
                <span
                  style={{
                    color: AppColors.primary,
                  }}
                >
                  {AppStrings.zone}
                </span>
              </h3>
            </div>

            <p
              className="mt-5 leading-relaxed"
              style={{
                color: AppColors.textSecondary,
              }}
            >
              {AppStrings.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              {AppStrings.footerQuickLinks}
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  style={{
                    color: AppColors.textSecondary,
                  }}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#programs"
                  style={{
                    color: AppColors.textSecondary,
                  }}
                >
                  Programs
                </a>
              </li>

              <li>
                <a
                  href="#trainers"
                  style={{
                    color: AppColors.textSecondary,
                  }}
                >
                  Trainers
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  style={{
                    color: AppColors.textSecondary,
                  }}
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              {AppStrings.footerPrograms}
            </h4>

            <ul className="space-y-3">
              <li
                style={{
                  color: AppColors.textSecondary,
                }}
              >
                {AppStrings.strengthTraining}
              </li>

              <li
                style={{
                  color: AppColors.textSecondary,
                }}
              >
                {AppStrings.weightLoss}
              </li>

              <li
                style={{
                  color: AppColors.textSecondary,
                }}
              >
                {AppStrings.personalTraining}
              </li>

              <li
                style={{
                  color: AppColors.textSecondary,
                }}
              >
                {AppStrings.nutritionCoaching}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              {AppStrings.footerContact}
            </h4>

            <ul className="space-y-3">
              <li
                style={{
                  color: AppColors.textSecondary,
                }}
              >
                {AppConfig.phone}
              </li>

              <li
                style={{
                  color: AppColors.textSecondary,
                }}
              >
                {AppConfig.email}
              </li>

              <li
                style={{
                  color: AppColors.textSecondary,
                }}
              >
                {AppConfig.location}
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div
          className="my-10"
          style={{
            borderTop: `1px solid ${AppColors.border}`,
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p
            style={{
              color: AppColors.textSecondary,
            }}
          >
            {AppStrings.footerCopyright}
          </p>

          <div className="flex gap-4">

            <a
              href={AppConfig.instagram}
              className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
              "
              style={{
                backgroundColor: `${AppColors.primary}20`,
              }}
            >
              <FaInstagram
                color={AppColors.primary}
              />
            </a>

            <a
              href={AppConfig.facebook}
              className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
              "
              style={{
                backgroundColor: `${AppColors.primary}20`,
              }}
            >
              <FaFacebookF
                color={AppColors.primary}
              />
            </a>

            <a
              href={AppConfig.x}
              className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
              "
              style={{
                backgroundColor: `${AppColors.primary}20`,
              }}
            >
              <FaXTwitter
                color={AppColors.primary}
              />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}