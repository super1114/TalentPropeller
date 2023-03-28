import Advertise from '@/components/careers/Advertise';
import CareersJumbotron from '@/components/careers/CareersJumbotron';
import Collegue from '@/components/careers/Collegue';
import CurrentVacancies from '@/components/careers/CurrentVacancies';
import StaffBenefits from '@/components/careers/StaffBenefits';
import Meta from '@/layout/Meta';

const careers = () => {
  return (
    <div>
      <Meta title="Talent Propeller - Careers" />
      <CareersJumbotron />
      <StaffBenefits />
      <CurrentVacancies />
      <Advertise />
      <Collegue />
    </div>
  );
};

export default careers;
