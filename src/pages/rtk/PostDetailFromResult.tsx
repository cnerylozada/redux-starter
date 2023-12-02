import { useGetAllPostsQuery } from "../../rtkquery/services/posts";

export const PostDetailFromResult = ({
  postId,
  onClose,
}: {
  postId: number;
  onClose: () => void;
}) => {
  const { post } = useGetAllPostsQuery(undefined, {
    selectFromResult: (_) => {
      return {
        post: _.data?.find((post) => post.id === +`${postId}`),
      };
    },
  });

  return (
    <div className="p-4 border rounded-md bg-blue-50">
      <div>
        <button onClick={onClose}>X</button>
      </div>
      <div className="font-bold">PostDetailFromResult</div>
      <div>{JSON.stringify(post)}</div>
    </div>
  );
};
