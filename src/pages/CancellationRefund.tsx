import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CancellationRefund = () => {
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
              Cancellation & Refund Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-center">
              Clear, Fair & Industry-Specific
            </p>
            <p className="text-center max-w-3xl mx-auto mb-12">
              At SS Stones, we take pride in delivering premium-quality granite and marble products to our customers. Due to the nature of natural stone and heavy goods logistics, cancellations and refunds are subject to specific conditions outlined below.
            </p>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Order Cancellations</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li><strong>Cancellation Window:</strong> Orders may be cancelled within 2 hours of confirmation, provided cutting, finishing, or dispatch has not begun.</li>
                <li>Once materials are processed, cut, or loaded for transport, cancellations are not possible.</li>
                <li>For wholesale or export orders, cancellation terms may differ and will be communicated in the quotation or sales contract.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Returns & Replacements</h2>
              <p className="mb-4">Returns are only accepted in the following cases:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Incorrect products supplied against the order.</li>
                <li>Verified defects in quality or dimensions.</li>
                <li>Goods damaged during transit (must be reported immediately on delivery with photos/videos).</li>
              </ul>
              <p className="font-medium mb-2">Conditions for Returns:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Products must remain in their original packaging/crates.</li>
                <li>Goods must not be cut, installed, or altered in any way.</li>
                <li>Requests must be raised within 48 hours of delivery.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Non-Returnable Items</h2>
              <p className="mb-4">The following items are not eligible for return or refund:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Custom-cut or fabricated stone pieces.</li>
                <li>Special-order stones imported or quarried specifically for a project.</li>
                <li>Minor natural variations in color, veining, or texture (these are inherent to natural stone and not considered defects).</li>
                <li>Goods mishandled, stored improperly, or damaged after delivery.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Refunds</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Once a return or claim is verified, refunds are initiated within 5–7 business days.</li>
                <li>Refunds are processed via the original payment method (bank transfer, card, UPI, etc.).</li>
                <li>Depending on the payment provider, funds may take 7–10 business days to reflect in your account.</li>
                <li>Customers may also opt for a replacement batch or credit note for future purchases instead of a refund.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Exceptions</h2>
              <p className="mb-4">Refunds or replacements are not offered in cases where:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Delivery is delayed due to logistics issues beyond our control (traffic, strikes, weather).</li>
                <li>Incorrect/incomplete delivery details were provided by the customer.</li>
                <li>Natural variations occur in the stone's appearance or finish.</li>
              </ul>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">Need Help?</h2>
                <p className="mb-6">For cancellation or refund support, please contact:</p>
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

export default CancellationRefund;
