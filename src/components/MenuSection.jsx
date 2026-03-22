import React, { useState } from 'react';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Veg', 'Non-Veg', 'Tiffin', 'Drinks', 'Sweets', 'Stalls & Events', 'Meals'];

  const allMenuData = [
    // Existing Veg / Tiffin
    { id: 1, title: 'Classic South Indian', category: 'Tiffin', items: ['Idli', 'Pongal', 'Vada', 'Sambar', '3 types of Chutney', 'Filter Coffee'] },
    { id: 2, title: 'Premium Breakfast', category: 'Tiffin', items: ['Mini Idli Sambar', 'Ghee Roast', 'Poori Masala', 'Kesari', 'Filter Coffee'] },
    { id: 3, title: 'Healthy Start', category: 'Tiffin', items: ['Ragi Dosa', 'Pesarattu', 'Oats Idli', 'Fresh Fruit Juice', 'Green Tea'] },
    { id: 4, title: 'Traditional Meals', category: 'Veg', items: ['White Rice', 'Sambar', 'Rasam', 'Poriyal', 'Kootu', 'Appalam', 'Payasam'] },
    { id: 5, title: 'Executive Thali', category: 'Veg', items: ['Chapati/Poori', 'Paneer Butter Masala', 'Veg Pulao', 'Curd Rice', 'Sweet'] },
    { id: 6, title: 'Grand Feast', category: 'Veg', items: ['Welcome Drink', 'Soup', 'Starters (2 Veg)', 'Main Course', 'Desserts (2)'] },
    { id: 7, title: 'Light & Simple', category: 'Tiffin', items: ['Idiyappam with Stew', 'Dosa Varieties', 'Veg Kurma', 'Milk with Almonds'] },
    { id: 8, title: 'North Indian Special', category: 'Veg', items: ['Naan/Roti', 'Dal Makhani', 'Kadai Paneer', 'Jeera Rice', 'Gulab Jamun'] },
    { id: 9, title: 'Festive Dinner', category: 'Veg', items: ['Welcome Drink', 'Dosa Live Counter', 'Main Course', 'Ice Cream'] },

    // New Non-Veg
    { id: 10, title: 'Signature Biryanis', category: 'Non-Veg', items: ['Mutton Biryani', 'Chicken Biryani', 'Quail Mutton & Chicken Biryani', 'Kaadai Biryani (Quail)', 'Dindigul Mutton & Chicken Biryani', 'Mutton & Chicken Sukka Biryani', 'Aatukal Mutton Biryani'] },
    { id: 11, title: 'Chicken Specials', category: 'Non-Veg', items: ['Chicken Thalappakatti Mutton Kothu', 'Chicken Malai Kothu', 'Chicken Tikka', 'Chicken & Mutton Uppukari', 'Chicken Lollipop', 'Chicken 65', 'Chicken Milagu Varuval', 'Kozhi Kari & Kari Fry', 'Plain Chicken Gravy'] },
    { id: 12, title: 'Mutton & Egg Delights', category: 'Non-Veg', items: ['Mutton & Chicken Sukka', 'Mutton & Chicken Gravy', 'Mutton Pepper Masala', 'Mutton Chinthamani', 'Mutton Pallipalayam', 'Mutton Brain Roast', 'Egg Roast', 'Egg Gravy', 'Egg Masala'] },

    // Drinks
    { id: 13, title: 'Fresh Juices', category: 'Drinks', items: ['Lemon Juice', 'Grape Juice', 'Pineapple Juice', 'Mosambi Juice', 'Pomegranate Juice', 'Watermelon Juice', 'Mint Juice'] },
    { id: 14, title: 'Special Beverages', category: 'Drinks', items: ['Goli Soda', 'Falooda', 'Jigarthanda', 'Sugarcane Juice', 'Mango Milkshake', 'Lassi', 'Tender Coconut'] },
    { id: 15, title: 'Hot Beverages', category: 'Drinks', items: ['Tea', 'Herbal Tea', 'Coffee'] },

    // Sweets
    { id: 20, title: 'Signature Sweets', category: 'Sweets', items: ['Gulab Jamun', 'Kala Jamun', 'Dry Jamun', 'Makkan Peda', 'Rasgulla', 'Litchi Sandesh', 'Sukku Halwa', 'Gulab Jamun Kheer', 'Special Beer Paal Rabri', 'Palm Candy Rasgulla', 'Cashew Cake', 'Badam Cake', 'Bournvita Cake', 'Sandwich Sweet', 'Alka Kavi', 'Fig Roll', 'Andhra Jam Roll', 'Cashew Sweet Roll', 'Apple Cake', 'Rasmalai', 'Malai Rolls'] },
    { id: 21, title: 'Jalebi & Laddu', category: 'Sweets', items: ['Jalebi', 'Mini Jalebi', 'Patti Jalebi', 'Apple Jalebi', 'Paneer Jalebi', 'Eladi Jalebi', 'Laddu', 'Boondi Laddu', 'Moti Laddu'] },
    { id: 22, title: 'Badusha Varieties', category: 'Sweets', items: ['Badusha', 'Kedar Badusha', 'Medhu Badusha', 'Mini Medhu Badusha', 'Almond Medhu Badusha', 'Honey Medhu Badusha', 'Boost Medhu Badusha', 'Ghee Medhu Badusha'] },
    { id: 23, title: 'Halwa Varieties', category: 'Sweets', items: ['Badam Halwa', 'Pumpkin Halwa', 'Carrot Halwa', 'Wheat Halwa', 'Peshawar Fruit Halwa', 'Cotton Milk Halwa', 'Palm Candy Cashew Milk Halwa', 'Milk Dal Halwa', 'Akkara Vadisal', 'Kasi Halwa', 'Dry Fruit Halwa', 'Paan Halwa'] },
    { id: 24, title: 'Kesari & Special Options', category: 'Sweets', items: ['Ashoka Halwa', 'Rava Kesari', 'Milk Kesari', 'Kapparada Kesari', 'Pineapple Kesari', 'Thinai Laddu', 'Soma Puttu', 'Chocolate Soan Papdi', 'Badam Til'] },
    { id: 25, title: 'Premium Katlis & Cakes', category: 'Sweets', items: ['Badam Katli', 'Pista Katli', 'Khaja Katli', 'Badam Fig Cake', 'Khaja Fig Cake', 'Pista Roll', 'Paneer Jamun', 'Mini Jamun', 'Malai Apple', 'Sool Samosa', 'Bombay Jangiri'] },
    { id: 26, title: 'Exclusive Rolls & Paans', category: 'Sweets', items: ['Milk Jam Jam Roll', 'Dal Donut', 'Amirthakosa Ravukkal', 'Mas Poosa', 'Malai Khaja', 'Kavi Roll', 'Mysore Roll', 'Milk Roll', 'Butter Special Rasgulla', 'Pan Mazhai Roll', 'Avir Rasgulla', 'Badhuji', 'Wish Banthi', 'Beer Banthi', 'Saadi Thigda', 'Dal Ulundu Dosa', 'Kundakappa Ulundu Cake', 'Alka Paan', 'Kathir Paan', 'Fig Paan', 'Chocolate Paan', 'Coconut Paan', 'Palm Fruit Jam Kattai', 'Raja Brini'] },

    // Extensive Tiffin Menu
    { id: 27, title: 'Idli Specialties', category: 'Tiffin', items: ['Idli', 'Mini Idli', 'Mallipoo Idli', 'Rava Idli', 'Raju Idli', 'Chocolate Idli', 'Sweet Idli', 'Mini Sambar Idli', 'Mini Ice Cream Masala Idli', 'Rose Flower Idli', 'Chilli Idli', 'Ragi Idli', 'Thinai Idli', 'Varagu Idli', 'Wheat Idli', 'Aval Idli', 'Paneer Idli', 'Red Pasta Idli', 'Curry Leaf Pasta Idli', 'Chips Idli', 'Honey Idli', 'Cholam Idli', 'Kambu Idli', 'Cheddar Idli', 'Pasi Paruppu Idli'] },
    { id: 28, title: 'Dosa & Roast Varieties', category: 'Tiffin', items: ['Sada Dosa', 'Masala Dosa', 'Moongil Dosa', 'Veg Beeda Dosa', 'Penne Dosa', 'White Kara Dosa', 'Rava Roast', 'Tomato Roast', 'Onion Roast', 'Ghee Roast', 'Masala Roast', 'Mushroom Roast', 'Green Peas Roast', 'Cauliflower Roast', 'Kelvaragu Roast', 'Paneer Roast', 'Malli Roast', 'Rava Dosa', 'Wheat Dosa', 'Set Dosa'] },
    { id: 29, title: 'Non-Veg Dosa Specials', category: 'Tiffin', items: ['Kari Dosa', 'Chicken Kari Dosa', 'Mutton Kari Dosa', 'Chicken Keema Dosa', 'Mutton Keema Dosa', 'Mutton Masala Dosa', 'Paya Dosa', 'Tomato Paya Roast'] },
    { id: 30, title: 'Appam & Idiyappam', category: 'Tiffin', items: ['Idiyappam', 'Chettinad Appam', 'Idli Idiyappam', 'Ragi Idiyappam', 'Kambu Idiyappam', 'Makacholam Idiyappam', 'Malli Idiyappam', 'Gothumai Idiyappam', 'Chicken Gravy Idiyappam', 'Puttu Idiyappam'] },
    { id: 31, title: 'Paniyaram & Extras', category: 'Tiffin', items: ['Kuzhi Paniyaram', 'Thakkali Paniyaram', 'Coconut Milk', 'Veg Paya', 'Vada Curry', 'Veg Stew'] },
    { id: 32, title: 'Vadai Varieties', category: 'Tiffin', items: ['Ulundu Vadai', 'Muttakose Vadai', 'Sambar Vadai', 'Paruppu Vadai', 'Mini Ulundu Vadai', 'Thayir Vadai', 'Kara Vadai', 'Marathodu Vadai', 'Vazhaipoo Vadai', 'Pasi Paruppu Vadai', 'Thuvaram Paruppu Vadai'] },
    { id: 33, title: 'Snacks & Bites', category: 'Tiffin', items: ['Semiya Paneer Chips', 'Onion Samosa', 'Maida Bonda', 'Kara Bonda'] },

    // Stalls & Events
    { id: 34, title: 'Desserts & Treats', category: 'Stalls & Events', items: ['Ice Cream', 'Beeda', 'Fruit Salad', 'Popcorn', 'Cotton Candy', 'Chocolate Fountain', 'Ice Gola', 'Smoke Biscuits', "80's 90's Petty Shop", 'Bombay Mittai'] },
    { id: 35, title: 'Beverage Counters', category: 'Stalls & Events', items: ['Sugarcane Juice', 'Fresh Fruit Juice', 'Milkshake', 'Madurai Special Jigarthanda'] },
    { id: 36, title: 'Live Chat & Snacks', category: 'Stalls & Events', items: ['Chat Items', 'Potato Spring Roll'] },
    { id: 37, title: 'Entertainment Add-ons', category: 'Stalls & Events', items: ['Tattoo', 'Mehendi', 'Nail Art', 'Caricature Picture', 'Welcome Doll', 'Chenda Melam', 'Printing Balloon', 'Jumping Bed', 'Return Gifts'] },

    // Meals (Extensive Setup & Packages)
    { id: 38, title: 'Rice, Dal & Sambar', category: 'Meals', items: ['Ghee Paruppu', 'Murungakkai Sambar', 'Vendakkai Sambar', 'Kathirikkai Sambar', 'Sola Sola Sambar', 'Navagraha Sambar', 'Poosani Sambar', 'Vazhakkai Sambar', 'Parangikkai Sambar'] },
    { id: 39, title: 'Kuzhambu Varieties', category: 'Meals', items: ['Ennai Kathirikkai Kuzhambu', 'Sundai Vathal Kuzhambu', 'Pavakkai Vathal Kuzhambu', 'Poondu Kuzhambu', 'Vendakkai Puli Kuzhambu', 'Veg Meen Kuzhambu', 'Veg Mutton Kuzhambu', 'Karamani Kuzhambu', 'Thakkali Payaru Puli Kuzhambu', 'Paruppu Urundai Kuzhambu', 'Poosani Kai Puli Kuzhambu', 'Mor Kuzhambu', 'Kathiri Mor Kuzhambu', 'Vazhakkai Mor Kuzhambu', 'Murungai Mor Kuzhambu', 'Vazhaipoo Mor Kuzhambu'] },
    { id: 40, title: 'Rasam & Curd Items', category: 'Meals', items: ['Thakkali Rasam', 'Paruppu Rasam', 'Thengai Paal Rasam', 'Milagu Rasam', 'Mysore Rasam', 'Inji Rasam', 'Thulasi Rasam', 'Vasantha Rasam', 'Roja Poo Rasam', 'Annasi Pazham Rasam', 'Elumichai Rasam', 'Curd', 'Masala Mor', 'Thalicha Thayir'] },
    { id: 41, title: 'Poriyal (Dry Fry)', category: 'Meals', items: ['Kovakkai Poriyal', 'Kathirikkai Poriyal', 'Carrot Beans Poriyal', 'Urulai Kathiri Poriyal', 'Noodles Poriyal', 'Beans Poriyal', 'Avarai Poriyal', 'Karunai Kizhangu Poriyal'] },
    { id: 42, title: 'Chips, Fries & Starters', category: 'Meals', items: ['Urulai Chips', 'Podalangai Chips', 'Kovakkai Chips', 'Urulai Fries', 'Finger Fries', 'Nethiram Fries', 'Maravalli Fries', 'Karunai Kizhangu Cutlet', 'Urulai Cutlet', 'Veg Cutlet'] },
    { id: 43, title: 'Chilli & Manchurian', category: 'Meals', items: ['Urulai Chilli', 'Milagai Chilli', 'Baby Corn Chilli', 'Paneer Chilli', 'Kalan Chilli', 'Veg Manchurian', 'Gobi Manchurian', 'Paneer Masala', 'Baby Corn Masala'] },
    { id: 44, title: 'Payasam (Dessert)', category: 'Meals', items: ['Javvarisi Payasam', 'Badam Payasam', 'Gothumai Payasam', 'Paal Payasam', 'Pasi Paruppu Payasam'] },
    { id: 16, title: 'Menu Package 1', category: 'Meals', items: ['Sweet Beeda', 'Chicken Biryani', 'Chicken 65', 'Brinjal Pachadi', 'Onion Pachadi', 'Vazha Ilai (Banana Leaf)', 'Ice Cream', 'Service Boy', 'Water Bottle'] },
    { id: 17, title: 'Menu Package 2', category: 'Meals', items: ['Sweet Beeda', 'Welcome Juice', 'Mutton Biryani', 'Chicken 65', 'Brinjal Pachadi', 'Onion Pachadi', 'Rasam', 'Water Bottle', 'Ice Cream', 'Service Boy'] },
    { id: 18, title: 'Menu Package 3', category: 'Meals', items: ['Sweet Beeda', 'Welcome Juice', 'Naatu Kozhi Biryani', 'Chicken 65', 'Brinjal Pachadi', 'Onion Pachadi', 'Rasam', 'Water Bottle', 'Ice Cream', 'Service Boy'] },
    { id: 19, title: 'Menu Package 4', category: 'Meals', items: ['Pineapple Pudding / Sweet', 'Welcome Juice', 'Idiyappam / Chapathi', 'Chicken 65 or Chicken Masala', 'Mutton Biryani', 'Brinjal & Onion Pachadi', 'Ice Cream', 'Service Boy', 'Water Bottle'] },
  ];

  const filteredData = activeTab === 'All' 
    ? allMenuData 
    : allMenuData.filter(pkg => pkg.category === activeTab);

  return (
    <section id="menu" className="interactive-menu-section">
      <div className="container">
        <h2 className="section-title">Explore Our Menus</h2>
        
        <div className="menu-tabs-container">
          {categories.map(category => (
            <button 
              key={category}
              className={`menu-tab-btn ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-packages-grid animate-fade-in" key={activeTab}>
          {filteredData.map(pkg => (
            <div className="menu-package-card hover-card-effect" key={pkg.id}>
              <div className="package-card-header">
                <h3>{pkg.title}</h3>
                <div className="header-line"></div>
              </div>
              <ul className="package-items-list">
                {pkg.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
