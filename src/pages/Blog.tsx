import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top Event Planning Trends for 2024",
      category: "Trends",
      date: "March 15, 2024",
      description: "Discover the latest trends shaping the event industry this year, from sustainable practices to hybrid experiences.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
    },
    {
      title: "How to Choose the Perfect Venue",
      category: "Tips",
      date: "March 10, 2024",
      description: "Expert tips on selecting the ideal venue for your event, considering budget, capacity, and amenities.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
    },
    {
      title: "The Ultimate Event Marketing Guide",
      category: "How-to",
      date: "March 5, 2024",
      description: "Learn effective strategies to promote your event and maximize attendance.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Event Planning Blog</h1>
        <p className="text-muted-foreground">Stay updated with the latest event planning insights and tips</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-primary">{post.category}</span>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{post.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;