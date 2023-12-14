import { NavLink } from "react-router-dom";
import Subscription from "./Subscription";

export default function HeroSection() {
  return (
    <section className="border-b border-2bOpacity">
      <div className="max-w-defaultWidth m-auto px-[4.8rem] py-[6.4rem]">
        <h1 className="text-[8rem] font-bold text-center leading-[10rem] mb-[6.4rem]">
          5 Minutes That Might Change Your Life
        </h1>
        <div className="grid grid-cols-2 items-center gap-[12.8rem] w-[90%] m-auto">
          <img
            src="./../../two-phones.webp"
            alt="Phone app photo"
            className="max-w-full"
          />

          <div className="">
            <p className="text-4xl uppercase font-bold leading-[4rem] mb-[3.2rem]">
              <span className="text-orange-50">7396 people </span>
              have shared breakthrough so far. Will the next one be you?
            </p>

            <p className="font-serif text-3xl leading-[3.2rem] mb-[3.2rem]">
              Receive ideas shared with millions of people each week directly to
              your inbox.
            </p>

            <Subscription />

            <p className="text-2xl font-serif leading-[2.4rem]">
              <i>
                Your information is protected and I never spam, ever. You can
                view my privacy policy{" "}
                <NavLink
                  to="/privacy-policy"
                  className="border-b border-gray-50 hover:border-white"
                >
                  here
                </NavLink>
              </i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
