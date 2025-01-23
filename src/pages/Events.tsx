import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Calendar, Filter, MapPin, Search } from "lucide-react";

const Events = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-4xl font-bold">Events</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="pl-10 w-[300px]"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                {/* Add category filters */}
              </div>
              <div>
                <h3 className="font-semibold mb-4">Date</h3>
                {/* Add date filters */}
              </div>
              <div>
                <h3 className="font-semibold mb-4">Price Range</h3>
                {/* Add price range filters */}
              </div>
            </div>

            <div className="md:col-span-3">
              {/* Event listings will go here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;