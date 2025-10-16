import { motion } from "framer-motion";

interface DazzlingLogoProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  className?: string;
}

export default function DazzlingLogo({ size = 'medium', className = '' }: DazzlingLogoProps) {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16',
    xl: 'h-24 w-24'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative ${sizeClasses[size]} ${className}`}
    >
      <img
        src="/logo.svg"
        alt="Dazzling Academy"
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}