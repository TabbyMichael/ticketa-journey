import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, CreditCard, HelpCircle, Settings, Shield } from "lucide-react";

const HelpCenter = () => {
  const categories = [
    {
      title: "Payments",
      icon: CreditCard,
      description: "Issues with payments, refunds, or billing"
    },
    {
      title: "Account",
      icon: Settings,
      description: "Account settings, profile management"
    },
    {
      title: "Security",
      icon: Shield,
      description: "Account security and privacy concerns"
    },
    {
      title: "General Support",
      icon: HelpCircle,
      description: "General questions and assistance"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-muted-foreground mb-8">Find answers to your questions</p>
        
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search for help..." 
            className="pl-10 h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <category.icon className="h-8 w-8 text-primary mb-4" />
              <CardTitle className="text-xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;