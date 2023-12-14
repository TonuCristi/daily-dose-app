import {
  FaFacebookSquare,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-8 text-3xl">
      <li>
        <FaFacebookSquare className="hover:text-orange-50 cursor-pointer" />
      </li>
      <li>
        <FaTiktok className="hover:text-orange-50 cursor-pointer" />
      </li>
      <li>
        <FaInstagram className="hover:text-orange-50 cursor-pointer" />
      </li>
      <li>
        <FaLinkedinIn className="hover:text-orange-50 cursor-pointer" />
      </li>
      <li>
        <FaYoutube className="hover:text-orange-50 cursor-pointer" />
      </li>
      <li>
        <FaTwitter className="hover:text-orange-50 cursor-pointer" />
      </li>
    </ul>
  );
}
