import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id="error-page">
        <h1>Opps!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>404 ERROR</i>
        </p>
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home Page
        </Button>
      </div>
    </>
  );
};

export default ErrorPage;
