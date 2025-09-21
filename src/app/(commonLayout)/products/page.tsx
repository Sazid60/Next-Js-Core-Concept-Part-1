import ProductCard from '@/components/products/ProductCard';
import { IProduct } from '@/type';
import React from 'react';

const ProductsPage = async () => {
    const res = await fetch("http://localhost:5000/products", {
        next : {
            revalidate : 30 
        }
    })
    const products = await res.json();

    console.log(products)

    return (
        <div>
            <h1 className='text-center'>All Products!</h1>

            <div className='grid grid-cols-3 gap-4 w-[90%] mx-auto'>
                {
                    products.map((product : IProduct)=>(<ProductCard key={product?.id} product={product}/>))
                }
            </div>
        </div>
    );
};

export default ProductsPage;