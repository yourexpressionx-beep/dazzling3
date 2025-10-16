import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Users, TrendingUp, Heart } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import StructuredData, { localBusinessSchema } from "@/components/StructuredData";

const coreValues = [
  {
    icon: Shield,
    title: "Transparency & Integrity",
    description: "Honest guidance with no hidden agendas",
  },
  {
    icon: Users,
    title: "Comprehensive Support",
    description: "End-to-end assistance throughout your journey",
  },
  {
    icon: TrendingUp,
    title: "Career-First Approach",
    description: "Aligning education with career goals",
  },
  {
    icon: Heart,
    title: "Student-Centered Guidance",
    description: "Your success is our mission",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <SEOHead
        title="About Dazzling Academy | Education Consultant Siliguri Since 2013"
        description="10+ years of trusted education consultancy in Siliguri. Helping North Bengal students achieve study abroad dreams. Serving Siliguri, Bagdogra, Jalpaiguri, Darjeeling."
        keywords="education consultant Siliguri, study abroad expert, career counseling North Bengal, overseas education advisor, Siliguri consultancy"
        canonicalUrl="https://dazzlingacademy.com/about"
      />
      <StructuredData data={localBusinessSchema} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Dazzling Academy - Siliguri's Trusted Education Partner</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proudly serving North Bengal for over a decade with honesty, integrity, and professionalism.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based in the heart of North Bengal, Dazzling Academy has been guiding students from Siliguri, Bagdogra, Jalpaiguri, Darjeeling, and surrounding areas for over a decade. We proudly represent leading universities worldwide, helping students from North Bengal enroll in reputed institutions for their higher education.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our certified counselors and mentors, with deep understanding of the Siliguri and North Bengal region, ensure students choose the right academic and career path. With a strong network of partners and a focus on transparency, we are committed to building futures that shine for students across North Bengal.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 md:p-12 bg-primary/5">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Mission Statement</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To remain a market leader in education consultancy by consistently delivering high-quality, ethical, and professional services to students, parents, and academic partners.
            </p>
          </Card>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center hover-elevate transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
