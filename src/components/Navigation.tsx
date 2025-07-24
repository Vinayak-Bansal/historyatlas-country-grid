import { Link, useLocation } from "react-router-dom";
import { Globe, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare" },
    { name: "Timeline", path: "/timeline" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-hero text-primary-foreground group-hover:scale-105 transition-transform">
              <Globe className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              HistoryAtlas
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="font-medium"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle and Search */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
              />
              <Moon className="h-4 w-4" />
            </div>
            
            {/* Search Button */}
            <Link to="/search">
              <Button
                variant={isActive("/search") ? "default" : "outline"}
                size="sm"
                className="flex items-center space-x-2"
              >
                <Search className="h-4 w-4" />
                <span className="hidden sm:inline">Search</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  size="sm"
                  className="text-xs"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;