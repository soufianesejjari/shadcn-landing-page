import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[70px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
  <MedalIcon />
  </div>
  <div>
    <CardTitle>Optimisation de la stratégie marketing</CardTitle>
    <CardDescription className="text-md mt-2">
      L'application d'analyse des sentiments permet aux entreprises de comprendre les réactions émotionnelles des consommateurs à leurs campagnes marketing.
    </CardDescription>
  </div>
</CardHeader>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-20 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Avis des Marocains</CardTitle>
            <CardDescription className="text-md mt-2">
            Découvrez et Analysez les Impressions et les Points de Vue Variés des Marocains Concernant Divers Sujets et Thématiques, Afin de Comprendre les Tendances, les Préférences et les Attentes de la Population Marocaine, et ainsi, Prendre des Décisions Éclairées et Pertinentes.
            </CardDescription>
          </div>
        </CardHeader>


      </Card>

      {/* Pricing */}
      <Card className="absolute top-[207px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
  <CardHeader>
    <CardTitle className="flex item-center justify-between">
      Gratuit
      <Badge
        variant="secondary"
        className="text-sm text-primary"
      >
        Le plus populaire
      </Badge>
    </CardTitle>
    <div>
      <span className="text-3xl font-bold">0€</span>
      <span className="text-muted-foreground"> /mois</span>
    </div>

    <CardDescription>
    Profitez d'un essai gratuit de notre application.
    </CardDescription>
  </CardHeader>

  <CardContent>
    <Button className="w-full">Commencer l'essai gratuit</Button>
  </CardContent>

  <hr className="w-4/5 m-auto mb-4" />

  <CardFooter className="flex">
    <div className="space-y-4">
      {["4 membres d'équipe", "4 Go de stockage", "Jusqu'à 6 pages"].map(
        (benefit: string) => (
          <span
            key={benefit}
            className="flex"
          >
            <Check className="text-green-500" />{" "}
            <h3 className="ml-2">{benefit}</h3>
          </span>
        )
      )}
    </div>
  </CardFooter>
</Card>
    </div>
  );
};
