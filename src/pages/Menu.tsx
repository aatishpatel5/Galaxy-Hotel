import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../lib/utils";



const menuCategories = [
  { id: "starters", label: "Starters & Soup" },
  { id: "main", label: "Main Course" },
  { id: "breads", label: "Indian Breads" },
  { id: "rice", label: "Rice & Biryani" },
  { id: "desserts", label: "Desserts & Beverages" }
];

const menuItems = {
  starters: [
    { name: "Tomato Dhaniya Shorba", price: "120", desc: "A light, spiced tomato soup with fresh coriander.", img: "/foodlist/tomato_shorba.jpg" },
    { name: "Sweet Corn Veg Soup", price: "130", desc: "Classic thick soup with sweet corn and minced vegetables.", img: "/foodlist/sweet_corn_soup.jpg" },
    { name: "Hara Bhara Kebab", price: "220", desc: "Shallow-fried patties of spinach, peas, and potatoes.", img: "/foodlist/hara_bhara_kebab.jpg" },
    { name: "Paneer Tikka Dry", price: "280", desc: "Cubes of cottage cheese marinated in yogurt and Indian spices, cooked in a tandoor.", img: "/foodlist/paneer_tikka.jpg" },
    { name: "Crispy Chilli Baby Corn", price: "240", desc: "Batter-fried baby corn tossed in a spicy, tangy sauce.", img: "/foodlist/crispy_baby_corn.jpg" }
  ],
  main: [
    { name: "Paneer Butter Masala", price: "320", desc: "Cottage cheese cubes cooked in a rich, creamy tomato gravy.", img: "/foodlist/paneer_butter_masala.jpg" },
    { name: "Kadhai Paneer", price: "340", desc: "Paneer cooked with bell peppers, onions, and freshly ground spices.", img: "/foodlist/kadhai_paneer.jpg" },
    { name: "Mix Veg Jhalfrezi", price: "280", desc: "Juliennes of mixed vegetables cooked in a spicy, tangy dry masala.", img: "/foodlist/mix_veg_jhalfrezi.jpg" },
    { name: "Dal Makhani", price: "240", desc: "Black lentils simmered overnight with butter and cream.", img: "/foodlist/dal_makhani.jpg" },
    { name: "Malai Kofta", price: "350", desc: "Deep-fried cottage cheese and potato dumplings in a rich cashew gravy.", img: "/foodlist/malai_kofta.jpg" }
  ],
  breads: [
    { name: "Tandoori Roti", price: "30", desc: "Whole wheat bread baked in a clay oven.", img: "/foodlist/tandoori_roti.jpg" },
    { name: "Butter Naan", price: "60", desc: "Soft, fluffy leavened bread slathered with butter.", img: "/foodlist/butter_naan.jpg" },
    { name: "Garlic Naan", price: "80", desc: "Naan topped with minced garlic and coriander.", img: "/foodlist/garlic_naan.jpg" },
    { name: "Missi Roti", price: "50", desc: "Spiced gram flour and wheat bread.", img: "/foodlist/missi_roti.jpg" },
    { name: "Lachha Paratha", price: "70", desc: "Flaky, multi-layered whole wheat flatbread.", img: "/foodlist/lachha_paratha.jpg" }
  ],
  rice: [
    { name: "Steamed Basmati Rice", price: "140", desc: "Long grain aromatic basmati rice.", img: "/foodlist/steamed_rice.jpg" },
    { name: "Jeera Rice", price: "160", desc: "Basmati rice tossed with cumin seeds and fresh coriander.", img: "/foodlist/jeera_rice.jpg" },
    { name: "Veg Pulao", price: "220", desc: "Mildly spiced rice cooked with mixed vegetables.", img: "/foodlist/veg_pulao.jpg" },
    { name: "Subz Dum Biryani", price: "320", desc: "Aromatic basmati rice layered with spiced vegetables, slow-cooked.", img: "/foodlist/subz_dum_biryani.jpg" }
  ],
  desserts: [
    { name: "Gulab Jamun (2 pcs)", price: "90", desc: "Deep-fried milk dumplings soaked in sugar syrup.", img: "/foodlist/gulab_jamun.jpg" },
    { name: "Rasgulla (2 pcs)", price: "100", desc: "Indian syrupy dessert popular in the Indian subcontinent.", img: "/foodlist/rasgulla.jpg" },
    { name: "Fresh Lime Soda", price: "80", desc: "Refreshing lime drink, available sweet or salted.", img: "/foodlist/fresh_lime_soda.jpg" },
    { name: "Masala Chaach", price: "70", desc: "Spiced Indian buttermilk.", img: "/foodlist/masala_chaach.jpg" },
    { name: "Special Cold Coffee", price: "140", desc: "Blended coffee with milk and ice-cream.", img: "/foodlist/special_cold_coffee.jpg" }
  ]
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("main");

  return (
    <div className="pb-16 min-h-screen bg-white overflow-x-hidden">
      {/* Menu Header with Image */}
      <div className="relative h-80 pt-24 mb-16 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Vegetarian Food" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Restaurant Menu</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            A culinary journey of authentic 100% vegetarian flavors, prepared with the finest ingredients.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Selector */}
        <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 mb-12 pb-2 w-full px-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex-shrink-0",
                activeCategory === cat.id 
                  ? "bg-brand-wood text-white shadow-md transform scale-105" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <style>{`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Menu Items Grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-8"
        >
          {menuItems[activeCategory as keyof typeof menuItems].map((item, idx) => (
            <div key={idx} className="flex gap-4 border-b border-gray-100 pb-6 last:border-0 group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 shadow-sm">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 group-hover:text-brand-wood transition-colors leading-tight mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-2 flex justify-start">
                  <span className="text-sm sm:text-base font-bold text-brand-wood font-mono bg-brand-cream/50 px-3 py-1 rounded-md sm:bg-transparent sm:px-0 sm:py-0 sm:text-lg">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        
      </div>
    </div>
  );
}
