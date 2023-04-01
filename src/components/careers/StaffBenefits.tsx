/* eslint-disable prettier/prettier */
import React from "react";

import {
  BonusIcon,
  GiftIcon,
  GlassIcon,
  LocationIcon,
  TeaIcon,
} from "@/components/icons";

const BenefitCard: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => (
  <div className="text-primary py-4">
    <div className="flex justify-center items-center">{icon}</div>
    <div className="text-center mp:text-base">{label}</div>
  </div>
);

const StaffBenefits = () => {
  const [size] = React.useState<any>(60);
  return (
    <div className="text-[#EB7101] bg-white mp:px-4 sm:px-10 md:px-20 lg:py-10 xl:px-24">
      <h1 className="text-center mp:text-2xl sm:text-4xl xl:text-5xl">
        Here’s a selection of Staff Benefits we offer
      </h1>
      <div className="grid mp:grid-cols-2 sm:grid-cols-3 xl:grid-cols-5">
        <BenefitCard
          icon={<LocationIcon size={size} />}
          label="International Opportunities"
        />
        <BenefitCard
          icon={<GiftIcon size={size} />}
          label="A Day Off On Your Birthday"
        />
        <BenefitCard
          icon={<GlassIcon size={size} />}
          label="Friday Night Wines"
        />
        <BenefitCard
          icon={<TeaIcon size={size} />}
          label="Monthly Morning Teas"
        />
        <BenefitCard
          icon={<BonusIcon size={size} />}
          label="Bonuses And Incentives"
        />
      </div>
    </div>
  );
};

export default StaffBenefits;
