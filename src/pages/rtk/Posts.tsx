import { Link } from "react-router-dom";
import { useGetAllPostsQuery } from "../../rtkquery/services/posts";

export const PostsPage = () => {
  const { data, isLoading } = useGetAllPostsQuery(undefined);
  return (
    <div>
      <div>PostsPage</div>
      {isLoading && <div>Loading ...</div>}
      {data && (
        <div>
          {data.map((_) => (
            <div key={_.id}>
              <div>
                id: {_.id} title: {_.title}
              </div>
              <div>
                <Link to={`./${_.id}`}>Go to detail</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
