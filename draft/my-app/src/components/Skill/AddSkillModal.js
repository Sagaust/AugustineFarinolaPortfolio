//The modal component is responsible for displaying the form component in a popup window
//The AddSkillModal component displays a modal that contains the AddSkillForm component. It passes down the onAddSkill and onClose functions as props to the AddSkillForm component to handle the submission of the form and closing of the modal. The interface with the parent component is defined through these props, which allow the parent component to update the skills array and show or hide the modal.

import React from 'react';
//import PropTypes from 'prop-types';
import AddSkillForm from './AddSkillForm';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddSkillModal = ({ show, onSubmit, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (newSkill) => {
    onSubmit(newSkill);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Skill</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddSkillForm onSubmit={handleSubmit} />
      </Modal.Body>
    </Modal>
  );
};

export default AddSkillModal;
