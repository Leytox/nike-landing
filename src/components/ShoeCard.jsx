const ShoeCard = ({ imgUrl, name }) => {
  return (
    <div>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default ShoeCard;
