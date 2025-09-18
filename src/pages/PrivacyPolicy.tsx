import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Your Data, Our Responsibility
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-card rounded-lg p-8">
              <div className="prose max-w-none">
                <p className="text-lg mb-8">
                  At SS Stones, we value the trust our customers, contractors, and partners place in us when sourcing granite and marble solutions for their projects. Protecting your personal and business information is as important to us as ensuring the quality and reliability of our stone products.
                </p>
                <p className="mb-8">
                  This Privacy Policy explains what information we collect, why we collect it, how we protect it, and your rights when engaging with our website, products, and services.
                </p>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Information We Collect</h2>
                <p className="mb-4">
                  When you interact with SS Stones—whether as a contractor, architect, retailer, or individual customer—we may collect:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Full Name / Business Name</li>
                  <li>Email Address & Phone Number</li>
                  <li>Billing & Delivery Address</li>
                  <li>Order History & Purchase Preferences</li>
                  <li>Payment Details (processed via secure third-party gateways)</li>
                  <li>Project Requirements (stone type, sizes, finishes, etc.)</li>
                  <li>Device & Browser Information (if using our website)</li>
                  <li>Cookies & Analytics Data (for website performance)</li>
                </ul>
                <p className="mb-6">
                  We collect only the information necessary to ensure smooth business transactions and high-quality service.
                </p>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Why We Collect Your Information</h2>
                <p className="mb-4">
                  Your information is used for purposes such as:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Processing and fulfilling orders</li>
                  <li>Coordinating transport and delivery of granite and marble</li>
                  <li>Providing quotations for bulk or project-based orders</li>
                  <li>Offering customer support and after-sales service</li>
                  <li>Sending updates, offers, or product catalogues (only if you opt in)</li>
                  <li>Improving our operations and customer experience</li>
                  <li>Complying with legal and taxation requirements</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">How We Protect Your Information</h2>
                <p className="mb-4">
                  We take strong measures to secure your data:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>SSL Encryption:</strong> All online communication is encrypted</li>
                  <li><strong>Secure Payments:</strong> All financial transactions are processed through PCI-compliant gateways—we do not store your banking details</li>
                  <li><strong>Restricted Access:</strong> Only authorized personnel can access sensitive data</li>
                  <li><strong>Regular System Reviews:</strong> Firewalls and security audits help prevent data breaches</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Your Rights & Choices</h2>
                <p className="mb-4">
                  As a customer, you have full control over your personal data. You may:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Request access to the data we hold about you</li>
                  <li>Ask for corrections or updates</li>
                  <li>Request deletion of your data (subject to legal obligations)</li>
                  <li>Opt out of marketing or promotional messages</li>
                  <li>Raise concerns about data handling practices</li>
                </ul>
                <p className="mb-6">
                  We respond to valid requests within 30 business days.
                </p>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Third-Party Sharing</h2>
                <p className="mb-6">
                  We do not sell or rent customer information. Data is only shared with:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Logistics providers for product delivery</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Government authorities if legally required</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Policy Updates</h2>
                <p className="mb-6">
                  This Privacy Policy may be updated periodically to reflect changes in regulations, technologies, or our business practices. Updates will always be published here with a revised "Last Updated" date.
                </p>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Contact Us</h2>
                <p className="mb-2">
                  For privacy-related questions, concerns, or requests, please contact:
                </p>
                <p className="mb-2">
                  <strong>SS Stones</strong><br />
                  📍 D.No 1, NMC Complex, Main Road, Pakala, Chittoor, Andhra Pradesh – 517112<br />
                  📞 Phone: +91 99941 82015<br />
                  📧 Email: contact@ssstone.shop
                </p>
                
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Last Updated: August 2025<br />
                    © 2025 SS Stones. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
