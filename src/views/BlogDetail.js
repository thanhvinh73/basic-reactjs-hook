import { useNavigate, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  return (
    <>
      <div>
        <span
          onClick={() => {
            navigate("/blog");
          }}
        >
          {`<--`} Back
        </span>{" "}
      </div>
      <div>Hello from blog detail with id: {id}</div>
    </>
  );
};

export default BlogDetail;
