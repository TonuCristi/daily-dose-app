type Props = {
  children?: string;
  color?: string;
  hColor?: string;
  fS?: string;
  bg?: string;
  hBg?: string;
  fW?: string;
  textT?: string;
  px?: string;
  py?: string;
};

export default function Button({
  children,
  color = "text-white",
  hColor = "text-gray-200",
  fS = "text-xl",
  bg = "bg-gray-200",
  hBg = "bg-orange-50",
  fW = "font-bold",
  textT = "uppercase",
  px = "px-0",
  py = "py-0",
}: Props) {
  return (
    <button
      className={`${color} ${bg} hover:${hColor} hover:${hBg} ${px} ${py} rounded-[2.7rem] ${fS} ${textT} ${fW} h-full`}
    >
      {children}
    </button>
  );
}
