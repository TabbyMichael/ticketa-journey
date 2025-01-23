import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Refunds = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Refund Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8">Standard Refund Policy</h2>
          <p>We offer refunds under the following conditions:</p>
          <ul className="list-disc pl-6">
            <li>Cancellation requested at least 48 hours before the event</li>
            <li>Event cancellation by the organizer</li>
            <li>Significant changes to event date, time, or venue</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Refund Process</h2>
          <p>To request a refund:</p>
          <ol className="list-decimal pl-6">
            <li>Log into your account</li>
            <li>Navigate to your order history</li>
            <li>Select the ticket you wish to refund</li>
            <li>Click the "Request Refund" button</li>
            <li>Follow the prompts to complete your request</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8">Processing Time</h2>
          <p>Refunds are typically processed within 5-7 business days. The time it takes for the refund to appear in your account depends on your payment method and financial institution.</p>

          <h2 className="text-2xl font-semibold mt-8">Contact Support</h2>
          <p>If you have any questions about our refund policy or need assistance with a refund request, please contact our support team at support@ticketa.com or call us at +1 (555) 123-4567.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Refunds;