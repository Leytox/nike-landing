import { quote, star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover"
        width={120}
        height={120}
      />
      <div className="flex flex-row items-start mt-6">
        <img src={quote} alt="quote sign" />
        <p className="max-w-sm text-center info-text">{feedback}</p>
      </div>
      <div className="mt-3 flex justify-center items-center gap-2">
        <img
          src={star}
          alt="rating star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};
export default ReviewCard;
