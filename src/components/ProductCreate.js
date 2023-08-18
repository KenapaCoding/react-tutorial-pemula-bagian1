import React from 'react';
import { useState } from 'react';

const ProductCreate = ({ onCreateProduct }) => {
  const initialState = {
    nama: '',
    deskripsi: '',
    imageURL: '',
  };
  const [formAdd, setFormAdd] = useState(initialState);
  const { nama, deskripsi, imageURL } = formAdd;
  const [showForm, setShowForm] = useState(false);
  const handleChange = (e) => {
    setFormAdd({ ...formAdd, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formAdd);
    setFormAdd(initialState);
  };
  const handleToggleClick = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="product-create">
      <div className="toggle-add">
        <button
          onClick={handleToggleClick}
          className="edit-input-submit add-toggle"
        >
          {showForm ? 'Close Form' : 'Add Product'}
        </button>
      </div>
      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-add-title">Add Product</div>
          <div className="form-group">
            <input
              className="add-input-text"
              type="text"
              placeholder="Nama Product"
              name="nama"
              value={nama}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="add-input-text"
              type="text"
              placeholder="Deskripsi Product"
              name="deskripsi"
              value={deskripsi}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="add-input-text"
              type="text"
              placeholder="Image URL"
              name="imageURL"
              value={imageURL}
              onChange={handleChange}
            />
          </div>
          <input type="submit" className="edit-input-submit add" />
        </form>
      )}
    </div>
  );
};

export default ProductCreate;
