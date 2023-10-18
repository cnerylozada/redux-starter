import { useGetAllPostsQuery } from "../../rtkquery/services/posts";

export const PostsPage = () => {
  const { data, isLoading } = useGetAllPostsQuery("");
  return (
    <div>
      <div>PostsPage</div>
      {isLoading && <div>Loading ...</div>}
      {data && (
        <div>
          {data.map((_) => (
            <div key={_.id}>
              id: {_.id} title: {_.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
