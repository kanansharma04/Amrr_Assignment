
# 🚀 AMRR Item Management System

A modern, responsive item management application built with React, TypeScript, and Tailwind CSS. Features a beautiful UI with dark/light theme support, animated backgrounds, and smooth transitions.

![Item Management System](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop)

## ✨ Features

### 🎨 **Beautiful UI/UX**
- **Modern Design** with glassmorphism effects
- **Dark/Light Theme** toggle with smooth transitions
- **Animated Backgrounds** with floating particles and gradient shifts
- **Responsive Design** that works on all devices
- **Advanced Hover Effects** with 3D transformations

### 📦 **Item Management**
- **Add New Items** with comprehensive form validation
- **View Items** in an elegant card-based layout
- **Delete Items** with confirmation dialogs
- **Item Details Modal** with image carousel
- **Success Alerts** with navigation options

### �️ **Image Features**
- **Image Carousel** with multiple image support
- **Cover Image** and additional images for each item
- **Image Zoom Effects** on hover
- **Optimized Image Loading** with Unsplash integration

### 🎭 **Advanced Animations**
- **Floating Background Elements** with random animations
- **Particle Systems** for enhanced visual appeal
- **Smooth Page Transitions** between routes
- **Card Hover Effects** with multiple animation layers
- **Loading Animations** and micro-interactions

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom animations
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Build Tool:** Vite
- **State Management:** React Context API

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ImageCarousel.tsx
│   ├── ItemModal.tsx
│   ├── SuccessAlert.tsx
│   └── Footer.tsx
├── context/            # React Context providers
│   ├── ItemContext.tsx
│   └── ThemeContext.tsx
├── pages/              # Main application pages
│   ├── ViewItems.tsx
│   └── AddItem.tsx
├── types/              # TypeScript type definitions
│   └── Item.ts
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and animations
```

## �🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amrr-assignment/project/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deployment

#### Vercel Deployment
This project is optimized for Vercel deployment:

1. **Connect Repository** to Vercel
2. **Build Configuration** is handled automatically via `vercel.json`
3. **Dependencies** are installed with `--legacy-peer-deps` flag
4. **Build Command**: `npm run build:vercel`
5. **Output Directory**: `dist`

#### Deployment Troubleshooting

**Common Issues:**
- **ESLint Dependency Conflicts**: Fixed by using `--legacy-peer-deps`
- **TypeScript Errors**: Remove unused React imports for React 17+
- **Build Timeouts**: Optimized dependencies and build process

**Environment Variables** (if needed):
```bash
VITE_API_URL=your_api_url
```

#### Manual Deployment
```bash
# Clean install dependencies
npm run install:clean

# Build the project
npm run build

# The built files will be in the 'dist' directory
# Upload the contents of 'dist' to your hosting provider
```

## 🔧 Troubleshooting

### Common Issues

#### ESLint Dependency Conflicts
If you encounter ESLint dependency conflicts during installation:

```bash
# Use legacy peer deps (recommended)
npm install --legacy-peer-deps

# Or clean install
npm run install:clean

# For development
npm run dev
```

#### Vercel Build Errors
For Vercel deployment issues:

1. **Dependency Conflicts**: 
   - Ensure `.npmrc` file exists with `legacy-peer-deps=true`
   - Use the build script: `npm run build:vercel`

2. **Build Settings in Vercel Dashboard**:
   - Build Command: `npm run build:vercel`
   - Output Directory: `dist`
   - Install Command: `npm install --legacy-peer-deps`

3. **Node.js Version**: 
   - Ensure Node.js v18+ is being used
   - Set in Vercel environment variables if needed

#### Type Errors
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Fix ESLint issues
npm run lint

# Clean build
rm -rf dist && npm run build
```

#### Local Development Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Reset Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 🎯 Key Components

### 🏠 **Navigation**
- **Responsive Navbar** with theme toggle
- **Smooth Navigation** between pages
- **Active State Indicators** for current page

### 📝 **Add Item Form**
- **Comprehensive Form Validation**
- **Multiple Image Upload Support**
- **Real-time Form Feedback**
- **Success Modal** with navigation options

### 👀 **View Items**
- **Grid Layout** with responsive cards
- **Advanced Hover Effects**
- **Quick Actions** (View, Delete, Add to Cart)
- **Item Modal** with detailed information

### 🖼️ **Image Carousel**
- **Smooth Image Transitions**
- **Thumbnail Navigation**
- **Zoom and Pan Capabilities**
- **Touch/Swipe Support**

## 🎨 Styling Features

### 🌈 **Color Schemes**
- **Light Theme:** Clean whites and soft grays
- **Dark Theme:** Rich dark colors with blue accents
- **Gradient Backgrounds** for visual depth
- **Consistent Color Palette** throughout the app

### ✨ **Animations**
- **60+ Custom CSS Animations**
- **Floating Background Elements**
- **Particle Effects**
- **3D Card Transformations**
- **Smooth State Transitions**

### 📱 **Responsive Design**
- **Mobile-First Approach**
- **Flexible Grid Layouts**
- **Touch-Friendly Interactions**
- **Optimized for All Screen Sizes**

## 🔧 Configuration

### Theme Customization
The theme system supports easy customization through the `ThemeContext`:

```typescript
// Light/Dark theme toggle
const { theme, toggleTheme } = useTheme();
```

### Adding New Items
Items follow this TypeScript interface:

```typescript
interface Item {
  id: string;
  name: string;
  category: string;
  type: string;
  price: number;
  quantity: number;
  coverImage: string;
  additionalImages: string[];
  dateAdded: Date;
  createdAt: Date;
  description: string;
}
```

## 🎪 Animation Classes

The project includes 50+ custom animation classes:
- `.card-hover-zoom` - 3D card hover effects
- `.floating-bg-item` - Background floating elements
- `.text-gradient-flow` - Animated text gradients
- `.enhanced-animated-bg` - Dynamic background gradients
- `.card-magnetic` - Magnetic hover interactions

## 🌟 Performance Features

- **Optimized Bundle Size** with Vite
- **Lazy Loading** for images
- **Efficient Re-renders** with React optimization
- **Smooth 60fps Animations**
- **Responsive Image Loading**

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set
- **Unsplash** for the high-quality images

---

