import { useEffect } from "react";
import Bonobono from "../assets/bonobono.png";
import { Link } from "react-router-dom";

const Notpage = () => {
  useEffect(() => {
    window.scrollTo(0, 400);
  }, []);
  return (
    <div>
      <div>
      <Link to={'/Main'}>
        <img src={Bonobono} alt="bonobono" />
      </Link>
      </div>
    </div>
  );
};

export default Notpage