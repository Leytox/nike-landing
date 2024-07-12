import { star } from "../assets/icons";

const PopularProductCard = ({ name, price, imgURL }) => {
  return (
    <div className="flex flex-1 flex-col justify-center gap-2 w-full items-center">
      <img src={imgURL} alt={name} width={280} height={280} />
      <div className="mt-8 flex justify-start gap-2">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat leading-normal text-lg text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="font-palanquin font-bold text-2xl">{name}</h3>
      <p className="font-montserrat text-coral-red font-bold">{price}</p>
    </div>
  );
};
export default PopularProductCard;
