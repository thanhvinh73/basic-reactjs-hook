import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";
const BlogDetail = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const {
    data: blogDetail,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return (
    <>
      <div className="blog-detail">
        {blogDetail && (
          <>
            <div className="blog-id"> Blog ID: {id} </div>
            {isLoading ? (
              <div>Loading data...</div>
            ) : (
              <>
                <div className="title">{blogDetail.title}</div>
                <div className="content">{blogDetail.body}</div>
                <button
                  className="button-back"
                  type="button"
                  onClick={() => {
                    navigate("/blog");
                  }}
                >
                  Back
                </button>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default BlogDetail;
