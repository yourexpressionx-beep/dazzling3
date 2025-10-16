import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Educational_consultation_hero_image_439e708b.png";
import { fadeInUpVariants, scaleInVariants, normalTransition, slowTransition } from "@/lib/motion";

interface HeroProps {
  headline: string;
  subtext: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
  showImage?: boolean;
}

export default function Hero({
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
  showImage = true,
}: HeroProps) {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={normalTransition}
            className="space-y-6"
          >
            <motion.h1
              variants={fadeInUpVariants}
              transition={{ ...normalTransition, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={fadeInUpVariants}
              transition={{ ...normalTransition, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              {subtext}
            </motion.p>

            <motion.div
              variants={fadeInUpVariants}
              transition={{ ...normalTransition, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {primaryCTA && (
                <Button
                  size="lg"
                  onClick={onPrimaryCTA}
                  className="gap-2"
                  data-testid="button-primary-cta"
                >
                  {primaryCTA}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={onSecondaryCTA}
                  data-testid="button-secondary-cta"
                >
                  {secondaryCTA}
                </Button>
              )}
            </motion.div>
          </motion.div>

          {showImage && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleInVariants}
              transition={{ ...slowTransition, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Dazzling Academy education consultancy and career guidance session with students in Siliguri, North Bengal"
                  className="w-full h-auto"
                  loading="eager"
                  decoding="async"
                  width="800"
                  height="600"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
