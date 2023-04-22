import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGoogleCircle,
} from "react-icons/ai";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <AiOutlineTwitter
          className={`${
            isDark ? "brightness-0" : ""
          } w-[20px] h-[20px] hover:opacity-50`}
        />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <AiFillFacebook
          className={`${
            isDark ? "brightness-0" : ""
          } w-[20px] h-[20px] hover:opacity-50`}
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <AiFillInstagram
          className={`${
            isDark ? "brightness-0" : ""
          } w-[20px] h-[20px] hover:opacity-50`}
        />
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <AiFillGoogleCircle
          className={`${
            isDark ? "brightness-0" : ""
          } w-[20px] h-[20px] hover:opacity-50`}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
