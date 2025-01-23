import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Event Calendar</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Today
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
            <div className="space-y-6">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <div className="space-y-4">
                <h3 className="font-semibold">Upcoming Events</h3>
                {/* Add list of upcoming events */}
              </div>
            </div>

            <div className="border rounded-lg p-6">
              {/* Calendar grid will go here */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;