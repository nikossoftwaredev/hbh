import RoadMapCard from "@/components/RoadMapCard";
import { SectionTitle } from "@/components/SectionTitle";

const RoadMapSection = () => {
  return (
    <section id="road-map">
      <SectionTitle title="Roadmap" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            month: "1st Stage",
            goals: [
              "Launch on pump.fun",
              "Complete king of the hill and bonding curve",
              "Pay for Dex Screener",
              "Burn 5M tokens",
            ],
          },
          {
            month: "2nd Stage",
            goals: [
              "Fill bonding curve",
              "Raydium Launch",
              "Update DexTools",
              "Buy all trends",
              "Pay Callers",
            ],
          },
          {
            month: "3rd Stage",
            goals: [
              "200k",
              "300k",
              "1M",
              "10M",
              "100M",
              "Donate 5% to gorillafund.org",
            ],
          },
        ].map(({ goals, month }) => (
          <RoadMapCard key={month} month={month} goals={goals} />
        ))}
      </div>
    </section>
  );
};

export default RoadMapSection;
