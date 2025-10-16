import { useEffect } from "react";

interface StructuredDataProps {
  data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    script.id = "structured-data";

    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [data]);

  return null;
}

// LocalBusiness Schema for Dazzling Academy
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Dazzling Academy",
  "alternateName": "Dazzling Academy Education Consultancy",
  "description": "Leading education and career consultancy in Siliguri, West Bengal. Helping students from Siliguri, Bagdogra, Jalpaiguri, and North Bengal achieve their study abroad and career goals.",
  "url": "https://dazzlingacademy.com",
  "logo": "https://dazzlingacademy.com/logo-192.png",
  "image": "https://dazzlingacademy.com/og-image.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "61, Girish Ghosh Sarani, Hakimpada",
    "addressLocality": "Alipurduar",
    "addressRegion": "West Bengal",
    "postalCode": "736121",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.4897",
    "longitude": "89.5241"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Siliguri"
    },
    {
      "@type": "City",
      "name": "Bagdogra"
    },
    {
      "@type": "City",
      "name": "Jalpaiguri"
    },
    {
      "@type": "City",
      "name": "Coochbehar"
    },
    {
      "@type": "City",
      "name": "Darjeeling"
    },
    {
      "@type": "City",
      "name": "Gangtok"
    },
    {
      "@type": "City",
      "name": "Kurseong"
    }
  ],
  "telephone": [
    "+91-9832440577",
    "+91-9239349636"
  ],
  "email": "academydazzling948@gmail.com",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/dazzlingacademy",
    "https://www.instagram.com/dazzlingacademy"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Education Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Study Abroad Consultation",
          "description": "Expert guidance for studying in universities abroad"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Career Counseling",
          "description": "Professional career guidance and counseling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Admission Assistance",
          "description": "Complete admission support for top universities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Visa Assistance",
          "description": "Student visa application and documentation help"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IELTS/TOEFL Preparation",
          "description": "Test preparation guidance for international studies"
        }
      }
    ]
  }
};
