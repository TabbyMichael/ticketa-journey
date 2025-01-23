import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6">
            <li>Name and contact information</li>
            <li>Payment information</li>
            <li>Event preferences and history</li>
            <li>Communication with our support team</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">2. How We Use Your Information</h2>
          <p>Your information is used to:</p>
          <ul className="list-disc pl-6">
            <li>Process your ticket purchases</li>
            <li>Send you important event updates</li>
            <li>Improve our services</li>
            <li>Prevent fraud and abuse</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">3. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>

          <h2 className="text-2xl font-semibold mt-8">4. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6">
            <li>Access your personal data</li>
            <li>Request corrections to your data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Privacy;