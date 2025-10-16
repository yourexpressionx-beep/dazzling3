import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import CompanyLogo from "@/components/CompanyLogo";
import { TrendingUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import StructuredData, { localBusinessSchema } from "@/components/StructuredData";

const companies = [
  {
    name: "Google",
    logo: "company-logos/google.svg",
  },
  {
    name: "Microsoft",
    logo: "company-logos/microsoft.svg",
  },
  {
    name: "Apollo Hospitals",
    logo: "company-logos/apollo.svg",
  },
  {
    name: "Fortis Healthcare",
    logo: "company-logos/fortis-4.svg",
  },
  {
    name: "AIIMS",
    logo: "company-logos/AIIMS (2).svg",
  },
  {
    name: "Jet Airways",
    logo: "company-logos/jet-airways.svg",
  },
  {
    name: "IndiGo",
    logo: "company-logos/indigo-airlines.svg",
  },
  {
    name: "Air India",
    logo: "company-logos/airindia.svg",
  },
  {
    name: "Marriott International",
    logo: "company-logos/marriott.svg",
  },
  {
    name: "Hyatt Hotels",
    logo: "company-logos/hyatt.svg",
  },
  {
    name: "Mayfair Hotels",
    logo: "company-logos/mayfair.svg",
  },
  {
    name: "Infosys",
    logo: "company-logos/infosys.svg",
  }
];

export default function PlacementsPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <SEOHead
        title="Student Success Stories Siliguri | Study Abroad Placements - Dazzling Academy"
        description="95% placement rate! Siliguri students now working at Google, Microsoft, Apollo. See how we helped North Bengal students succeed abroad."
        keywords="study abroad success Siliguri, student placements, overseas education results, North Bengal student success, Siliguri career success"
        canonicalUrl="https://dazzlingacademy.com/placements"
      />
      <StructuredData data={localBusinessSchema} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Success Stories from Siliguri & North Bengal</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over the years, Dazzling Academy has successfully placed students from Siliguri, Bagdogra, Jalpaiguri, Malda and entire North Bengal in top universities and global organizations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-4">Admissions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hundreds of students admitted to reputed universities across India and abroad.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-4">Placements</h3>
              <p className="text-muted-foreground leading-relaxed">
                Alumni working with leading organizations in diverse fields.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 md:p-12 bg-chart-4/10 border-chart-4/20">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
              <div className="w-16 h-16 rounded-md bg-chart-4/20 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-chart-4" />
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-chart-4 mb-2">95%</div>
                <p className="text-lg text-foreground">
                  Our universities maintain an impressive placement rate, offering students valuable work experience and future-ready opportunities.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Where Our Students Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our alumni are successfully placed in leading organizations worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {companies.map((company, index) => (
              <CompanyLogo 
                key={company.name} 
                name={company.name} 
                logo={company.logo} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
