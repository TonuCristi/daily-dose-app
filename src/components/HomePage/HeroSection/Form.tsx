import Subscription from "./Subscription";
import PrivacyPolicy from "./PrivacyPolicy";

export default function Form() {
  return (
    <div className="">
      <p className="text-4xl uppercase font-bold leading-[4rem] mb-[3.2rem]">
        <span className="text-orange-50">7396 people </span>
        have shared breakthrough so far. Will the next one be you?
      </p>

      <p className="font-serif text-3xl leading-[3.2rem] mb-[3.2rem]">
        Receive ideas shared with millions of people each week directly to your
        inbox.
      </p>

      <Subscription />
      <PrivacyPolicy />
    </div>
  );
}
