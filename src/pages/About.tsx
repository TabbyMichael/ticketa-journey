import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold">About Ticketa</h1>
            <p className="text-xl text-muted-foreground">
              Making event planning seamless since 2020
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              At Ticketa, we're dedicated to revolutionizing the way people discover, plan, and experience events. 
              Our platform connects event organizers with attendees, making it easier than ever to create and participate in memorable experiences.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <Award className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">10K+ Events</h3>
              <p className="text-muted-foreground">Successfully hosted and managed</p>
            </div>
            <div className="text-center space-y-4">
              <Users className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">1M+ Users</h3>
              <p className="text-muted-foreground">Trust us for their events</p>
            </div>
            <div className="text-center space-y-4">
              <Globe className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Global Reach</h3>
              <p className="text-muted-foreground">Operating in 50+ countries</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;