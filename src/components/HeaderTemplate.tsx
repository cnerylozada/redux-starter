import { Link } from "react-router-dom";

export const HeaderTemplate = ({ children }: { children: any }) => {
  return (
    <div>
      <div>
        <div>
          <Link to="/">Redux Home</Link>
        </div>
        <div>
          <Link to="/counter">Redux Counter</Link>
        </div>
        <div>
          <Link to="/rtk">Rtk Query Home</Link>
        </div>
        <div>
          <Link to="/rtk/posts">Rtk Query Posts</Link>
        </div>
        <div>
          <Link to="/rtk/skip">Rtk Query Skip</Link>
        </div>
        <div>
          <Link to="/rtk/lazy-pokemons">Rtk Query Lazy pokemons</Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
