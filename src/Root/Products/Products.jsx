import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product/Product';

const Products = () => {
    const products = useLoaderData().products;
    return (
        <div className='grid grid-cols-3 gap-10 container mx-auto py-10'>
            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
        </div>
    );
};

export default Products;