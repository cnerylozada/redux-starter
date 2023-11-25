import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../rtkquery/services/posts";

export const PostDetail = () => {
  const { postId } = useParams();
  const { data, isLoading, isFetching } = useGetPostByIdQuery(
    postId as string,
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return (
    <div>
      <div>Post Detail ID: {postId}</div>
      {isLoading && <div>Loading ...</div>}
      {isFetching && <div>Fetching ...</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};
