import { Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export function SignInForm() {
  return (
    <div className="mb-4">
      {/* Header Section */}
      <div className="mb-3">
        <h2 className="mb-1 fw-bold"> Sign in</h2>
        <p className="text-secondary small">
          Don't have an account?
          <Link to="/registration" className="text-primary fw-bold">
            {" "}
            Sign up
          </Link>
        </p>
      </div>

      {/* Form Section */}
      <Form>
        {/* Email Input */}
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary fw-bold">
            {" "}
            {/* small and fw-bold to mimic MUI label */}
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            className="form-control-md p-3"
          />
        </Form.Group>

        {/* Password Input */}
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary fw-bold">
            {" "}
            {/* small and fw-bold to mimic MUI label */}
            Password
          </Form.Label>
          <InputGroup className="input-group-md">
            <Form.Control
              className="p-3"
              type="password"
              placeholder="Enter your password"
            />
            <InputGroup.Text
              className="bg-transparent border-left-0"
              style={{ cursor: "pointer" }}
            >
              {/* Placeholder for the password visibility icon */}
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        {/* Submit Button */}
        <Button className="w-100" variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  );
}
