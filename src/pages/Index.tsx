import { FeaturedEvent } from "@/components/FeaturedEvent";
import { EventCard } from "@/components/EventCard";

const Index = () => {
  const featuredEvent = {
    title: "Tech Conference 2024",
    description: "Join us for the most innovative tech conference of the year. Connect with industry leaders, discover breakthrough technologies, and shape the future of tech.",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    date: "June 15-17, 2024"
  };

  const events = [
    {
      title: "Design Workshop",
      date: "April 20, 2024",
      location: "San Francisco, CA",
      attendees: 120,
      category: "Workshop",
      imageUrl: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80"
    },
    {
      title: "Music Festival",
      date: "May 5, 2024",
      location: "Austin, TX",
      attendees: 5000,
      category: "Festival",
      imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80"
    },
    {
      title: "Business Summit",
      date: "May 15, 2024",
      location: "New York, NY",
      attendees: 300,
      category: "Conference",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen space-y-12 pb-12">
      <FeaturedEvent {...featuredEvent} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
          <p className="text-muted-foreground">Discover amazing events happening near you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="page-transition" style={{ animationDelay: `${index * 100}ms` }}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;