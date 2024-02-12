import React from "react";
import {
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostQuery,
  useGetPostsQuery,
  useUpdatePostMutation,
} from "./Services/PostApi";

const App = () => {
  const { data, isError, isLoading, isSuccess, isFetching } =
    useGetPostsQuery();
  return (
    <>
      <h1>React Redux Toolkit RTK Tutorial</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      {isFetching && <p>...Fetching</p>}
      {isSuccess && (
        <div>
          {data.map((post) => {
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <span>
                  <PostDeatil id={post.id} />
                </span>
              </div>
            );
          })}
          <AddPosts />
        </div>
      )}
    </>
  );
};

export const PostDeatil = ({ id }: { id: number }) => {
  const { data } = useGetPostQuery(id);
  return (
    <>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  );
};

export const AddPosts = () => {
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  // const { refetch } = useGetPostsQuery();

  const post = {
    id: 400,
    title: "ea molestias quasi",
    body: "voluptatem occaecati omnis eligendi aut ad ullam et saepe reiciendis voluptatem adipisci",
  };

  const update = {
    id: 100,
    title: "ea molestias quasi",
    body: "voluptatem occaecati omnis eligendi aut ad ullam et saepe reiciendis voluptatem adipisci",
  };

  const addHandler = async () => {
    await addPost(post);
    // refetch();
  };

  const updateHandler = async () => {
    await updatePost(update);
  };

  const deleteHandler = async () => {
    await deletePost(100);
  };

  return (
    <>
      <button onClick={addHandler}>Add Posts</button>
      <button onClick={updateHandler}>Update Posts</button>
      <button onClick={deleteHandler}>Delete Posts</button>
    </>
  );
};

export default App;
