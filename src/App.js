import "./App.css";
import Nav from "./views/Nav";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { CountDown, NewCountDown } from "./views/CountDown";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./views/ErrorPage";
import Blog from "./views/Blog";
import BlogDetail from "./views/BlogDetail";
import AddNewBlog from "./views/AddNewBlog";
import Secret from "./views/Secret";

//~~class
const App = () => {
  const onTimesup = () => {
    console.log("Times up");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />

          <Routes>
            <Route path="/" element={<Covid />} />
            <Route
              path="/timer"
              element={
                <div>
                  {" "}
                  <CountDown onTimesup={onTimesup} />
                  <span>---------------</span>
                  <NewCountDown onTimesup={onTimesup} />
                </div>
              }
            />
            <Route path="/todo" element={<Todo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/add-new-blog" element={<AddNewBlog />} />
            <Route path="/secret" element={<Secret />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
};

export default App;
