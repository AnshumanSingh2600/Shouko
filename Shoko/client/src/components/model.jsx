import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/model.css'; 
const Modal = ({onClose}) => {

  return (
    <div className="modal">
     <form class="form-group">
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" placeholder="Enter Title"/>
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <textarea class="form-control" id="description" rows="3" placeholder="Enter Description"></textarea>
  </div>
  <button type="submit"onClick={onClose} class="btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default Modal;