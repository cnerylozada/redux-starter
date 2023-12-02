import { Link } from "react-router-dom";
import { useGetAllPostsQuery } from "../../rtkquery/services/posts";
import { useState } from "react";
import { PostDetailFromResult } from "./PostDetailFromResult";

export const PostsPage = () => {
  const { data, isLoading } = useGetAllPostsQuery(undefined);
  const [modal, setModal] = useState<{ isOpen: boolean; postId: number }>({
    isOpen: false,
    postId: 0,
  });

  return (
    <div className="relative">
      {modal.isOpen && (
        <div className="m-4">
          <PostDetailFromResult
            postId={modal.postId}
            onClose={() => {
              setModal((_) => ({ ..._, isOpen: false }));
            }}
          />
        </div>
      )}
      <div>PostsPage</div>
      <div className="mb-2">
        <button className="p-1 border rounded-sm bg-blue-50">
          <Link to={"./create"}>Create new post</Link>
        </button>
      </div>
      {isLoading && <div>Loading ...</div>}
      {data && (
        <div>
          {data.map((_) => (
            <div key={_.id} style={{ marginBottom: "16px" }}>
              <div>
                id: {_.id} title: {_.title}
              </div>
              <div className="space-x-4">
                <button className="p-1 bg-green-50 border rounded-sm">
                  <Link to={`./${_.id}`}>Go to detail</Link>
                </button>
                <button
                  className="p-1 bg-blue-50 border rounded-sm"
                  onClick={() => {
                    setModal({ isOpen: true, postId: _.id });
                  }}
                >
                  Open modal with post detail
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
