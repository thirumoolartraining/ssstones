import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ShippingPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 relative">
          <Button 
            variant="outline" 
            className="absolute top-4 left-4 flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          
          <div className="max-w-4xl mx-auto pt-10">
            <h1 className="text-4xl font-bold text-primary mb-2 text-center">
              Shipping & Delivery Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-center">
              Safe, Reliable & On-Time Delivery of Stone Materials
            </p>
            <p className="text-center max-w-3xl mx-auto mb-12">
              At SS Stones, we understand that the transportation of granite and marble requires care, coordination, and reliability. This Shipping & Delivery Policy explains how we process, package, and deliver our products to ensure they arrive safely and on schedule.
            </p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Order Processing & Dispatch</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Orders are processed once payment confirmation or approved trade terms are received.</li>
                <li>Dispatch timelines depend on stone type, order volume, and finishing requirements (e.g., polishing, cutting).</li>
                <li>Customers are notified in advance regarding dispatch schedules and estimated delivery timelines.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Coverage Areas</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Domestic Delivery:</strong> Services available across Andhra Pradesh and pan-India via logistics partners.</li>
                <li><strong>Exports:</strong> Wholesale/B2B orders may be shipped internationally, subject to export documentation and freight arrangements.</li>
                <li><strong>Bulk Orders:</strong> Specialized logistics solutions can be arranged for large-scale construction projects.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Delivery Timelines</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Within Andhra Pradesh:</strong> 3–5 business days after dispatch</li>
                <li><strong>Pan-India Orders:</strong> 7–15 business days, depending on distance and logistics availability</li>
                <li><strong>International Orders:</strong> Timelines vary by country, port clearance, and freight schedules</li>
              </ul>
              <p className="mb-8 text-muted-foreground">
                <em>Note: Delivery times are estimates and may vary due to road conditions, customs, or unforeseen circumstances.</em>
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Shipping Charges</h2>
              <p className="mb-4">Charges are calculated based on:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Weight and dimensions of stone slabs/tiles</li>
                <li>Distance and destination</li>
                <li>Mode of transport (road, sea freight, container load)</li>
              </ul>
              <p className="mb-8">
                All freight and handling costs are communicated clearly during order confirmation.
                Additional charges may apply for loading/unloading assistance, cranes, or special equipment.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Packaging & Handling</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>All granite and marble products are packed using export-quality wooden crates, pallets, or protective coverings to minimize breakage.</li>
                <li>Stones are securely strapped and cushioned to withstand long-distance transport.</li>
                <li>Weather-resistant covers are used for outdoor transport.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Customer Responsibilities</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Ensure accessibility for trucks or heavy vehicles at the delivery site.</li>
                <li>Arrange for manpower or equipment (e.g., cranes, forklifts) for unloading unless otherwise agreed in advance.</li>
                <li>Inspect goods upon delivery and report any damages immediately with supporting proof.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Delays & Exceptions</h2>
              <p className="mb-4">Deliveries may be delayed due to:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Roadblocks, transport strikes, or traffic congestion</li>
                <li>Weather disruptions or natural calamities</li>
                <li>Customs clearance delays for international orders</li>
                <li>Force majeure events beyond our control</li>
              </ul>
              <p className="mb-8">
                In such cases, we will provide prompt updates and revised delivery timelines.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Need Help?</h2>
                <p className="mb-6">For shipping-related queries or assistance, please contact:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">SS Stones</h4>
                      <p className="text-muted-foreground">D.No 1, NMC Complex, Main Road, Pakala, Chittoor, Andhra Pradesh – 517112</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <a href="tel:+919994182015" className="hover:text-primary">+91 99941 82015</a>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <a href="mailto:contact@ssstone.shop" className="hover:text-primary">contact@ssstone.shop</a>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-muted-foreground">
                    Last Updated: August 2025<br />
                    © 2025 SS Stones. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
