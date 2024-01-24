import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchPutExpAction } from "../redux/actions/fetchEditExperience";
import { Form } from "react-bootstrap";

function MyNewExperience({ expData, show, handleClose }) {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.user.profile);

  const [formData, setFormData] = useState({
    role: expData.role || "",
    company: expData.company || "",
    startDate: "",
    endDate: "",
    description: expData.description || "",
    area: expData.area || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    // Perform your PUT request with the updated data
    const updatedExperience = {
      role: formData.role,
      company: formData.company,
      startDate: formData.startDate,
      endDate: formData.endDate,
      description: formData.description,
      area: formData.area,
    };

    // Dispatch an action to update the profile in Redux state
    dispatch(fetchPutExpAction(myProfile._id, expData._id, updatedExperience));

    // Close the modal
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Experience Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" name="role" value={formData.role} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" name="company" value={formData.company} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formArea">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" name="area" value={formData.area} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="Date" name="startDate" value={formData.startDate} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="Date" name="endDate" value={formData.endDate} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyNewExperience;
