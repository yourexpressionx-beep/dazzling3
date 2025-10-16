import Hero from "../Hero";

export default function HeroExample() {
  return (
    <Hero
      headline="Your Future, Our Mission."
      subtext="Dazzling Academy is India's trusted education and career consultancy, helping students unlock their true potential through transparent guidance, ethical practices, and proven results."
      primaryCTA="Get Guidance Today"
      secondaryCTA="Learn More"
      onPrimaryCTA={() => console.log("Primary CTA clicked")}
      onSecondaryCTA={() => console.log("Secondary CTA clicked")}
    />
  );
}
