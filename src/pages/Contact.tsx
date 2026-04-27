import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "../components/ui/button";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! In a production app, this would send an email. Please use the WhatsApp button or direct email for now.");
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have a question about a room reservation or our pure veg restaurant? We are here to help. Reach out to us via phone, email, or drop by our location.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
          
          {/* Contact Information & Form */}
          <div className="p-8 md:p-12">
           

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start space-y-3">
                <div className="bg-brand-teal-light p-3 rounded-full text-brand-wood">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hotel Location</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="https://maps.app.goo.gl/aiZC6RQwU5g3Z4ds8" target="_blank" rel="noopener noreferrer" className="hover:text-brand-wood transition-colors">
                      Udaipur Road, Banswara (Raj.)
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-3">
                <div className="bg-brand-teal-light p-3 rounded-full text-brand-wood">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600 mt-1"><a href="tel:+919414103012" className="hover:text-brand-wood transition-colors">+91 94141 03012</a></p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-3">
                <div className="bg-brand-teal-light p-3 rounded-full text-brand-wood">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600 mt-1"><a href="mailto:galaxyhotelbsw@gmail.com" className="hover:text-brand-wood transition-colors">galaxyhotelbsw@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
