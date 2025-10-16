import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import SEOHead from "@/components/SEOHead";
import StructuredData, { localBusinessSchema } from "@/components/StructuredData";
import { GraduationCap, Sparkles, Users, Globe, TrendingUp, Award, Briefcase, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import StudentAchievements from "@/components/StudentAchievements";

export default function HomePage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Education Consultancy Siliguri | Study Abroad Consultant - Dazzling Academy"
        description="Leading education consultancy in Siliguri. Expert study abroad guidance, career counseling, visa help for students from Siliguri, Bagdogra, Jalpaiguri & entire North Bengal region."
        keywords="education consultancy Siliguri, study abroad Siliguri, career guidance Siliguri, overseas education, IELTS Siliguri, student visa help, education consultant Bagdogra, study abroad Jalpaiguri"
        canonicalUrl="https://dazzlingacademy.com/"
      />
      <StructuredData data={localBusinessSchema} />
      
      <Hero
        headline="Leading Education Consultancy in Siliguri & Entire North Bengal Region"
        subtext="Dazzling Academy is Siliguri's trusted education and career consultancy, helping students from Siliguri, Bagdogra, Jalpaiguri, and North Bengal unlock their true potential through expert study abroad guidance and proven results."
        primaryCTA="Talk to Our Siliguri Expert"
        secondaryCTA="Explore Services"
        onPrimaryCTA={() => setLocation("/contact")}
        onSecondaryCTA={() => setLocation("/services")}
      />

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Students from Siliguri Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Serving students from Siliguri, Bagdogra, Jalpaiguri, Darjeeling, Malda and across North Bengal for over a decade
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCard icon={Award} value="5+" label="Years of Excellence" index={0} />
            <StatCard icon={Globe} value="100+" label="University Partners" index={1} />
            <StatCard icon={Users} value="1000+" label="Students Guided" index={2} />
            <StatCard icon={Briefcase} value="95%" label="Placement Rate" index={3} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for your educational journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={GraduationCap}
              title="Scholarship Guidance"
              description="Expert assistance in securing financial aid and scholarships for your education."
              index={0}
            />
            <ServiceCard
              icon={Sparkles}
              title="Technology-Driven Solutions"
              description="Modern tools and platforms to streamline your application process."
              index={1}
            />
            <ServiceCard
              icon={Users}
              title="Certified Counselors"
              description="Experienced professionals dedicated to your success."
              index={2}
            />
            <ServiceCard
              icon={Globe}
              title="Wide University Network"
              description="Partnerships with top institutions across India and abroad."
              index={3}
            />
            <ServiceCard
              icon={TrendingUp}
              title="Holistic Approach"
              description="Complete support from career guidance to placement assistance."
              index={4}
            />
            <ServiceCard
              icon={BookOpen}
              title="Career-First Guidance"
              description="Align your education with your long-term career goals."
              index={5}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" onClick={() => setLocation("/services")} data-testid="button-explore-services">
              Explore Our Services
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Join hundreds of students from Siliguri succeeding abroad
            </p>
          </motion.div>
        </div>
      </section>

      <StudentAchievements />
    </div>
  );
}
