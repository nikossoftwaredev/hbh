import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { TOKEN_NAME, TOKEN_SYMBOL } from "@/data/config";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionTitle title={`About ${TOKEN_SYMBOL}`} />
      <Card className="max-w-[600px]">
        <span className="card-body flex flex-wrap  items-center justify-center">
          <img className="object-contain" src="/images/logo.png" />
          <span>
            <b className="text-primary">Jabba the Hutt</b> is a major antagonist
            in the Star Wars franchise, created by George Lucas. Voiced by Larry
            Ward and portrayed by a team of puppeteers in Return of the Jedi,
            Jabba is a large slug-like creature inspired by annelid worms.
            <br /> Originally intended to appear in Star Wars (1977) as a stop
            motion character with Declan Mulholland as a stand-in, Jabba was
            later added as a CGI character in the 1997 Special Edition
            re-release. He also appears in The Phantom Menace.
            <br /> This time, Jabba is humorously referred to as{" "}
            <b className="text-primary">Jabba Wif Hat</b> sporting a stylish
            hat.
          </span>
        </span>
      </Card>
    </section>
  );
};

export default AboutSection;
