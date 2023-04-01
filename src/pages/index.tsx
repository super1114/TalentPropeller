/* eslint-disable prettier/prettier */

import Jumbotron from "@/components/home/Jumbotron";
import JumbotronExtra from "@/components/home/JumbotronExtra";
import Partnership from "@/components/home/Partnership";
import Showcase from "@/components/home/Showcase";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <JumbotronExtra />
      <Showcase />
      <Partnership />
    </div>
  );
}
