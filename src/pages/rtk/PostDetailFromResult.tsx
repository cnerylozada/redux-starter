import { useParams } from "react-router-dom";
import { useGetAllPostsQuery } from "../../rtkquery/services/posts";

export const PostDetailFromResult = () => {
  const { postId } = useParams();
  const { post } = useGetAllPostsQuery(undefined, {
    selectFromResult: (_) => {
      return {
        post: _.data?.find((post) => post.id === +`${postId}`),
      };
    },
  });

  return (
    <div>
      <div>PostDetailFromResult</div>
      <div>{JSON.stringify(post)}</div>
    </div>
  );
};
