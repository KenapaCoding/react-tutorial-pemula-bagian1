import React from 'react';
import { useState } from 'react';

const ProductEdit = ({ product, onEditProduct, onCancel }) => {
  const initialState = {
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };
  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProduct(product.id, formData);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };
  return (
    <div className="product-edit">
      <div className="edit-title">Edit Product</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="edit-input-text"
            type="text"
            placeholder="Nama Product"
            name="nama"
            value={nama}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="edit-input-text"
            type="text"
            placeholder="Deskripsi Product"
            name="deskripsi"
            value={deskripsi}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            className="edit-input-text"
            type="text"
            placeholder="Image URL"
            name="imageURL"
            value={imageURL}
            onChange={handleChange}
          />
        </div>
        <input type="submit" className="edit-input-submit save" value="Save" />
        <button onClick={handleCancel} className="edit-input-submit cancel">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
