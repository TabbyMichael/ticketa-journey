import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold text-primary">
              Ticketa
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary">
                Events
              </Link>
              <Link to="/venues" className="text-sm font-medium hover:text-primary">
                Venues
              </Link>
              <Link to="/calendar" className="text-sm font-medium hover:text-primary">
                Calendar
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search events..."
                className="pl-10 h-9 w-[200px] rounded-md border border-input bg-background px-3"
              />
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm" className="hidden md:flex">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;