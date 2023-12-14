import InfoLinks from "./InfoLinks";
import SocialLinks from "./SocialLinks";

export default function Info() {
  return (
    <div className="pl-[14rem] pt-[4rem] pr-[36rem] pb-[5.6rem] flex items-center justify-between">
      <InfoLinks />
      <SocialLinks />
    </div>
  );
}
