import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium quality and comfort, our shoes are designed to last a
          lifetime. We use the best materials to make sure you get the best
          experience. Our shoes are made to last and provide you with the best
          comfort.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
          <Button
            label="View Details"
            styles={
              "mt-11 text-white border-coral-red bg-coral-red hover:bg-white hover:text-coral-red hover:border-coral-red transition-all duration-300 ease-in-out"
            }
          ></Button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt={"shoe"}
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};
export default SuperQuality;
