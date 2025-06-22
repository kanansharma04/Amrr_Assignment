import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ItemProvider } from './context/ItemContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ViewItems from './pages/ViewItems';
import AddItem from './pages/AddItem';
import { Plus, Package, Sun, Moon, Sparkles } from 'lucide-react';
import './index.css';

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white/98 dark:bg-gray-800/95 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-gray-200/80 dark:border-gray-600/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center group">
            <div className="relative">
              <Package className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              AMRR Assignment
            </h1>
            <Sparkles className="h-4 w-4 text-yellow-500 dark:text-yellow-400 ml-2 animate-pulse" />
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="group flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/70 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
              >
                <Package className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">View Items</span>
              </Link>
              <Link
                to="/add"
                className="group flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25"
              >
                <Plus className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                <span className="font-medium">Add Item</span>
              </Link>
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="group relative p-2 bg-gray-100/90 dark:bg-gray-700/80 hover:bg-gray-200/90 dark:hover:bg-gray-600/90 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            >
              <div className="relative">
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                ) : (
                  <Sun className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-200" />
                )}
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ItemProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/20 transition-colors duration-500">
            <NavBar />
            <Routes>
              <Route path="/" element={<ViewItems />} />
              <Route path="/add" element={<AddItem />} />
            </Routes>
          </div>
        </Router>
      </ItemProvider>
    </ThemeProvider>
  );
}

export default App;