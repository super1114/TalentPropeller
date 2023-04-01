/* eslint-disable import/newline-after-import */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import Meta from "@/layout/Meta";
import ServiceJumbotron from "@/components/services/ServiceJumbotron";
import ServiceJumbotronExtra from "@/components/services/ServiceJumbotronExtra";
import StandOut from "@/components/services/StandOut";
import PropellerServices from "@/components/services/PropellerServices";

const services = () => {
  return (
    <>
      <div>
        <Meta title="Talent Propeller - Services" />
      </div>
      <ServiceJumbotron />
      {/* <ServiceJumbotronExtra /> */}
      {/* <StandOut /> */}
      {/* <PropellerServices /> */}
    </>
  );
};

export default services;
