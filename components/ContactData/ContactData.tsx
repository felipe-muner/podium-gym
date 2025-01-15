import React from "react";
import { MapPin, Smartphone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactDataProps {
  className?: string;
}

const ContactData: React.FC<ContactDataProps> = ({ className }) => {
  const isVertical = className?.includes("flex-col");

  return (
    <div className="bg-brand-background-1 w-full">
      <div className={
        cn(
          "container mx-auto",
          isVertical ? "px-0 py-4" : "px-4 py-8"
        )
      }>
        <div
          className={cn(
            "flex flex-wrap justify-between font-mulish text-sm",
            isVertical ? "flex-col gap-6 text-brand-gray-light" : "flex-row text-white",
            className,
          )}
        >
          {/* Address Section */}
          <div
            className={cn(
              "text-left md:mb-0",
              isVertical ? "w-full" : "w-full md:w-1/3 mb-6"
            )}
          >
            <div className="flex items-center space-x-5">
              <div className="bg-brand-orange text-white flex items-center justify-center h-16 w-16 rounded-full shrink-0">
                <MapPin size={30} className="h-8 w-8" />
              </div>
              <p className="pr-8">
                203/13 MOO 1, KO PHA-NGAN, KOH PHANGAN DISTRICT, SURAT THANI 84280
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div
            className={cn(
              "text-left md:mb-0",
              isVertical ? "w-full" : "w-full md:w-1/3 mb-6"
            )}
          >
            <div className="flex items-center space-x-5">
              <div className="bg-brand-orange text-white flex items-center justify-center h-16 w-16 rounded-full shrink-0">
                <Smartphone size={30} className="h-8 w-8" />
              </div>
              <ul className="flex flex-wrap items-center space-x-4">
                <li className="relative">+66 828454756</li>
              </ul>
            </div>
          </div>

          {/* Email Section */}
          <div
            className={cn(
              "text-left",
              isVertical ? "w-full" : "w-full md:w-1/3"
            )}
          >
            <div className="flex items-center space-x-5">
              <div className="bg-brand-orange text-white flex items-center justify-center h-16 w-16 rounded-full shrink-0">
                <Mail size={30} className="h-8 w-8" />
              </div>
              <p>info@podiumgym.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactData;
