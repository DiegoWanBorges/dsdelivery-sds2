import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepHeader from './StepsHeader';
import './style.css';
import { Product } from './types';

function Orders(){
    const[products,setProducts] = useState<Product[]>([]);

    useEffect(()=>{
        fetchProducts().then(response => setProducts(response.data))
        .catch(error => console.log(error))
    },[]);

    return (
        <div className="order-container">
            <StepHeader/>
            <ProductsList products={products} />
        </div>
    )
}
export default Orders