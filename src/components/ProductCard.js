import React from 'react';
import { useState } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import ProductEdit from './ProductEdit';

const ProductCard = ({ product, onDeleteProduct, onEditProduct }) => {
  const [jumlahProduct, setJumlahProduct] = useState(0);
  const [showKeranjang, setShowKeranjang] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const tambahProduct = (operator) => {
    if (operator === '-') {
      if (jumlahProduct === 1) {
        setShowKeranjang(true);
        setJumlahProduct((jumlahProduct) => jumlahProduct - 1);
        return;
      }
      setJumlahProduct((jumlahProduct) => jumlahProduct - 1);
    } else {
      setJumlahProduct((jumlahProduct) => jumlahProduct + 1);
    }
  };
  const handleKeranjang = () => {
    setJumlahProduct((jumlahProduct) => jumlahProduct + 1);
    setShowKeranjang(!showKeranjang);
  };
  const handleSubmitEdit = (id, data) => {
    setShowEdit(false);
    onEditProduct(id, data);
  };
  const handleCancelEdit = () => {
    setShowEdit(false);
  };

  return (
    <div className="card">
      {showEdit ? (
        <ProductEdit
          product={product}
          onEditProduct={handleSubmitEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <div className="edit-delete">
            <AiTwotoneEdit
              onClick={() => setShowEdit(!showEdit)}
              className="icon-edit"
            />
            <MdDeleteForever
              onClick={() => onDeleteProduct(product.id)}
              className="icon-delete"
            />
          </div>
          <img
            src={product.imageURL}
            alt="Avatar"
            style={{
              width: '100%',
              height: '200px',
              borderRadius: ' 10px 10px 0px 0px',
            }}
          />
          <div className="container">
            <h4>
              <b>{product.nama}</b>
            </h4>
            <p>{product.deskripsi}</p>
          </div>
          <div
            className={`card-keranjang ${
              showKeranjang ? 'show-keranjang' : 'jumlah-product'
            }`}
          >
            {showKeranjang ? (
              <div className="keranjang" onClick={handleKeranjang}>
                + Keranjang
              </div>
            ) : (
              <>
                <button className="button" onClick={() => tambahProduct('-')}>
                  -
                </button>
                <div>{jumlahProduct}</div>
                <button className="button" onClick={() => tambahProduct('+')}>
                  +
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
