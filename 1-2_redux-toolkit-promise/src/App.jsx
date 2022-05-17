import PostList from "./pages/PostList";
import Post from "./pages/Post";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>redux-toolkit-promise</h1>
      <Routes>
        <Route exact path="/" element={<PostList />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
