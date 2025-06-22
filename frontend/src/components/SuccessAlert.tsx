import React from 'react';
import { CheckCircle, X, Eye } from 'lucide-react';

interface SuccessAlertProps {
  isVisible: boolean;
  onClose: () => void;
  onViewItems: () => void;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ isVisible, onClose, onViewItems }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-full">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Success!</h3>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Animated particles */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-2 left-4 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
            <div className="absolute top-3 right-6 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-2 left-8 w-1 h-1 bg-white/50 rounded-full animate-bounce"></div>
            <div className="absolute bottom-3 right-4 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Item Added Successfully! 🎉
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Your item has been added to the collection and is now available for viewing.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onViewItems}
              className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group"
            >
              <Eye className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              <span>View Items</span>
            </button>
            
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Continue Adding
            </button>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
      </div>
    </div>
  );
};

export default SuccessAlert;