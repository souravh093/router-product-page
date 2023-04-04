import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();
    const productDetails = () => {
        navigate(`/product/${product.id}`);
    }
    return (
        <div className="card w-full border border-gray-300">
        <figure><img className='w-full h-96 object-cover' src={product.thumbnail} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-gray-800">{product.title}</h2>
                <p className='text-gray-700'>Price: ${product.price}</p>
                <div className='flex justify-between'>
                    <p className='text-gray-700'>Manufacturer: {product.brand}</p>
                    <p className='text-gray-700 flex justify-end'>Rating: {product.rating} </p>
                </div>
                <div className="card-actions">
                </div>
                <button className="btn btn-secondary" onClick={productDetails}>Details</button>
            </div>
        </div>
    );
};

export default Product;