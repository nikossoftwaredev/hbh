import Card from "@/components/Card";
import JupiterTerminal from "@/components/JupiterTerminal";
import { SectionTitle } from "@/components/SectionTitle";
import { PUMP_URL, RAYDIUM_URL, TOKEN_SYMBOL } from "@/data/config";

const StepCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Card className="max-w-[600px]">
      <div className="card-body flex flex-col md:flex-row items-center justify-start gap-10">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-[100px] h-[100px] object-contain"
        />
        <span className="space-y-2 flex flex-col items-center">
          <h2 className="font-extrabold text-2xl text-primary">{title}</h2>
          <p className="text-center">{description}</p>
        </span>
      </div>
    </Card>
  );
};

const HowToBuySection = () => {
  return (
    <section
      id="buy"
      className="grid grid-cols-1 grid-flow-row items-center gap-8"
    >
      <SectionTitle title="HOW TO BUY" />
      <a href={PUMP_URL} target="_blank" className="btn  btn-accent">
        Buy before Raydium <img src="/images/pump.webp" />
      </a>
      <SectionTitle title="Buy from Jupiter" />
      <JupiterTerminal />
    </section>
  );
};

export default HowToBuySection;
