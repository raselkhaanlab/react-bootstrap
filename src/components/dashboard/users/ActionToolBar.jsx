import { Button, ButtonGroup } from "react-bootstrap";
import { FaLock, FaTrash, FaUnlock } from "react-icons/fa";

// Action toolbar component
const ActionToolbar = ({ onBlock, onUnblock, onDelete, disabled }) => (
    <div className="d-flex justify-content-end align-items-center mb-3 mt-3 pe-2">
      {/* Action buttons */}
      <ButtonGroup>
        <Button variant="outline-danger" onClick={onBlock} disabled={disabled}>
          <FaLock /> Block
        </Button>
        <Button variant="outline-success" onClick={onUnblock} disabled={disabled}>
          <FaUnlock />
        </Button>
        <Button variant="outline-danger" onClick={onDelete} disabled={disabled}>
          <FaTrash />
        </Button>
      </ButtonGroup>
    </div>
  );

export default ActionToolbar;