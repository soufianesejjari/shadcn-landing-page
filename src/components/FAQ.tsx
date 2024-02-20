import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Quel est le but de cette application web ?",
    answer: "L'objectif principal de cette application est d'analyser les commentaires en darija sur les réseaux sociaux en utilisant un modèle de classification de sentiments.",
    value: "item-1",
  },
  {
    question: "Qui peut utiliser cette application ?",
    answer:
      "Cette application est conçue pour les utilisateurs intéressés par l'analyse des sentiments dans les commentaires en darija.",
    value: "item-2",
  },
  {
    question:
      "Pouvez-vous expliquer le modèle de classification de sentiments utilisé dans cette application ?",
    answer:
      "Le modèle de classification de sentiments est détaillé sur une page spécifique, y compris son processus d'entraînement, ses caractéristiques, ses points forts et limitations, ainsi que ses métriques de performance.",
    value: "item-3",
  },
  {
    question: "Est-ce que cette application est compatible avec différents dispositifs ?",
    answer: "Oui, l'application est réactive et peut être utilisée sur divers dispositifs, respectant ainsi les principes d'accessibilité pour une utilisation par un large public.",
    value: "item-4",
  },
  {
    question:
      "Quels sont les avantages distinctifs de cette application en termes d'analyse des commentaires en darija par rapport à d'autres outils similaires disponibles sur le marché ?",
    answer:
      "Cette question permettrait d'identifier les caractéristiques uniques de l'application qui la rendent particulièrement efficace pour l'analyse des commentaires en darija, comme ses algorithmes de classification avancés, ses capacités de visualisation de données, ou ses fonctionnalités de personnalisation des résultats.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
      Vous avez d'autres questions ?{" "}
        <a
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
         Contactez-nous
        </a>
      </h3>
    </section>
  );
};
