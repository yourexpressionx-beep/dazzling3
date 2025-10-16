import { motion } from "framer-motion";

interface CompanyLogoProps {
  name: string;
  logo: string;
  index?: number;
}

interface CompanyLogoProps {
  name: string;
  logo: string;
  size?: 'small' | 'medium' | 'large';
  index?: number;
}

export default function CompanyLogo({ 
  name, 
  logo, 
  size = 'medium', 
  index = 0 
}: CompanyLogoProps) {
  const sizeClasses = {
    small: 'h-12',
    medium: 'h-16',
    large: 'h-20'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex items-center justify-center p-6 bg-card rounded-md hover:shadow-lg transition-all duration-300 group border border-border/50"
    >
      <div className={`relative w-full ${sizeClasses[size]} flex items-center justify-center`}>
        <img
          src={logo}
          alt={`${name} logo`}
          onError={(e) => {
            console.error(`Error loading image for ${name}:`, logo);
            e.currentTarget.style.display = 'none';
          }}
          className="w-auto h-full object-contain transition-all duration-300 max-w-[150px] mx-auto"
        />
      </div>
    </motion.div>
  );
}
