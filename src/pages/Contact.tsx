import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@ticketa.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Live Chat Available 24/7</span>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input type="text" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Your message" className="min-h-[150px]" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;