import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../compo/Header";
import Footer from "../compo/Footer";
import Sidebar from "../compo/Sidebar";
import CreatePost from "../compo/CreatePost";
import PostList from "../compo/PostList";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
