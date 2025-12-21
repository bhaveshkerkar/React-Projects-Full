import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label className="form-label">Enter Your user ID here</label>
        <input name="userId" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input name="title" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Post Content</label>
        <textarea name="body" rows="4" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Reactions</label>
        <input name="reactions" type="number" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Tags</label>
        <input
          name="tags"
          className="form-control"
          placeholder="react javascript"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit Post
      </button>
    </Form>
  );
};

export async function createPostAction({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  postData.tags = postData.tags.split(" ");
  postData.reactions = Number(postData.reactions);

  await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });

  return redirect("/");
}

export default CreatePost;
