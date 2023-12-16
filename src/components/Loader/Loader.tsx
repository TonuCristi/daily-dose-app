// const border = 4;

export default function Loader() {
  return (
    <div className="h-[50vh] flex items-center justify-center">
      <div
        className={`w-[5rem] h-[5rem] border-[5px] border-loader border-r-white rounded-full animate-spin`}
      ></div>
    </div>
  );
}
