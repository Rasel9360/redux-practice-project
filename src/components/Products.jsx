import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import ProductCard from './ProductCard';

const Products = () => {
    const { products, isLoading, isError, error } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    let content;

    if (isLoading) {
        content = <p>Loading........</p>
    }
    if (!isLoading && isError) {
        content = <p>{error}</p>
    }
    if (!isLoading && !isError && products.length === 0) {
        content = <p>No products found</p>
    }
    if (!isLoading && !isError && products.length > 0) {
        content = products.map(product => <ProductCard key={product.id} product={product} />)
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 m-6'>
            {content}
        </div>
    );
};

export default Products;