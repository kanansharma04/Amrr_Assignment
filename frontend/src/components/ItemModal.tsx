import React from 'react';
import { X, Mail } from 'lucide-react';
import type { Item } from '../types/Item';
import ImageCarousel from './ImageCarousel';

interface ItemModalProps {
  item: Item;
  isOpen: boolean;
  onClose: () => void;
}

const ItemModal: React.FC<ItemModalProps> = ({ item, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleEnquire = () => {
    // In a real application, this would send an email
    alert(`Thank you for your response!\n\nEmail has been sent to your registered email.`);
  };

  const allImages = [item.coverImage, ...item.additionalImages];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />
        
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <ImageCarousel images={allImages} alt={item.name} />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Item Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Category:</span>
                      <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Type:</span>
                      <span className="ml-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {item.type}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Price:</span>
                      <span className="ml-2 text-lg font-bold text-gray-900">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Quantity Available:</span>
                      <span className="ml-2 text-gray-900 font-medium">
                        {item.quantity} units
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Added:</span>
                      <span className="ml-2 text-gray-900">
                        {item.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
                
                <div className="pt-4">
                  <button
                    onClick={handleEnquire}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;