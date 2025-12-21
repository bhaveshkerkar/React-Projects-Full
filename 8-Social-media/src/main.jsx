import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import CreatePost, { createPostAction } from "./compo/CreatePost.jsx";
import PostList from "./compo/PostList.jsx";
import PostListProvider from "./store/post-list-store.jsx";
import { postLoaders } from "./compo/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoaders },
      {
        path: "create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostListProvider>
      <RouterProvider router={router} />
    </PostListProvider>
  </React.StrictMode>
);
