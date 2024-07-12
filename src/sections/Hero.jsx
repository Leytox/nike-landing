import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
const Hero = () => {
  return (
    <section
      id="home"
      className="flex w-full xl:flex-row flex-col justify-center min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight}></Button>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-col relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          id="hero-image"
          src={bigShoe1}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 h-3/4 "
        />
        <div className="flex-row flex gap-10">
          {shoes.map((shoe, index) => (
            <div
              key={index}
              className="border-2 border-transparent bg-card bg-center rounded-lg cursor-pointer hover:border-coral-red hover:border-2
              transition-all duration-300 ease-in-out"
              onClick={() => {
                const heroImage = document.getElementById("hero-image");
                heroImage.src = shoe.bigShoe;
              }}
            >
              <ShoeCard
                imgUrl={shoe.thumbnail}
                changeBigShoeImage={() => {}}
                bigShoeImg={shoe.bigShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
