import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Terms & Conditions
              </h1>
              <p className="text-xl">
                Last Updated: August 2025
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-card rounded-lg p-8">
              <div className="prose max-w-none">
                <p className="mb-8">
                  Welcome to SS Stones. By engaging with our website, placing an order, or purchasing our granite and marble products, you agree to comply with the following Terms & Conditions. These terms govern all sales, transactions, and services offered by SS Stones.
                </p>
                <p className="mb-8 font-semibold">
                  If you do not agree with any part of these terms, we advise you to discontinue use of our services.
                </p>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. General Use of Services</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>You confirm that you are at least 18 years old or legally authorized to make purchases on behalf of a business entity.</li>
                  <li>Our services are intended strictly for lawful purposes within the construction and architectural industry.</li>
                  <li>SS Stones reserves the right to restrict, suspend, or cancel orders in cases of misuse or fraud.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Products & Natural Variations</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>SS Stones specializes in granite and marble slabs, tiles, and stone products.</li>
                  <li>All products are natural stones; therefore, variations in color, texture, veining, and finish are normal and expected.</li>
                  <li>Product images are for reference only; actual products may differ.</li>
                  <li>Customers are encouraged to review samples before confirming large/bulk orders.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Pricing & Payments</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>All prices are listed in Indian Rupees (INR ₹) unless otherwise stated.</li>
                  <li>Prices may change based on raw material costs, quarry rates, or market fluctuations.</li>
                  <li>Payments must be made in full at the time of order unless alternate terms are agreed (for B2B/wholesale clients).</li>
                  <li>We accept secure payments via bank transfer, UPI, cards, and other verified channels.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Orders & Minimum Quantities</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Retail and small-scale purchases are subject to availability.</li>
                  <li>Wholesale/B2B orders may require minimum order quantities (MOQ), which will be communicated in advance.</li>
                  <li>Custom cutting, polishing, or finishing requests are accepted but may extend lead times.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Shipping & Delivery</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Deliveries are handled through trusted logistics partners or arranged by the customer.</li>
                  <li>Delivery timelines vary depending on distance, order size, and logistics availability.</li>
                  <li>Customers are responsible for unloading goods safely upon delivery.</li>
                  <li>Risk of damage or loss passes to the buyer once goods are delivered to the specified address.</li>
                  <li>Please refer to our <a href="/shipping-policy" className="text-granite-gold hover:underline">Shipping Policy</a> for detailed terms.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Returns & Refunds</h2>
                <p className="mb-4">Due to the natural and heavy nature of stone products, returns are not accepted unless:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Wrong products are supplied</li>
                  <li>Verified quality or size defects occur</li>
                  <li>Goods are damaged during transport (reported immediately with proof)</li>
                </ul>
                <p className="mb-6">Custom-cut, fabricated, or special-order items are non-returnable.</p>
                <p>For details, please refer to our <a href="/returns-exchange" className="text-granite-gold hover:underline">Cancellation & Refund Policy</a>.</p>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Customer Responsibilities</h2>
                <p className="mb-4">By purchasing from SS Stones, you agree to:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Provide accurate delivery and billing details</li>
                  <li>Inspect goods upon delivery and report issues within the valid window</li>
                  <li>Handle and store products properly to avoid damage</li>
                  <li>Accept natural variations inherent in stone products</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Intellectual Property</h2>
                <p className="mb-6">
                  All website content, product descriptions, images, and branding are the intellectual property of SS Stones.<br />
                  Unauthorized reproduction, resale of images, or misuse of branding is strictly prohibited.
                </p>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Limitation of Liability</h2>
                <p className="mb-4">SS Stones shall not be liable for:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Natural variations in stone appearance</li>
                  <li>Minor surface imperfections that are industry-accepted standards</li>
                  <li>Delays caused by logistics partners, strikes, or unforeseen events</li>
                  <li>Indirect, incidental, or consequential damages arising from product use</li>
                </ul>
                <p className="mb-6">Our liability is limited to the invoice value of the goods supplied.</p>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">10. Governing Law & Jurisdiction</h2>
                <p className="mb-6">
                  These terms are governed by the laws of India, and any disputes will be subject to the jurisdiction of the courts in Chittoor, Andhra Pradesh.
                </p>
                
                <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">11. Contact Us</h2>
                <p className="mb-2">
                  For questions, clarifications, or assistance, please contact:
                </p>
                <p className="mb-2">
                  <strong>SS Stones</strong><br />
                  📍 D.No 1, NMC Complex, Main Road, Pakala, Chittoor, Andhra Pradesh – 517112<br />
                  📞 Phone: +91 99941 82015<br />
                  📧 Email: contact@ssstone.shop
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
