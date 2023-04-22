import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Ad1 from "public/assets/ad-1.webp";
import { AiFillGithub } from "react-icons/ai";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10 text-lg">
          <Link href="/">The Next Blog</Link>
        </div>
        <div>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="w-[20px] h-[20px] hover:opacity-50" />
          </a>
        </div>
      </nav>
      <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">The Next Blog</h1>
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minima,
            minus doloremque rerum architecto eius quasi iste repellat labore
            iure, laudantium illum nostrum fuga vitae eveniet earum similique
            tenetur deserunt!
          </p>
        </div>
        <div className="basis-full relative w-auto h-32 ">
          <Image
            fill
            alt="advert-1"
            placeholder="blur"
            src={Ad1}
            sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </header>
  );
};
export default Navbar;
