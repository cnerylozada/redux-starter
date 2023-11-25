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
            <div key={_.id} style={{ marginBottom: "16px" }}>
              <div>
                id: {_.id} title: {_.title}
              </div>
              <div>
                <button style={{ marginRight: "8px" }}>
                  <Link to={`./${_.id}`}>Go to detail</Link>
                </button>
                <button>
                  <Link to={`./from-result/${_.id}`}>
                    Go to detail from result
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
