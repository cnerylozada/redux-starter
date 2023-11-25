import { useState } from "react";
import { useGetAllPostsQuery } from "../../rtkquery/services/posts";

export const Skip = () => {
  const [skip, setSkip] = useState(true);
  const { data, isLoading } = useGetAllPostsQuery(undefined, {
    skip,
  });
  return (
    <div>
      <div>Skip</div>
      <div>
        <button
          onClick={() => {
            setSkip((_) => !_);
          }}
        >
          Load results: <span>{!!skip}</span>
        </button>
      </div>
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
