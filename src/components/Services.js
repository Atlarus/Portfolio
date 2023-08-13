import React from 'react';

const Services = () => {
  return (
    <section className="bg-white shadow-lg mx-20 my-10 p-10 rounded-lg" id="services">
      <h1 className="text-3xl font-semibold mb-6">Our Services</h1>
      <ul className="grid grid-cols-2 gap-4 text-lg text-center">
        <li className="border p-4 rounded-md shadow-md">Customized Digital Solutions</li>
        <li className="border p-4 rounded-md shadow-md">System Development</li>
        <li className="border p-4 rounded-md shadow-md">Process Automation</li>
        <li className="border p-4 rounded-md shadow-md">Website Development</li>
        <li className="border p-4 rounded-md shadow-md">Technology Consultation</li>
        <li className="border p-4 rounded-md shadow-md">Data Analytics</li>
        {/* Add more services here */}
      </ul>
    </section>
  );
};

export default Services;
