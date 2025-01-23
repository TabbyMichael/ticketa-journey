import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2 className="text-2xl font-semibold mt-8">2. User Responsibilities</h2>
          <p>Users must provide accurate information when creating accounts and purchasing tickets. Any fraudulent activity will result in immediate account termination.</p>

          <h2 className="text-2xl font-semibold mt-8">3. Ticketing Rules</h2>
          <p>All ticket sales are final unless otherwise stated. Resale of tickets is prohibited without explicit permission from the event organizer.</p>

          <h2 className="text-2xl font-semibold mt-8">4. Prohibited Activities</h2>
          <ul className="list-disc pl-6">
            <li>Creating multiple accounts for fraudulent purposes</li>
            <li>Attempting to manipulate ticket prices or availability</li>
            <li>Sharing account credentials with unauthorized users</li>
            <li>Using automated systems to purchase tickets</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">5. Modifications to Service</h2>
          <p>We reserve the right to modify or discontinue the service with or without notice to the user.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Terms;