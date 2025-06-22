import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useItems } from '../context/ItemContext';
import type { Item } from '../types/Item';
import Footer from '../components/Footer';
import SuccessAlert from '../components/SuccessAlert';
import { Plus, Package, Shirt, Watch, Coffee, Zap, Heart, Eye, ShoppingCart } from 'lucide-react';

const AddItem: React.FC = () => {
  const { addItem } = useItems();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    category: '',
    price: '',
    quantity: '',
    description: '',
    coverImage: '',
    additionalImages: ['', '', ''] // Allow up to 3 additional images
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdditionalImageChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      additionalImages: prev.additionalImages.map((img, i) => i === index ? value : img)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newItem: Omit<Item, 'id' | 'createdAt' | 'dateAdded'> = {
      name: formData.name,
      type: formData.type,
      category: formData.category,
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity),
      description: formData.description,
      coverImage: formData.coverImage || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
      additionalImages: formData.additionalImages.filter(img => img.trim() !== '')
    };

    addItem(newItem);
    
    // Reset form
    setFormData({
      name: '',
      type: '',
      category: '',
      price: '',
      quantity: '',
      description: '',
      coverImage: '',
      additionalImages: ['', '', '']
    });

    // Show success alert
    setShowSuccess(true);
  };

  const handleViewItems = () => {
    setShowSuccess(false);
    navigate('/');
  };

  const handleCloseAlert = () => {
    setShowSuccess(false);
  };

  return (
    <div className="animate-fade-in min-h-screen enhanced-animated-bg relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="animated-blob" style={{ top: '15%', left: '10%' }}></div>
      <div className="animated-blob" style={{ top: '50%', right: '20%' }}></div>
      <div className="animated-blob" style={{ bottom: '25%', left: '30%' }}></div>

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
      <div className="floating-bg-item" style={{ top: '15%', left: '8%', color: '#10b981' }}>
        <Plus />
      </div>
      <div className="floating-bg-item large" style={{ top: '30%', right: '12%', color: '#3b82f6' }}>
        <Plus />
      </div>
      <div className="floating-bg-item small" style={{ top: '60%', left: '15%', color: '#ec4899' }}>
        <Plus />
      </div>
      <div className="floating-bg-item" style={{ top: '75%', right: '20%', color: '#f59e0b' }}>
        <Plus />
      </div>
      <div className="floating-bg-item" style={{ top: '5%', left: '70%', color: '#8b5cf6' }}>
        <Package />
      </div>
      <div className="floating-bg-item large" style={{ top: '40%', right: '45%', color: '#06b6d4' }}>
        <Shirt />
      </div>
      <div className="floating-bg-item small" style={{ top: '85%', left: '80%', color: '#ef4444' }}>
        <Coffee />
      </div>
      <div className="floating-bg-item" style={{ top: '25%', left: '40%', color: '#10b981' }}>
        <Watch />
      </div>
      <div className="floating-bg-item" style={{ top: '65%', right: '60%', color: '#ec4899' }}>
        <Heart />
      </div>
      <div className="floating-bg-item large" style={{ top: '10%', right: '25%', color: '#f59e0b' }}>
        <Zap />
      </div>
      <div className="floating-bg-item small" style={{ top: '45%', left: '5%', color: '#8b5cf6' }}>
        <Eye />
      </div>
      <div className="floating-bg-item" style={{ top: '80%', right: '5%', color: '#3b82f6' }}>
        <ShoppingCart />
      </div>

      <div className="relative z-10 py-12">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-2xl">
            <Plus className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gradient-flow mb-4 animate-gradient-x">
            Add New Item
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-500 max-w-2xl mx-auto">
            Transform your inventory with stunning new additions. Fill in the details below to showcase your items beautifully.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 space-y-8 border border-blue-100/50 hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            {/* Floating particles */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-bounce transition-all duration-700 delay-300"></div>
            <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-pulse transition-all duration-700 delay-500"></div>
            <div className="absolute bottom-20 left-20 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-all duration-700 delay-700"></div>
            
            {/* Form header */}
            <div className="text-center mb-8 relative z-10">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">Item Details</h2>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Provide comprehensive information about your new item</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="group/field">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3 transition-colors duration-200 group-focus-within/field:text-blue-600">
                  Item Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400 text-gray-900"
                  placeholder="Enter a captivating item name"
                />
              </div>

              <div className="group/field">
                <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-3 transition-colors duration-200 group-focus-within/field:text-blue-600">
                  Type *
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400 text-gray-900"
                  placeholder="e.g., Shirt, Shoes, Electronics"
                />
              </div>

              <div className="group/field">
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-3 transition-colors duration-200 group-focus-within/field:text-blue-600">
                  Category *
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400 text-gray-900"
                  placeholder="e.g., Clothing, Footwear, Accessories"
                />
              </div>

              <div className="group/field">
                <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-3 transition-colors duration-200 group-focus-within/field:text-blue-600">
                  Price *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400 text-gray-900"
                  placeholder="0.00"
                />
              </div>

              <div className="group/field">
                <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-3 transition-colors duration-200 group-focus-within/field:text-blue-600">
                  Quantity *
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400 text-gray-900"
                  placeholder="0"
                />
              </div>

              <div className="group/field">
                <label htmlFor="coverImage" className="block text-sm font-semibold text-gray-700 mb-3 transition-colors duration-200 group-focus-within/field:text-blue-600">
                  Cover Image URL
                </label>
                <input
                  type="url"
                  id="coverImage"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400 text-gray-900"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            {/* Additional Images Section */}
            <div className="group/field relative z-10">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Additional Images (Optional)
              </label>
              <div className="space-y-3">
                {formData.additionalImages.map((image, index) => (
                  <div key={index} className="group/field">
                    <input
                      type="url"
                      value={image}
                      onChange={(e) => handleAdditionalImageChange(index, e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400 text-gray-900"
                      placeholder={`Additional image ${index + 1} URL`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="group/field relative z-10">
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-3 transition-colors duration-200 group-focus-within/field:text-blue-600">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 placeholder-gray-400 text-gray-900 resize-none"
                placeholder="Describe your item in detail..."
              />
            </div>

            {/* Success Alert */}
            <SuccessAlert
              isVisible={showSuccess}
              onClose={handleCloseAlert}
              onViewItems={handleViewItems}
            />

            <div className="flex justify-center pt-4 relative z-10">
              <button
                type="submit"
                className="group/btn px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <div className="flex items-center space-x-2">
                  <Plus className="h-5 w-5 group-hover/btn:rotate-180 transition-transform duration-300" />
                  <span>Add Item</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AddItem;