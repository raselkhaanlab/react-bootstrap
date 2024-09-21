import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export function SignUpForm() {
  return (
    <div className="mb-4">
      {/* Header Section */}
      <div className="mb-3">
        <h2 className="mb-1 fw-bold">Sign up</h2>
        <p className="text-secondary small">
          Already have an account?{" "}
          <Link to="/login" className="text-primary fw-bold">
            Sign in
          </Link>
        </p>
      </div>

      {/* Form Section */}
      <Form>
        {/* First Name */}
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary fw-bold">First name</Form.Label>
          <Form.Control
            className="p-3"
            type="text"
            placeholder="Enter your first name"
          />
        </Form.Group>

        {/* Last Name */}
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary fw-bold">Last name</Form.Label>
          <Form.Control
            className="p-3"
            type="text"
            placeholder="Enter your last name"
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary fw-bold">
            Email address
          </Form.Label>
          <Form.Control
            className="p-3"
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary fw-bold">Password</Form.Label>
          <Form.Control
            className="p-3"
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>
        {/* Submit Button */}
        <Button className="w-100" variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}
