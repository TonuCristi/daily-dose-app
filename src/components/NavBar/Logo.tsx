import { NavLink } from "react-router-dom";

export default function Logo({ mb = "" }: { mb: string }) {
  return (
    <NavLink
      to="/"
      className={`inline-block text-3xl uppercase font-semibold tracking-wide ${
        mb.length ? mb : ""
      }`}
    >
      Daily dose
    </NavLink>
  );
}
