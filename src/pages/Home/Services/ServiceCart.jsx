import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCart = ({ service }) => {
    const { title, price, img } = service
    return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-red-600'>Price : $ {price}</p>
                    <div className="card-actions justify-end">
                        <button className="text-red-500"><FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
    );
};

export default ServiceCart;