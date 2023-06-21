import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CustomAlert(props: any) {

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'absolute' }}
    >
      <Modal.Dialog>
        <Modal.Header>
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