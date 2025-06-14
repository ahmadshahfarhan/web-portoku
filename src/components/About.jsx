import Globe from "../assets/image/gif/globe.gif";
import { dataAbout } from "../assets/api/admin";
import TextRevealByWord from "./ui/textReveal";

export default function About() {
  return (
    <div className="bg-[#171717] bug-border">
      <div className="container lg:gaps">
        <div className=" flex items-center justify-between pt-8">
          <h1
            aria-label="About me"
            className="text-white text-[40px] sm:text-[80px] md:text-[80px] lg:text-[80px] text-left font-bold leading-[0,9em] tracking-tighter"
          >
            About me
          </h1>
          <div className="bg-neutral-800 p-1 rounded-full">
            <img width={50} height={50} src={Globe} alt="" />
          </div>
        </div>
        {dataAbout.map((about) => (
          <TextRevealByWord
            key={about}
            className="leading-none text-justify font mt-6"
            text={about.deskripsi}
          ></TextRevealByWord>
        ))}
      </div>
    </div>
  );
}
