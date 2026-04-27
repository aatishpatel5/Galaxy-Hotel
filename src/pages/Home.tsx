import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Star, CheckCircle, Wifi, Coffee, Car } from "lucide-react";

const ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
          //https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80
export function Home() { 
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <picture className="w-full h-full flex justify-center items-center">
            <source media="(max-width: 768px)" srcSet="/smallherosection.webp" />
            <source media="(max-width: 1024px)" srcSet="/herosection_medium1.webp" />
            <img
              src="/herosection_large.webp"
              alt="Hotel Galaxy Banswara Exterior"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg md:hidden"
          >
            Hotel Galaxy 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow md:hidden"
          >
            Premium luxury, pure veg dining, and absolute peace.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="w-full sm:w-auto bg-white text-black hover:bg-gray-400 shadow-lg transition-all duration-300 font-bold px-8">
              <a href="https://www.agoda.com/hotel-galaxy-h52507777/hotel/banswara-in.html" target="_blank" rel="noopener noreferrer">
                Book Your Stay
              </a>
            </Button>
            <Button size="lg" variant="brand" asChild className="w-full sm:w-auto bg-brand-wood hover:bg-brand-wood-hover text-white shadow-lg transition-all duration-300 font-semibold px-8">
              <Link to="/menu">Explore Our Menu</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Rooms Showcase Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={ANIMATION_VARIANTS}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="text-xs md:text-sm font-bold text-brand-wood tracking-widest uppercase">Accommodations</h2>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                A perfect blend of comfort and luxury.
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Nestled in the heart of Banswara, Hotel Galaxy offers an unparalleled stay experience. Our premium rooms are beautifully appointed to ensure your utmost comfort and relaxation.
              </p>
              <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                {[
                  "Premium AC & Non-AC Rooms",
                  "Free High-Speed Wi-Fi",
                  "24/7 Room Service",
                  "Secure Parking Facilities"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-700 text-sm md:text-base font-medium">
                    <CheckCircle className="text-brand-teal flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 md:pt-6 flex items-center gap-6">
                <Button variant="brand" asChild  className="inline-flex h-9 items-center justify-center rounded-md bg-brand-wood px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-brand-wood-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-wood disabled:pointer-events-none disabled:opacity-50">
                  <a href="https://www.agoda.com/hotel-galaxy-h52507777/hotel/banswara-in.html" target="_blank" rel="noopener noreferrer">Book Now</a>
                </Button>
                <Link to="/rooms" className="text-brand-wood  hover:text- font-semibold transition-colors underline-offset-4 hover:underline ">
                  View Details
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={ANIMATION_VARIANTS}
              className="relative max-w-xs sm:max-w-md mx-auto lg:max-w-none mt-8 lg:mt-0"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative z-10">
                <img
                   src="/room.webp" 
                   alt="Luxurious Room"
                   className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-cream rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooftop Hall Section */}
      <section className="py-12 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={ANIMATION_VARIANTS}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="text-xs md:text-sm font-bold text-brand-wood tracking-widest uppercase">Events & Celebrations</h2>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                Our Exclusive Rooftop Hall
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Host your special occasions, corporate meetings, or intimate parties at our scenic Rooftop Hall. Offering stunning views of the city, premium catering, and a vibrant atmosphere for any event.
              </p>
              <ul className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                {[
                   "Spacious Open-Air Setup",
                   "Customizable 100% Veg Catering",
                   "Elegant Lighting & Ambience",
                   "Ideal for Birthdays & Meetings"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-700 text-sm md:text-base font-medium">
                    <CheckCircle className="text-brand-teal flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 md:pt-6 flex gap-4">
                <Button variant="brand" asChild className="text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                  <Link to="/contact">Enquire Now</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={ANIMATION_VARIANTS}
              className="relative max-w-xs sm:max-w-md mx-auto lg:max-w-none mt-8 lg:mt-0"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative z-10">
                <img
                   src="/rooftop.webp"
                   alt="Rooftop Hall & Events"
                   className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-cream rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dining Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-sm font-bold text-brand-wood tracking-widest uppercase mb-2">Dining</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Culinary Excellence</h3>
            <p className="text-gray-600">Savor authentic flavors crafted with the freshest ingredients. Our culinary experts bring you the best of traditional and contemporary 100% vegetarian cuisine for everyone to enjoy.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Paneer Butter Masala", price: "₹320", img: "/foodlist/paneer_butter_masala.jpg" },
              { name: "Special Veg Thali", price: "₹450", img: "/foodlist/special_veg_thali.jpg" },
              { name: "Crispy Dosa", price: "₹180", img: "/foodlist/crispy_dosa.jpg" }
            ].map((dish, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-50 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={dish.img} alt={dish.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-gray-900 font-semibold shadow-sm">
                    {dish.price}
                  </div>
                </div> 
                <div className="p-6">
                  <h4 className="text-xl font-serif font-bold text-gray-900">{dish.name}</h4>
                  <p className="text-gray-500 mt-2 text-sm italic">Freshly prepared with love.</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-2">Reviews</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold">What Our Guests Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Absolutely loved our stay. The room was immaculate and the veg food was honestly the best we had in Banswara.", author: "Rahul P.", rating: 5 },
              { text: "Great ambiance and very premium feel. The staff is courteous. Highly recommend their Paneer delicacies.", author: "Sneha S.", rating: 5 },
              { text: "A hidden gem in Banswara! The location is great, easy to find via Google Maps, and the amenities are top-notch.", author: "Amit K.", rating: 4 }
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800 p-8 rounded-lg border border-gray-700"
              >
                <div className="flex space-x-1 mb-4 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  {[...Array(5 - review.rating)].map((_, i) => <Star key={i} size={16} className="text-gray-600" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{review.text}"</p>
                <p className="font-semibold text-white">- {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
