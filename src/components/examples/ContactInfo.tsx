import ContactInfo from "../ContactInfo";
import { Phone } from "lucide-react";

export default function ContactInfoExample() {
  return (
    <div className="p-8 max-w-md">
      <ContactInfo
        icon={Phone}
        title="Phone Numbers"
        content={["+91 92393 49363", "+91 98324 40577", "+91 94348 13584"]}
      />
    </div>
  );
}
