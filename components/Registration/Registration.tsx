import React from 'react';

const Registration = () => {
  return (
    <section className="bg-cover bg-center" style={{ backgroundImage: "url('img/banner-bg.jpg')" }}>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="bs-text">
              <h2 className="text-4xl font-bold text-white uppercase">registration now to get more deals</h2>
              <div className="text-brand-gray-light font-bold uppercase mt-4">Where health, beauty and fitness meet.</div>
              <a href="#" className="inline-block text-sm py-4 px-8 text-white bg-brand-orange uppercase font-bold mt-6 transition duration-300 hover:bg-brand-orange">Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;