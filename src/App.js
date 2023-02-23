import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PostView from "./Pages/PostView";
import Header from "./Common/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Header/> }>
          <Route path="/" element={ <Home/> } />
          <Route path="/postview/:postID" element={ <PostView/> } />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;