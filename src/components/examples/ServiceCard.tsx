import ServiceCard from "../ServiceCard";
import { GraduationCap } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        icon={GraduationCap}
        title="Scholarship Guidance"
        description="Expert assistance in securing financial aid and scholarships for your education."
      />
    </div>
  );
}
