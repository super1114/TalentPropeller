/* eslint-disable prettier/prettier */


import AboutJumbotron from "@/components/about/AboutJumbotron";
import Booking from "@/components/about/Booking";
import Features from "@/components/about/Features";
import Introduction from "@/components/about/Introduction";
import Story from "@/components/about/Story";
import WorkMethod from "@/components/about/WorkMethod";
import Meta from "@/layout/Meta";


export default function About() {
  return (
    <div>
      <Meta title="Talent Propeller - About" />
      <AboutJumbotron />
      <Features />
      <Introduction />
      <WorkMethod />
      <Story />
      <Booking />
    </div>
  );
}
