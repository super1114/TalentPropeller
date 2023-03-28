import React from 'react';

import {
  BonusIcon,
  GiftIcon,
  GlassIcon,
  LocationIcon,
  TeaIcon,
} from '@/components/icons';

const BenefitCard: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => (
  <div className="text-primary">
    <div className="flex justify-center items-center h-[180px]">{icon}</div>
    <div className="text-[35px] text-center">{label}</div>
  </div>
);

const StaffBenefits = () => {
  return (
    <div className="items-center py-[90px] px-[160px] text-[#EB7101] bg-white">
      <h1 className="text-[50px] text-center">
        Here’s a selection of Staff Benefits we offer
      </h1>
      <div className="grid grid-cols-3 gap-4 pt-[30px] lg:grid-cols-5">
        <BenefitCard
          icon={<LocationIcon size={120} />}
          label="International Opportunities"
        />

        <BenefitCard
          icon={<GiftIcon size={120} />}
          label="A Day Off On Your Birthday"
        />

        <BenefitCard
          icon={<GlassIcon size={120} />}
          label="Friday Night Wines"
        />

        <BenefitCard
          icon={<TeaIcon size={120} />}
          label="Monthly Morning Teas"
        />
        <BenefitCard
          icon={<BonusIcon size={120} />}
          label="Bonuses And Incentives"
        />
      </div>
    </div>
  );
};

export default StaffBenefits;
