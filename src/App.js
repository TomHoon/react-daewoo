import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import Articles from "./pages/Articles";
import Article from "./pages/Article";

import Notfound from "./pages/Notfound";

import Login from "./pages/Login";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Notfound/>}/>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Route>
      
      <Route path="/articles" element={<Articles/>}>
        <Route path=":id" element={<Article/>}/>
      </Route>

      <Route path="/login" element={<Login/>}/>
      <Route path="/mypage" element={<Mypage/>}/>
      
    </Routes>
  );
}

export default App;