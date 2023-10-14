import { Link } from "react-router-dom";

export const Template = ({ children }: { children: any }) => {
  return (
    <div>
      <div>
        <Link to="/home">Redux Home</Link>
      </div>
      <div>
        <Link to="/rtk/home">Rtk Home</Link>
      </div>
      <div>
        <Link to="/rtk/lazy-pokemons">Rtk Lazy Pokemons</Link>
      </div>

      <div>{children}</div>
    </div>
  );
};
