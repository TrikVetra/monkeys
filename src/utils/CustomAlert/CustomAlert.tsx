import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CustomAlert(props: any) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'absolute' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {props.body}          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="dark" onClick={(handleClose)}>{props.button}</Button>          
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default CustomAlert;