import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { scaleInVariants, viewportSettings, normalTransition } from "@/lib/motion";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index?: number;
}

export default function StatCard({ icon: Icon, value, label, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={scaleInVariants}
      viewport={viewportSettings}
      transition={{ ...normalTransition, delay: index * 0.1 }}
      className="text-center space-y-2"
    >
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-md bg-chart-4/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-chart-4" />
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-accent">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  );
}
