import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Gratuit",
    popular: 0,
    price: 0,
    description:
      "Bénéficiez d'un accès illimité à toutes nos fonctionnalités sans dépenser un sou.",
    buttonText: "Commencer",
    benefitList: [
      "1 membre d'équipe",
      "2 Go de stockage",
      "Jusqu'à 4 pages",
      "Support communautaire",
      "Lorem ipsum dolor",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 5,
    description:
      "Accédez à notre version Premium pour seulement 5 $ par mois et bénéficiez de fonctionnalités exclusives.",
    buttonText: "Essai gratuit",
    benefitList: [
      "4 membres d'équipe",
      "4 Go de stockage",
      "Jusqu'à 6 pages",
      "Support prioritaire",
      "Lorem ipsum dolor",
    ],
  },
  {
    title: "Entreprise",
    popular: 0,
    price: 40,
    description:
      "Optez pour notre formule entreprise et bénéficiez de fonctionnalités avancées pour seulement 40 $ par mois.",
    buttonText: "Nous Contacter",
    benefitList: [
      "10 membres d'équipe",
      "8 Go de stockage",
      "Jusqu'à 10 pages",
      "Support prioritaire",
      "Lorem ipsum dolor",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Accédez à
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          l'Illimité{" "}
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Bénéficiez d'un accès complet à toutes nos fonctionnalités avec nos différents plans tarifaires.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Plus Populaire
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price} $</span>
                <span className="text-muted-foreground"> /mois</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
