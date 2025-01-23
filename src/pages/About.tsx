import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <p className="text-lg text-muted-foreground">
            Ticketa is your trusted platform for discovering and booking amazing events. 
            We connect event organizers with attendees, making it easy to create memorable experiences.
          </p>
          {/* Add more content */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;