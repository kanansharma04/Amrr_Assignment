import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Item } from '../types/Item';

interface ItemContextType {
  items: Item[];
  addItem: (item: Omit<Item, 'id' | 'createdAt' | 'dateAdded'>) => void;
  deleteItem: (id: string) => void;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

interface ItemProviderProps {
  children: ReactNode;
}

export const ItemProvider: React.FC<ItemProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([
    {
      id: '1',
      name: 'Classic Blue T-Shirt',
      category: 'Clothing',
      type: 'Shirt',
      price: 29.99,
      quantity: 10,
      coverImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop',
      additionalImages: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=500&h=400&fit=crop'
      ],
      dateAdded: new Date(),
      createdAt: new Date(),
      description: 'Comfortable cotton t-shirt perfect for everyday wear.'
    },
    {
      id: '2',
      name: 'Denim Jeans',
      category: 'Clothing',
      type: 'Pant',
      price: 79.99,
      quantity: 15,
      coverImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=400&fit=crop',
      additionalImages: [
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506629905383-0b3a11c8ee21?w=500&h=400&fit=crop'
      ],
      dateAdded: new Date(),
      createdAt: new Date(),
      description: 'Premium quality denim jeans with a perfect fit.'
    },
    {
      id: '3',
      name: 'Running Sneakers',
      category: 'Footwear',
      type: 'Shoes',
      price: 129.99,
      quantity: 8,
      coverImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop',
      additionalImages: [
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=400&fit=crop'
      ],
      dateAdded: new Date(),
      createdAt: new Date(),
      description: 'Lightweight running shoes with excellent cushioning and support.'
    },
    {
      id: '4',
      name: 'Basketball',
      category: 'Sports',
      type: 'Sports Gear',
      price: 24.99,
      quantity: 20,
      coverImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=400&fit=crop',
      additionalImages: [
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop'
      ],
      dateAdded: new Date(),
      createdAt: new Date(),
      description: 'Professional grade basketball for indoor and outdoor play.'
    },
    {
      id: '5',
      name: 'Leather Watch',
      category: 'Accessories',
      type: 'Accessories',
      price: 199.99,
      quantity: 5,
      coverImage: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=400&fit=crop',
      additionalImages: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1508057198314-706b48caaa16?w=500&h=400&fit=crop'
      ],
      dateAdded: new Date(),
      createdAt: new Date(),
      description: 'Elegant leather watch with Swiss movement and water resistance.'
    },
    {
      id: '6',
      name: 'Winter Jacket',
      category: 'Clothing',
      type: 'Outerwear',
      price: 159.99,
      quantity: 12,
      coverImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop',
      additionalImages: [
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=500&h=400&fit=crop'
      ],
      dateAdded: new Date(),
      createdAt: new Date(),
      description: 'Warm and stylish winter jacket with down insulation.'
    },
    {
      id: '7',
      name: 'Wireless Headphones',
      category: 'Electronics',
      type: 'Audio',
      price: 89.99,
      quantity: 25,
      coverImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop',
      additionalImages: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=400&fit=crop'
      ],
      dateAdded: new Date(),
      createdAt: new Date(),
      description: 'High-quality wireless headphones with noise cancellation and premium sound.'
    },
    {
      id: '8',
      name: 'Coffee Mug',
      category: 'Kitchen',
      type: 'Drinkware',
      price: 14.99,
      quantity: 50,
      coverImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop',
      additionalImages: [
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&h=400&fit=crop'
      ],
      dateAdded: new Date(),
      createdAt: new Date(),
      description: 'Ceramic coffee mug with ergonomic handle, perfect for your morning brew.'
    },
    {
      id: '9',
      name: 'Backpack',
      category: 'Bags',
      type: 'Travel',
      price: 65.99,
      quantity: 18,
      coverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=400&fit=crop',
      additionalImages: [
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500&h=400&fit=crop'
      ],
      dateAdded: new Date(),
      createdAt: new Date(),
      description: 'Durable travel backpack with multiple compartments and water-resistant material.'
    },
    {
      id: '10',
      name: 'Sunglasses',
      category: 'Accessories',
      type: 'Eyewear',
      price: 45.99,
      quantity: 30,
      coverImage: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=400&fit=crop',
      additionalImages: [
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=400&fit=crop',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=400&fit=crop'
      ],
      dateAdded: new Date(),
      createdAt: new Date(),
      description: 'Stylish sunglasses with UV protection and polarized lenses.'
    }
  ]);

  const addItem = (item: Omit<Item, 'id' | 'createdAt' | 'dateAdded'>) => {
    setItems(prevItems => [
      ...prevItems,
      {
        ...item,
        id: Date.now().toString(),
        createdAt: new Date(),
        dateAdded: new Date()
      }
    ]);
  };

  const deleteItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const value = {
    items,
    addItem,
    deleteItem
  };

  return (
    <ItemContext.Provider value={value}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error('useItems must be used within an ItemProvider');
  }
  return context;
};