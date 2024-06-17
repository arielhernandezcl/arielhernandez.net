type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "hola@arielhernandez.net",
  title: "Hola, Soy Ariel 👋",
  // profile: "/profile.webp",
  description:
    "Soy un desarrolador fullstack que me especializo en distintas tecnologias",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/arielhernandezcl/",
    },
    {
      label: "Github",
      link: "https://github.com/arielhernandezcl",
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/arielhernandezcl/",
    },
    {
      label: "Whatsapp",
      link: "https://api.whatsapp.com/send/?phone=56967215785",
    },
  ],
};

export default presentation;
