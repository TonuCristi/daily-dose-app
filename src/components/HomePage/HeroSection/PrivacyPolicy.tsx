import { NavLink } from "react-router-dom";

type Props = {
  color?: string;
  linkBorder?: string;
  linkBorderC?: string;
  linkHBorder?: string;
};

export default function PrivacyPolicy({
  color = "text-white",
  linkBorder = "border-b",
  linkBorderC = "border-gray-50",
  linkHBorder = "border-white",
}: Props) {
  return (
    <p className={`text-2xl font-serif leading-[2.4rem] ${color}`}>
      <i>
        Your information is protected and I never spam, ever. You can view my
        privacy policy{" "}
        <NavLink
          to="/privacy-policy"
          className={`${linkBorder} ${linkBorderC} hover:${linkHBorder}`}
        >
          here
        </NavLink>
      </i>
    </p>
  );
}
