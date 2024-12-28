import React from "react"


const GoogleMapEmbed: React.FC = () => {
  return (
    <section className="flex justify-center h-[500px] container mx-auto my-28">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.015434438391!2d-122.41941548467794!3d37.77492977975882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d1b0a623%3A0xd9e22ed6b9b7d5fa!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1693159313143!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  )
}

export default GoogleMapEmbed;