import cardImage from "../../assets/Untitled.png";
import classes from "./CardComponent.module.css";

const CardComponent = () => {
  return (
    <div className="text-center flex flex-col items-center mb-5">
      <h1 className="text-3xl font-extrabold text-shadow-white mb-5">
        Art Gallery
      </h1>
      <div className={classes.imgContainer}>
        <img src={cardImage} alt={"fantasy world image"} />
        <div className={classes.content}>
          <span className={classes.title}>Fantasy world ArtPiece</span>
          <span className={classes.price}>$43.99</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
