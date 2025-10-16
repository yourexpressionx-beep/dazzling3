import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  ogImage = "/og-image.png",
  canonicalUrl,
}: SEOHeadProps) {
  useEffect(() => {
    // Store created elements for cleanup
    const createdElements: (HTMLMetaElement | HTMLLinkElement)[] = [];

    // Update title
    const previousTitle = document.title;
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        element.setAttribute("data-seo-managed", "true");
        document.head.appendChild(element);
        createdElements.push(element);
      }
      element.content = content;
    };

    // Basic meta tags
    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:type", "website", true);
    if (canonicalUrl) {
      updateMetaTag("og:url", canonicalUrl, true);
    }

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical URL
    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    const linkWasCreated = !linkElement;
    
    if (!linkElement) {
      linkElement = document.createElement("link");
      linkElement.rel = "canonical";
      linkElement.setAttribute("data-seo-managed", "true");
      document.head.appendChild(linkElement);
      createdElements.push(linkElement);
    }
    
    if (canonicalUrl) {
      linkElement.href = canonicalUrl;
    }

    // Cleanup function to restore previous state
    return () => {
      document.title = previousTitle;
      
      // Remove created elements
      createdElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}
