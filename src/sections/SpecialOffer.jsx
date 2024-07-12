import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shoping journey with our special offer shoes that are made
          with the finest materials and designed to perfection to give you the
          best experience possible in a shoe.
        </p>
        <div>
          <div className="flex flex-row gap-8">
            <Button
              label="Shop Now"
              iconURL={arrowRight}
              styles={
                "mt-11 text-white border-coral-red bg-coral-red hover:bg-white hover:text-coral-red hover:border-coral-red transition-all duration-300 ease-in-out"
              }
            ></Button>
            <Button
              label="Learn More"
              styles={
                "mt-11 text-black border-black bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
              }
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
