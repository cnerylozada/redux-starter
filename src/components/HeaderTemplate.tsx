import { Link } from "react-router-dom";

export const HeaderTemplate = ({children}:{children:any}) => {
  return (
    <div>
      <div>
        <div><Link to="/">Redux Home</Link></div>
        <div><Link to="/counter">Redux Counter</Link></div>
        <div><Link to="/rtk">Rtk Home</Link></div>
        <div><Link to="/rtk/posts">Rtk Posts</Link></div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};
