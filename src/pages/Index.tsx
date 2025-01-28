import { FeaturedEvent } from "@/components/FeaturedEvent";
import { EventCard } from "@/components/EventCard";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 12;

  const featuredEvent = {
    title: "Tech Conference 2024",
    description: "Join us for the most innovative tech conference of the year. Connect with industry leaders, discover breakthrough technologies, and shape the future of tech.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    date: "June 15-17, 2024"
  };

  // Generate 100 events
  const allEvents = Array.from({ length: 100 }, (_, index) => ({
    title: `Event ${index + 1}`,
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
    location: ["San Francisco, CA", "New York, NY", "Austin, TX", "Seattle, WA", "Chicago, IL"][Math.floor(Math.random() * 5)],
    attendees: Math.floor(Math.random() * 1000) + 100,
    category: ["Conference", "Workshop", "Festival", "Seminar", "Concert"][Math.floor(Math.random() * 5)],
    imageUrl: [
      "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
    ][Math.floor(Math.random() * 3)]
  }));

  // Calculate pagination
  const totalPages = Math.ceil(allEvents.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = allEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <div className="space-y-12 pb-12">
      <FeaturedEvent {...featuredEvent} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
          <p className="text-muted-foreground">Discover amazing events happening near you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentEvents.map((event, index) => (
            <div key={index} className="page-transition" style={{ animationDelay: `${index * 100}ms` }}>
              <EventCard {...event} />
            </div>
          ))}
        </div>

        <Pagination className="my-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Index;