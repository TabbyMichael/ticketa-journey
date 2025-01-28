import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calendar as CalendarIcon, Filter, Heart, MapPin, Search, Share2 } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  { id: "music", label: "Music" },
  { id: "sports", label: "Sports" },
  { id: "arts", label: "Arts & Theater" },
  { id: "food", label: "Food & Drink" },
  { id: "business", label: "Business" },
];

const Events = () => {
  const [date, setDate] = useState<Date>();
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Mock events data
  const events = [
    {
      id: 1,
      title: "Summer Music Festival 2024",
      category: "Music",
      date: "2024-07-15",
      time: "16:00",
      location: "Central Park",
      price: 89.99,
      image: "/placeholder.svg",
    },
    // Add more events here
  ];

  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Discover Events</h1>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events..."
                className="pl-10 w-full md:w-[300px]"
              />
            </div>
            <Button variant="outline" className="shrink-0">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6 bg-card p-6 rounded-lg border">
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedCategories([...selectedCategories, category.id]);
                        } else {
                          setSelectedCategories(selectedCategories.filter((id) => id !== category.id));
                        }
                      }}
                    />
                    <label
                      htmlFor={category.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Date</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Price Range</h3>
              <div className="space-y-4">
                <Slider
                  defaultValue={[0, 1000]}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="group hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute top-4 right-4 space-x-2">
                        <Button size="icon" variant="secondary" className="rounded-full">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="secondary" className="rounded-full">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{event.category}</Badge>
                      <span className="font-semibold">${event.price}</span>
                    </div>
                    <CardTitle className="mb-2">{event.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Get Tickets</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Events;