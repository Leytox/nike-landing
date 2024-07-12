const Button = ({ label, iconURL, styles }) => {
  return (
    <button
      className={`flex
      justify-center items-center gap-2 px-7
      py-4 border font-montserrat text-lg
      leading-none rounded-full
      ${styles}`}
    >
      {label}{" "}
      {iconURL ? (
        <img src={iconURL} alt={"icon"} className="ml-2 rounded-full w-5 h-5" />
      ) : null}
    </button>
  );
};

export default Button;
