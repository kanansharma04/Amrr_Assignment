export interface Item {
  id: string;
  name: string;
  type: string;
  category: string;
  price: number;
  quantity: number;
  createdAt: Date;
  dateAdded: Date;
  coverImage: string;
  additionalImages: string[];
  description: string;
}

export type ItemType = 'Shirt' | 'Pant' | 'Shoes' | 'Sports Gear' | 'Accessories' | 'Other';

export const ITEM_TYPES: ItemType[] = [
  'Shirt',
  'Pant', 
  'Shoes',
  'Sports Gear',
  'Accessories',
  'Other'
];