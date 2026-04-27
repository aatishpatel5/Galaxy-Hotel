import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Check, Wifi, Tv, Wind, Coffee } from "lucide-react";

export function Rooms() {
  const rooms = [
    {
      name: "Deluxe King Room",
      description: "A spacious and elegantly designed room featuring a king-size bed, city views, and premium amenities for a luxurious stay.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["King Size Bed", "Air Conditioning", "Free High-Speed Wi-Fi", "Smart TV", "Mini Fridge", "En-suite Bathroom"],
      price: "1,500"
    },
    {
      name: "Premium Twin Room",
      description: "Perfect for colleagues or friends traveling together. Features two comfortable twin beds and serene ambiance.",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Two Twin Beds", "Air Conditioning", "Free High-Speed Wi-Fi", "Flat-Screen TV", "Work Desk", "Toiletries Provided"],
      price: "1,200"
    },
    {
      name: "Executive Suite",
      description: "Our finest offering. A massive suite with a separate living area, panoramic views, and exclusive services.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Luxury King Bed", "Separate Living Room", "Premium Air Conditioning", "Free Wi-Fi", "Complimentary Breakfast", "Bathtub"],
      price: "2,500"
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Our Accommodations</h1>
          <p className="text-lg text-gray-600">
            Experience the perfect blend of comfort and elegance. Each room is designed to provide you with a relaxing sanctuary during your stay in Banswara.
          </p>
        </motion.div>

        <div className="space-y-16">
          {rooms.map((room, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}  
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row"
            >
              <div className="lg:w-2/5 h-64 lg:h-auto relative">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-8 lg:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0 mb-4">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">{room.name}</h2>
                    <div className="text-left sm:text-right">
                      <span className="block text-sm text-gray-500 font-medium">Starting from</span>
                      <span className="text-xl sm:text-2xl font-bold text-brand-wood">₹{room.price}</span>
                      <span className="text-sm text-gray-500"> / night</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed bg-white/50 backdrop-blur-sm rounded-lg">
                    {room.description}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 mb-8">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <Check size={16} className="text-brand-teal" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 bg-gray-50/50 -mx-5 sm:-mx-8 -mb-5 sm:-mb-8 p-5 sm:p-8 rounded-b-2xl lg:rounded-br-2xl lg:rounded-bl-none">
                   <div className="flex space-x-4 text-gray-400">
                     <Wifi size={20} title="Free Wi-Fi" />
                     <Wind size={20} title="Air Conditioning" />
                     <Tv size={20} title="TV" />
                     <Coffee size={20} title="Tea/Coffee Maker" />
                   </div>
                  <Button size="lg" variant="brand" className="w-full sm:w-auto" asChild>
                    <a href="https://www.agoda.com/hotel-galaxy-h52507777/hotel/banswara-in.html" target="_blank" rel="noopener noreferrer">
                      Check Availability
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
