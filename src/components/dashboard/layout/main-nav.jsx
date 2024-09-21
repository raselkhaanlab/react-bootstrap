import {
  Navbar,
  Nav,
  Badge,
  Image,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
// import { Bell as BellIcon, Users as UsersIcon } from "react-icons/fa";

export function MainNav({ onToggle }) {
  return (
    <Navbar
      style={{ minHeight: 65 }}
      bg="light"
      expand="lg"
      sticky="top"
      className="border-bottom"
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center">
          <svg
            onClick={() => onToggle()}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="d-block d-lg-none "
            viewBox="0 0 16 16"
          >
            <path d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9z" />
          </svg>
        </Nav>
        <Nav className="d-flex align-items-center">
          <div className="d-flex flex-column">
            <p className="p-1 align-self-end rounded-circle d-flex align-items-center justify-content-center bg-primary text-white text-center my-auto">
              MR
            </p>
            <p className="text-muted small">Md rasel khan</p>
          </div>
        </Nav>
      </div>
    </Navbar>
  );
}
