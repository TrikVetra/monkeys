import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CustomAlert(props: any) {

  //const [show, setShow] = useState(false);

  // if (props.active) setShow(true)
  // else setShow(false)

  //const handleClose = () => props.onClose();

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
          <Button variant="dark" onClick={() => {props.onClose()}}>{props.button}</Button>          
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default CustomAlert;