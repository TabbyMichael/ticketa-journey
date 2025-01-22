import { Calendar, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
  category: string;
  imageUrl: string;
}

export const EventCard = ({ title, date, location, attendees, category, imageUrl }: EventCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-4 right-4 bg-white/90 text-foreground">
          {category}
        </Badge>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{attendees} attending</span>
          </div>
        </div>
        <Button className="w-full">View Details</Button>
      </div>
    </Card>
  );
};