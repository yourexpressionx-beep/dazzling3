import { motion } from "framer-motion";
import ContactInfo from "@/components/ContactInfo";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import StructuredData, { localBusinessSchema } from "@/components/StructuredData";

const phoneNumbers = [
  "+91 98324 40577",
  "+91 92393 49636",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <SEOHead
        title="Contact Education Consultant Siliguri | Dazzling Academy Near Bagdogra"
        description="Get expert education guidance in Siliguri. Visit our office, call for career counseling, or WhatsApp for study abroad help. Serving all of North Bengal."
        keywords="education consultant contact Siliguri, career counseling office, study abroad help near me, Bagdogra education consultant, Siliguri consultancy contact"
        canonicalUrl="https://dazzlingacademy.com/contact"
      />
      <StructuredData data={localBusinessSchema} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Visit Our Education Consultancy in Siliguri</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to help students from Siliguri, Bagdogra, Jalpaiguri, and all of North Bengal take the next step toward their career. Reach out today for expert guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <ContactInfo
              icon={MapPin}
              title="Address"
              content="Girish Ghosh Sarani, Hakimpara, West Bengal, India. Easily accessible from Siliguri, Bagdogra Airport, and Jalpaiguri."
              index={0}
            />
            <ContactInfo
              icon={Phone}
              title="Phone Numbers"
              content={phoneNumbers}
              index={1}
            />
            <ContactInfo
              icon={Mail}
              title="Email"
              content="academydazzling948@gmail.com"
              index={2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Contact</h3>
              <div className="space-y-6">
                <a
                  href="https://wa.me/919832440577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  data-testid="link-whatsapp"
                >
                  <Button className="w-full gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#25D366]">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </a>

                <a
                  href="mailto:academydazzling948@gmail.com"
                  className="block"
                  data-testid="link-email"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <Mail className="h-5 w-5" />
                    Send Email
                  </Button>
                </a>

                <a
                  href="tel:+919832440577"
                  className="block"
                  data-testid="link-call"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-12 bg-primary/5">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Build Your Career Together
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Take the first step towards a brighter future with Siliguri's most trusted education consultancy
            </p>
            <p className="text-sm text-muted-foreground">
              Serving students from Siliguri, Bagdogra, Jalpaiguri, Coochbehar, Darjeeling, Gangtok, Kurseong, and across North Bengal
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
