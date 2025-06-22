import React, { useState } from 'react';
import { useItems } from '../context/ItemContext';
import type { Item } from '../types/Item';
import ItemModal from '../components/ItemModal';
import Footer from '../components/Footer';
import { Package, Trash2, Eye, Heart, ShoppingCart, Shirt, Watch, Coffee, Zap } from 'lucide-react';

const ViewItems: React.FC = () => {
  const { items, deleteItem } = useItems();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(id);
    }
  };

  if (items.length === 0) {
    return (
      <div className="animate-fade-in min-h-screen enhanced-animated-bg relative overflow-hidden">
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center py-16">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">No items found</h2>
            <p className="text-gray-500">Start by adding your first item!</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="animate-fade-in min-h-screen enhanced-animated-bg relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="animated-blob" style={{ top: '10%', left: '20%' }}></div>
      <div className="animated-blob" style={{ top: '60%', right: '10%' }}></div>
      <div className="animated-blob" style={{ bottom: '20%', left: '10%' }}></div>

      {/* Floating Background Particles */}
      <div className="background-particle"></div>
      <div className="background-particle"></div>
      <div className="background-particle"></div>
      <div className="background-particle"></div>
      <div className="background-particle"></div>
      <div className="background-particle"></div>
      <div className="background-particle"></div>
      <div className="background-particle"></div>
      <div className="background-particle"></div>

      {/* Enhanced Floating Background Elements */}
      <div className="floating-bg-item floating-physics" style={{ top: '10%', left: '5%', color: '#3b82f6' }}>
        <Shirt />
      </div>
      <div className="floating-bg-item" style={{ top: '25%', right: '10%', color: '#8b5cf6', animationDelay: '1s' }}>
        <Watch />
      </div>
      <div className="floating-bg-item large floating-physics" style={{ top: '45%', left: '15%', color: '#ec4899', animationDelay: '2s' }}>
        <Coffee />
      </div>
      <div className="floating-bg-item" style={{ top: '60%', right: '20%', color: '#06b6d4', animationDelay: '1.5s' }}>
        <ShoppingCart />
      </div>
      <div className="floating-bg-item small" style={{ top: '75%', left: '25%', color: '#f59e0b', animationDelay: '0.5s' }}>
        <Zap />
      </div>

      <div className="relative z-10 px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-flow mb-6 animate-gradient-x">
            Discover Items
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Browse through our carefully curated collection. Click on any item to explore its details.
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-3xl dark:shadow-xl dark:hover:shadow-2xl transition-all duration-700 cursor-pointer transform overflow-hidden card-glass-hover card-neon-glow card-morph-border card-magnetic-pull"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'slideUp 0.6s ease-out forwards',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Enhanced Image container with new effects */}
              <div className="relative overflow-hidden rounded-t-3xl h-64 group-hover:h-72 transition-all duration-700 image-parallax-zoom image-prismatic image-liquid-effect">
                <img
                  src={item.coverImage}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-800 ease-out filter brightness-100 contrast-100 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-120 group-hover:scale-110 group-hover:rotate-1"
                  style={{
                    transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.320, 1), filter 0.6s ease'
                  }}
                />
                
                {/* Particles container */}
                <div className="particles-container">
                  <div className="floating-particle"></div>
                  <div className="floating-particle"></div>
                  <div className="floating-particle"></div>
                  <div className="floating-particle"></div>
                </div>
                
                {/* Glass overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Smooth shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out"></div>
                </div>
                
                {/* Action buttons with smooth animations */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-6 group-hover:translate-x-0">
                  <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 hover:shadow-red-300/50">
                    <Heart className="h-4 w-4 text-red-500 hover:text-red-600 transition-colors duration-200" />
                  </button>
                  <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 hover:shadow-blue-300/50">
                    <Eye className="h-4 w-4 text-blue-500 hover:text-blue-600 transition-colors duration-200" />
                  </button>
                </div>

                {/* Category badge with glass effect */}
                <div className="absolute top-4 left-4 transform group-hover:scale-105 transition-transform duration-300">
                  <span className="px-3 py-1.5 bg-white/80 backdrop-blur-md text-gray-800 rounded-full text-xs font-semibold shadow-lg border border-white/30">
                    {item.category}
                  </span>
                </div>

                {/* Price overlay with smooth appearance */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1.5 rounded-full font-semibold text-sm shadow-lg">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Enhanced Content section with better hover effects */}
              <div className="p-6 group-hover:p-8 transition-all duration-500 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 group-hover:from-white group-hover:to-blue-50/30 dark:group-hover:from-gray-800 dark:group-hover:to-blue-900/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1 group-hover:text-2xl group-hover:mb-4 group-hover:animate-pulse">
                  {item.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4 group-hover:mb-6 transition-all duration-300">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium group-hover:scale-105 group-hover:shadow-lg group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800 dark:group-hover:to-purple-800 transition-all duration-300">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full group-hover:bg-gray-200 dark:group-hover:bg-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:scale-105 transition-all duration-300">
                    {item.createdAt.toLocaleDateString()}
                  </span>
                </div>

                {/* Enhanced Description with expand on hover */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed group-hover:text-base group-hover:mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-all duration-300">
                  {item.description}
                </p>

                {/* Enhanced Price and actions section with advanced hover */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 group-hover:border-gray-200 dark:group-hover:border-gray-600 transition-colors duration-300">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 group-hover:text-3xl group-hover:drop-shadow-lg">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-sm group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-all duration-300">
                      Stock: {item.quantity}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart functionality
                      }}
                      className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg hover:from-green-600 hover:to-emerald-600 hover:scale-125 transform transition-all duration-300 hover:rotate-12 hover:shadow-green-500/50 hover:shadow-2xl"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                    <button
                      onClick={(e) => handleDelete(e, item.id)}
                      className="p-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full shadow-lg hover:from-red-600 hover:to-pink-600 hover:scale-125 transform transition-all duration-300 hover:-rotate-12 hover:shadow-red-500/50 hover:shadow-2xl"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced glow effect with multiple layers and animations */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-pulse"></div>
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none blur-xl"></div>
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-400/5 via-violet-500/5 to-fuchsia-600/5 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none blur-2xl"></div>
              
              {/* Floating elements around the card */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-opacity duration-700 delay-300"></div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-opacity duration-700 delay-500"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-opacity duration-700 delay-700"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-opacity duration-700 delay-900"></div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <ItemModal
            item={selectedItem}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ViewItems;