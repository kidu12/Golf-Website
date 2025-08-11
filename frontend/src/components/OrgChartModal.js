// src/components/OrgChartModal.js
import React from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrgChartModal = ({ show, handleClose, imageSrc, language  }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
<Modal.Title>
  {language === 'en' ? 'Organizational Structure' : 'የድርጅታዊ መዋቅር'}
</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageSrc} alt="Organizational Chart" className="img-fluid" />
      </Modal.Body>
    </Modal>
  );
};

export default OrgChartModal;
