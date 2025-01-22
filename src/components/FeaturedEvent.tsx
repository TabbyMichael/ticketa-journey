import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FeaturedEventProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export const FeaturedEvent = ({ title, description, imageUrl, date }: FeaturedEventProps) => {
  return (
    <div className="relative h-[70vh] overflow-hidden rounded-2xl">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="container max-w-4xl mx-auto">
          <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
            Featured Event
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6 text-white/80">{description}</p>
          <div className="flex items-center gap-4">
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
              Get Tickets
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};