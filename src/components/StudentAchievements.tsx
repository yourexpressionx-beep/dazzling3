import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

// Images from our student events and achievements
const studentImages = [
  {
    src: "/student-achievements/IMG-20250512-WA0002.jpg",
    alt: "Students receiving certificates at Dazzling Academy",
    caption: "Certificate Distribution Ceremony"
  },
  {
    src: "/student-achievements/IMG-20250514-WA0016.jpg",
    alt: "Students celebrating their achievements",
    caption: "Students Celebrating Their Success"
  },
  {
    src: "/student-achievements/IMG-20250619-WA0002.jpg",
    alt: "Medical course student with study materials",
    caption: "Medical Course Preparation"
  },
  {
    src: "/student-achievements/IMG-20250728-WA0014.jpg",
    alt: "Students during registration at Dazzling Academy",
    caption: "New Batch Registration Day"
  },
  {
    src: "/student-achievements/IMG-20250813-WA0029.jpg",
    alt: "Students at cultural event wearing traditional attire",
    caption: "Cultural Event Celebration"
  }
];

export default function StudentAchievements() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Student Life at Dazzling Academy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our vibrant student community, achievements, and campus activities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {studentImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative aspect-[4/3] bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105 opacity-0"
                      loading="lazy"
                      onLoad={(e) => {
                        e.currentTarget.previousSibling?.remove();
                        e.currentTarget.classList.remove('opacity-0');
                      }}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.classList.add('hidden');
                        const errorDiv = document.createElement("div");
                        errorDiv.className = "absolute inset-0 flex items-center justify-center bg-gray-100";
                        errorDiv.innerHTML = `
                          <div class="text-gray-500 flex flex-col items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>Image not available</span>
                          </div>
                        `;
                        e.currentTarget.parentNode?.appendChild(errorDiv);
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <p className="text-sm font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Join Our Success Story</h3>
            <p className="text-muted-foreground mb-6">
              Join Dazzling Academy and be part of our growing success stories. 
              From medical aspirants to management professionals, we help students achieve their dreams.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Contact Us Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}