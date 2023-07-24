import { Link, useNavigate } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);

  let handleShow = () => setShow(true);
  let handleClose = () => setShow(false);

  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      setNewData(blogs.slice(0, 9));
    }
  }, [blogs]);

  const handleAddNew = (blog) => {
    newData.unshift(blog);
    setShow(false);
    setNewData(newData);
  };

  const deleteBlog = (blog) => {
    let data = newData;
    data = data.filter((item) => item.id !== blog.id);
    setNewData(data);
  };

  return (
    <>
      <Button className="add-new" variant="primary" onClick={handleShow}>
        + Add new blog
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New BLog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>
      <div className="blogs-container">
        {newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">
                  <span>{item.title}</span>
                  <span
                    onClick={() => {
                      deleteBlog(item);
                    }}
                  >
                    X
                  </span>
                </div>
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
    </>
  );
};
export default Blog;
