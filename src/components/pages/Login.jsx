import Illustration from "../Illustration.jsx";
import Form from "../Form.jsx";
import classes from "../../styles/Login.module.css";
import Button from "../Button.jsx";
import TextInput from "../TextInput.jsx";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <TextInput type="email" placeholder="Enter email" icon="email" />
          <TextInput type="text" placeholder="Enter password" icon="password" />

          <Button>
            <span>Submit Now</span>
          </Button>

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
