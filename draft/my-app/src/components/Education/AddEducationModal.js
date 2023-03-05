import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddEducationForm from './AddEducationForm';

const AddEducationModal = ({ show, handleClose, handleAddEducation }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Education</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddEducationForm onSubmit={handleAddEducation} onClose={handleClose} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEducationModal;

//AddEducationModal.js also imports the AddEducationForm component which is displayed inside the modal and is used to collect the new education data. 
//The handleSaveEducation function in AddEducationModal.js calls the handleAddEducation function in Education.js to update the educationList state.
//In this example, the AddEducationModal component takes in three props: show, handleClose, and handleAddEducation. The show prop determines whether the modal is shown or not, handleClose is a function to handle closing the modal, and handleAddEducation is a function to handle adding new education information.

//The Modal component is imported from the react-bootstrap library and is used to display the modal. The Modal.Header and Modal.Title components are used to display the title of the modal. The Modal.Body component contains the AddEducationForm component, which is imported and used to display the form for adding new education information. The onSubmit prop is passed down to the AddEducationForm component as handleAddEducation, and the onClose prop is passed down as handleClose.

//Finally, the Modal.Footer component contains a Button component to close the modal when clicked.