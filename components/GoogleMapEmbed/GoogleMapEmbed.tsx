import React from "react";

const GoogleMapEmbed: React.FC = () => {
  return (
    <section className="flex justify-center h-[500px] container mx-auto my-28">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.579970956265!2d99.9952124!3d9.7168432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054fc2c99c28c2b%3A0xc106935e11903efb!2sPODIUM%20GYM%20CROSSFIT!5e0!3m2!1sen!2sth!4v1738031713920!5m2!1sen!2sth"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default GoogleMapEmbed;
