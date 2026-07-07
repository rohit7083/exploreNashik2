import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { useTheme } from "@/context/ThemeContext";
import { Heart, Menu, Moon, Sun, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  { key: "1", label: "Home", path: "/" },
  { key: "3", label: "Explore", path: "/explore" },
  // { key: "4", label: "Tourism", path: "/tourism" },
  { key: "5", label: "Near By Place", path: "/nearby-place" },
  { key: "6", label: "Kumbha-Mela", path: "/kumbh-mela" },
  { key: "8", label: "Travel Info", path: "/travel-info" },
  { key: "8", label: "History", path: "/history" },
  { key: "7", label: "About Us", path: "/about" },
];

//heart counting

const FAVORITES_KEY = "favoritePlaces";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [saved, setSaved] = useState(false);

  //heart counting

  const [favoriteCount, setFavoriteCount] = useState(0);

  const loadFavorites = () => {
    const data = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    setFavoriteCount(data.length);
  };

  useEffect(() => {
    loadFavorites();

    window.addEventListener("favoritesUpdated", loadFavorites);
    window.addEventListener("storage", loadFavorites);

    return () => {
      window.removeEventListener("favoritesUpdated", loadFavorites);
      window.removeEventListener("storage", loadFavorites);
    };
  }, []);


  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between px-5 h-16">
        {/* Logo + Desktop Menu grouped at start */}

        <div className="flex items-center h-16">
          <span role="button" style={{ cursor: "pointer" }} onClick={() => navigate("/")} className="font-bold text-lg text-black dark:text-white whitespace-nowrap mr-4">
            Explore <span className="text-red-800 font-bold">नाशिक </span>
          </span>

          <nav className="hidden md:flex h-16 items-end">
            {items.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                className={`px-4 h-full flex items-center text-sm cursor-pointer transition-colors border-b-2 ${location.pathname === item.path
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-800 dark:text-gray-200 border-transparent hover:text-blue-600"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Desktop Search + Theme Toggle */}
        <div className="hidden md:flex items-center gap-2 relative">
          {/* <Input placeholder="Search..." className="pr-8 w-48" />
          <Search className="absolute left-[calc(100%-4.5rem)] text-gray-400" size={16} /> */}

          <div className="hidden md:flex items-center gap-1">
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setSaved(!saved)}
            >
              <Heart
                size={20}
                className={`transition-colors ${
                  saved ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button> */}


            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => navigate("/likedplaces")}
            >
              <Heart size={20} />

              {favoriteCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px]">
                  {favoriteCount}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
        </div>

        {/* Mobile Hamburger + Theme Toggle */}

        <div className="md:hidden flex items-center gap-1">
          {/* <Button variant="ghost" size="icon" onClick={() => setSaved(!saved)}>
            <Heart
              size={20}
              className={`transition-colors ${
                saved ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </Button> */}


          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => navigate("/likedplaces")}
          >
            <Heart size={20} />

            {favoriteCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px]">
                {favoriteCount}
              </span>
            )}
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Menu size={20} />
          </Button>
        </div>
      </div>

      {/* Mobile Sheet */}
      <Sheet open={open} onClose={() => setOpen(false)}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="font-bold text-base">Menu</span>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X size={18} />
          </Button>
        </div>
        <nav className="flex flex-col">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
              className={`px-4 py-3 text-sm text-left transition-colors ${location.pathname === item.path
                  ? "text-blue-600 bg-blue-50 dark:bg-blue-950"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </Sheet>
    </header>
  );
};

export default Navbar;
