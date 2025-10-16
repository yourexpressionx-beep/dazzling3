import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { fadeInUpVariants, viewportSettings, normalTransition } from "@/lib/motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon: Icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={viewportSettings}
      transition={{ ...normalTransition, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full hover-elevate transition-all duration-200 will-change-transform">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
