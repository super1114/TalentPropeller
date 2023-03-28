import ContactInformation from '@/components/contact/ContactInformation';
import ContactJumbotron from '@/components/contact/ContactJumbotron';
import Meta from '@/layout/Meta';

const contact = () => {
  return (
    <div>
      <Meta title="Talent Propeller - Contact" />
      <ContactJumbotron />
      <ContactInformation />
    </div>
  );
};

export default contact;
