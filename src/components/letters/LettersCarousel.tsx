import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Letters } from "./Letters";

export const LettersCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {lettersContent.map((letter, key) => (
            <CarouselItem key={key}>
              <Letters letter={letter.text} img={letter.image} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="font-medium text-center text-sm">
        <p>
          Letter {current} of {count}
        </p>
      </div>
    </>
  );
};

const lettersContent = [
  {
    text: "Es extraño el hecho de venir y querer escribir una carta o redactar algo, seguramente esté siendo igual de extraño para ti, pero es tanto el deseo de querer materializar todo esto que estoy viviendo a tu lado, algo inexplicable, inigualable e inimaginable si me lo hubieran dicho el día que nos conocimos",
    image: "/kitten-intro.gif",
  },
  {
    text: "Gracias a ti pude darme cuenta que nunca fue demasiado lo que tanto le pedía a Diosito y a la vida, esa mujer amorosa, sin miedo a expresar lo que siente por mí, esa mujer trabajadora, valiente, perseverante, madura, divertida, preciosa, enojona 🤣, única en todo sentido y... picosa 🙈 que tanto amo",
    image: "/kitten-2.gif",
  },
  {
    text: "Creo que nunca me cansaré de decirte lo mucho que te amo, lo valiosa que eres y como te has convertido en mi prioridad en tan poco tiempo, pareciera que al hablar contigo el tiempo pasa volando como si nos conociéramos de años, queda mucho camino por recorrer, pero estoy seguro que será mucho más fácil si lo recorremos juntos",
    image: "/kitten-4.gif",
  },
  {
    text: "Siempre pensé que frases como 'todo llega a su tiempo' eran demasiadas cliché para mi, pero hoy me doy cuenta que es más real de lo que pensaba, cause cuando menos lo buscaba y cuando menos lo esperaba, apareciste en mi vida, convirtiéndote en lo más bonito y valioso que jamás me había pasado, so... tengo una pregunta importante que hacerte...",
    image: "kitten-3.gif",
  },
];
