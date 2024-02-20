import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "images/ava1.jpg",
    name: "Negative",
    userName: "90%",
    comment: "الخدمة الصحية في هاد البلاد ما كايناش استقرار، دايما مشاكل وتأخير في العلاج",
  },
  {
    image: "images/ava2.jpg",
    name: "Negative",
    userName: "95%",
    comment:
      "خدمة عند الشركة ديال الاتصالات هي الأسوأ، ماشي مرتاحة نهائيا ",
  },

  {
    image: "images/ava3.jpg",
    name: "Positive",
    userName: "93%",
    comment:
      " .الموسيقى هي لغة الروح، كل مرة نسمعها كنحس بالإيجابية والطاقة ",
  },
  {
    image: "images/ava2.jpg",
    name: "Negative",
    userName: "60%",
    comment:
"السيارة ديالي دايما في الإصلاح، كل مرة تعطل عليا",
  },
  {
    image: "images/ava1.jpg",
    name: "Negative",
    userName: "95%",
    comment:
      "السكن في هاد الحي خطير بزاف، كل شوية في حوادث وسرقات.",
  },
  {
    image: "images/ava3.jpg",
    name: "Positive",
    userName: "90%",
    comment:
      " .الأصدقاء الحقيقيين هم ديما معايا في الضحك والسعادة ",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
      Exemple 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          d'intégration {" "}
        </span>
        de notre application  à des posts 
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      quelques échantillons de résultats concrets obtenus grâce à notre application lorsqu'on donne une publication
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
