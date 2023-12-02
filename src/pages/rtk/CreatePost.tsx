import { SubmitHandler, useForm } from "react-hook-form";
import { useAddNewPostMutation } from "../../rtkquery/services/posts";
import { useNavigate } from "react-router-dom";

interface IPostForm {
  title: string;
  author: string;
}

export const CreatePost = () => {
  const { register, handleSubmit } = useForm<IPostForm>();
  const navigate = useNavigate();
  const [fetchAddNewPost, { isLoading }] = useAddNewPostMutation();

  const onSubmit: SubmitHandler<IPostForm> = async (data) => {
    await fetchAddNewPost(data).unwrap();
    navigate("/rtk/posts");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>Create new post</div>
      <div className="space-y-2">
        <div>
          <input
            {...register("author")}
            placeholder="Author"
            className="border"
          />
        </div>
        <div>
          <input
            {...register("title")}
            placeholder="Title"
            className="border"
          />
        </div>
      </div>
      <button type="submit">{isLoading ? "Saving ..." : "Save"}</button>
    </form>
  );
};
