import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between
      items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h2 className="text-4xl leading-[64px] font-palanquin font-bold text-center">
        Subscribe for <span className="text-coral-red">Updates</span> &
        Newsletter
      </h2>
      <form
        action=""
        className="w-full flex justify-center items-center gap-12"
      >
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="text-center w-1/2 border-2 border-gray-300 outline-none rounded-full py-2 px-4"
        />
        <Button
          label={"Subscribe"}
          styles={
            "text-white border-coral-red bg-coral-red hover:bg-white hover:text-coral-red hover:border-coral-red transition-all duration-300 ease-in-out"
          }
        />
      </form>
    </section>
  );
};
export default Subscribe;
