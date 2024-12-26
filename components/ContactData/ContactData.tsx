import React from "react";
import { MapPin, Smartphone, Mail } from "lucide-react";

const ContactData: React.FC = () => {
  return (
    <div className="bg-brand-background-1 py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Address Section */}
          <div className="w-full md:w-1/3 text-left mb-6 md:mb-0">
            <div className="flex items-center space-x-4">
              <div className="bg-brand-orange text-white flex items-center justify-center h-16 w-16 rounded-full">
                <MapPin size={30} />
              </div>
              <p className="text-white">
                333 Middle Winchendon Rd, Rindge,
                <br /> NH 03461
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="w-full md:w-1/3 text-left mb-6 md:mb-0">
            <div className="flex items-center space-x-4">
              <div className="bg-brand-orange text-white flex items-center justify-center h-16 w-16 rounded-full">
                <Smartphone size={30} />
              </div>
              <ul className="flex items-center space-x-6 text-white">
                <li className="relative">
                  125-711-811
                  <span className="absolute right-[-10px] text-gray-500">|</span>
                </li>
                <li>125-668-886</li>
              </ul>
            </div>
          </div>

          {/* Email Section */}
          <div className="w-full md:w-1/3 text-left">
            <div className="flex items-center space-x-4">
              <div className="bg-brand-orange text-white flex items-center justify-center h-16 w-16 rounded-full">
                <Mail size={30} />
              </div>
              <p className="text-white">Support.gymcenter@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactData;
