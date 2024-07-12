import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>
        <p className="info-text font-montserrat text-center mt-4 max-w-lg m-auto">
          Hear genuine stories from our satisfied customers about their
          exceptional expiriences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg: flex-col gap-14">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CustomerReviews;
