import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { TOKEN_NAME } from "@/data/config";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionTitle title={`About ${TOKEN_NAME}`} />
      <Card className="max-w-[600px]">
        <span className="card-body flex flex-wrap  items-center justify-center">
          <img className="object-contain" src="/images/birthday.png" />
          <span>
            🦍<b>Harambe</b> was born at the Gladys Porter Zoo in Brownsville,
            Texas, on <b>May 27, 1999</b>. <br />
            He was named by Dan Van Coppenolle, a local area counselor who won a
            naming contest sponsored by the zoo. He came up with the name after
            listening to the 1988 song{" "}
            <strong>"Harambe (Working Together for Freedom)"</strong> by Rita
            Marley, widow of Bob Marley. 🎉Lets celebrate Harambe birthday with
            <br />
            <strong>$HBH TOKEN</strong>
            <br />
            Dicks out for Harambe!
          </span>
        </span>
      </Card>
    </section>
  );
};

export default AboutSection;
