import { useState } from "react";
import "./Blog.scss";
import axios from "axios";

const AddNewBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmitBtn = async () => {
    if (!title || !content) {
      alert("Missing title or content");
      return;
    }

    let data = {
      title: title,
      userId: 1,
      body: content,
    };
    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    if (res && res.data) {
      props.handleAddNew(res.data);
    }
  };
  return (
    <>
      <div className="add-new-container">
        <div className="text-add-new">----- Add New Blog -----</div>
        <div className="inputs-data">
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputs-data">
          <label>Content: </label>
          <input
            type="text"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </div>
        <button
          className="add-new"
          type="button"
          onClick={() => {
            handleSubmitBtn();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AddNewBlog;
