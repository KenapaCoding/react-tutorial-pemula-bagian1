import React from 'react';
import { useState } from 'react';

const ProductCard = ({ product, onDeleteProduct, onEditProduct }) => {
  const [jumlahProduct, setJumlahProduct] = useState(0);
  const [showKeranjang, setShowKeranjang] = useState(true);
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

  return (
    <div className="card">
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
    </div>
  );
};

export default ProductCard;
