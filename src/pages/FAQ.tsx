import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqItems = [
    {
      question: "How do I book tickets?",
      answer: "Booking tickets is easy! Simply browse our events, select the one you're interested in, choose your tickets, and proceed to checkout. You can pay using various payment methods including credit cards and digital wallets."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various digital payment methods. All payments are processed securely through our platform."
    },
    {
      question: "How do I get a refund?",
      answer: "Our refund policy allows for refunds up to 48 hours before the event. To request a refund, go to your order history and click the 'Request Refund' button. Processing typically takes 5-7 business days."
    },
    {
      question: "How do I create an account?",
      answer: "Click the 'Get Started' button in the top right corner of the page. Fill in your details, verify your email address, and you're ready to go! Having an account allows you to track your bookings and receive personalized event recommendations."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes! We use industry-standard encryption and security measures to protect your data. All payments are processed through secure payment gateways, and we never store your complete credit card information."
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4 animate-fade-up">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQ;