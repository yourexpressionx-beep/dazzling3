import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUpVariants, viewportSettings, normalTransition } from "@/lib/motion";

interface ContactInfoProps {
  icon: LucideIcon;
  title: string;
  content: string | string[];
  index?: number;
}

export default function ContactInfo({ icon: Icon, title, content, index = 0 }: ContactInfoProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={viewportSettings}
      transition={{ ...normalTransition, delay: index * 0.1 }}
    >
      <Card className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-2 flex-1">
            <h3 className="font-semibold text-foreground">{title}</h3>
            {Array.isArray(content) ? (
              <ul className="space-y-1">
                {content.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground text-sm">{content}</p>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
