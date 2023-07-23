import { Link } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";

const Blog = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  let newDataBlogs = [];
  if (blogs && blogs.length > 0) {
    newDataBlogs = blogs.slice(0, 9);
  }

  return (
    <div className="blogs-container">
      {newDataBlogs &&
        newDataBlogs.length > 0 &&
        newDataBlogs.map((item) => {
          return (
            <div className="single-blog" key={item.id}>
              <div className="title">{item.title}</div>
              <div className="content">{item.body}</div>
              <Link to={`/blog/${item.id}`}>
                <button type="button">View detail</button>
              </Link>
            </div>
          );
        })}
      {isLoading && (
        <div style={{ textAlign: "center !important", width: "100%" }}>
          Loading data...
        </div>
      )}
    </div>
  );
};
export default Blog;
