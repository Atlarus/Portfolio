import React from 'react';

const Products = () => {
  return (
    <section className="bg-white shadow-lg mx-20 my-10 flex flex-col items-center p-10 rounded-lg" id="products">
      <h1 className="text-2xl font-semibold mb-4">Our Products</h1>
      <ul className="text-center">
        <li>Online Ordering System</li>
        <li>AR Marker Tracking</li>
        <li>Digital Portfolios</li>
        <li>Reservation System</li>
        <li>Enterprise Resource Planning</li>
        {/* Add more Products here */}
      </ul>
    </section>
  );
};

export default Products;