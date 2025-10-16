import StatCard from "../StatCard";
import { Award } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="p-8">
      <StatCard
        icon={Award}
        value="10+"
        label="Years of Excellence"
      />
    </div>
  );
}
