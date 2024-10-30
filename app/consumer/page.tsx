"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Gift,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ConsumerLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const bannerSlides = [
    {
      image:
        "https://dummyimage.com/1200x400/fdc111/ffffff.png&text=Descubre+Productos+Locales",
      title: "Descubre Productos Locales",
      description:
        "Explora una amplia variedad de productos únicos de toda Colombia",
    },
    {
      image:
        "https://dummyimage.com/1200x400/fdc111/ffffff.png&text=Apoya+Emprendedores",
      title: "Apoya a Emprendedores Locales",
      description:
        "Cada compra impulsa el crecimiento de pequeños negocios en tu región",
    },
    {
      image:
        "https://dummyimage.com/1200x400/fdc111/ffffff.png&text=Entrega+a+Domicilio",
      title: "Entrega a Domicilio",
      description: "Recibe tus productos favoritos directamente en tu hogar",
    },
  ];

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerSlides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [autoplay, bannerSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerSlides.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + bannerSlides.length) % bannerSlides.length
    );
    setAutoplay(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl mx-auto px-4">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Image
                src="https://dummyimage.com/32x32/fdc111/ffffff.png&text=M"
                alt="MerCOLonuestro Logo"
                width={32}
                height={32}
              />
              <span className="hidden font-bold sm:inline-block">
                MerCOLonuestro
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#beneficios">Beneficios</Link>
              <Link href="#como-funciona">Cómo Funciona</Link>
              <Link href="#testimonios">Testimonios</Link>
              <Link href="#planes">Planes</Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost">Iniciar Sesión</Button>
            <Button style={{ backgroundColor: "#fdc111", color: "black" }}>
              Registrarse
            </Button>
            <Link href="/entrepreneur" passHref>
              <Button style={{ backgroundColor: "#fdc111", color: "black" }}>
                Soy Emprendedor
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full">
          <div className="relative h-[400px] overflow-hidden">
            {bannerSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6 text-black" />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6 text-black" />
          </button>
        </section>
        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Beneficios para Consumidores
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <ShoppingBag className="h-12 w-12 text-[#fdc111]" />
                  <h3 className="text-xl font-bold text-center">
                    Productos Únicos
                  </h3>
                  <p className="text-center">
                    Accede a una amplia variedad de productos locales y
                    artesanales de toda Colombia.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Truck className="h-12 w-12 text-[#fdc111]" />
                  <h3 className="text-xl font-bold text-center">
                    Entrega a Domicilio
                  </h3>
                  <p className="text-center">
                    Recibe tus compras directamente en tu hogar, incluso en
                    zonas de difícil acceso.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <CreditCard className="h-12 w-12 text-[#fdc111]" />
                  <h3 className="text-xl font-bold text-center">
                    Compras a Crédito
                  </h3>
                  <p className="text-center">
                    Aprovecha nuestras opciones de compra a crédito sin
                    intereses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="como-funciona"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Cómo Funciona
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#fdc111]"></div>
              <div className="space-y-12">
                {[
                  {
                    icon: ShoppingBag,
                    title: "Explora",
                    description: "Descubre productos únicos de toda Colombia",
                  },
                  {
                    icon: CreditCard,
                    title: "Compra",
                    description: "Realiza tu pedido de forma segura",
                  },
                  {
                    icon: Truck,
                    title: "Recibe",
                    description: "Espera la entrega de tus productos en casa",
                  },
                  {
                    icon: Gift,
                    title: "Disfruta",
                    description: "Apoya a emprendedores locales con tu compra",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative flex items-center">
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${
                        index % 2 === 0
                          ? "bg-[#fdc111]"
                          : "bg-white border-4 border-[#fdc111]"
                      } flex items-center justify-center`}
                    >
                      <step.icon
                        className={`h-6 w-6 ${
                          index % 2 === 0 ? "text-white" : "text-[#fdc111]"
                        }`}
                      />
                    </div>
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Lo que Dicen Nuestros Clientes
            </h2>
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent>
                {[
                  {
                    name: "María Gómez",
                    content:
                      "MerCOLonuestro me ha permitido descubrir productos increíbles de mi región que no conocía.",
                    image:
                      "https://dummyimage.com/80x80/fdc111/ffffff.png&text=MG",
                  },
                  {
                    name: "Carlos Rodríguez",
                    content:
                      "La facilidad de comprar a crédito sin intereses ha sido un gran alivio para mi economía.",
                    image:
                      "https://dummyimage.com/80x80/fdc111/ffffff.png&text=CR",
                  },
                  {
                    name: "Ana Martínez",
                    content:
                      "Me encanta poder apoyar a los emprendedores locales y recibir productos de alta calidad.",
                    image:
                      "https://dummyimage.com/80x80/fdc111/ffffff.png&text=AM",
                  },
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <Image
                          alt={testimonial.name}
                          className="rounded-full"
                          height="80"
                          src={testimonial.image}
                          style={{
                            aspectRatio: "80/80",
                            objectFit: "cover",
                          }}
                          width="80"
                        />
                        <div className="text-center">
                          <h3 className="font-bold">{testimonial.name}</h3>
                        </div>
                        <p className="text-center italic">
                          {testimonial.content}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section
          id="planes"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Nuestros Planes
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <h3 className="text-2xl font-bold">Plan Básico</h3>
                  <p className="text-4xl font-bold">Gratis</p>
                  <ul className="space-y-2 text-center">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" /> Acceso a
                      productos de alta calidad
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" /> Servicio
                      de domicilios
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" /> Chatbot
                      de asistencia
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" />{" "}
                      Múltiples métodos de pago seguros
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    style={{ backgroundColor: "#fdc111", color: "black" }}
                  >
                    Comenzar Gratis
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <h3 className="text-2xl font-bold">Plan Premium</h3>
                  <p className="text-4xl font-bold">
                    8.900 COP<span className="text-sm font-normal">/mes</span>
                  </p>
                  <ul className="space-y-2 text-center">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" /> Todo lo
                      del plan Básico
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" /> Compras
                      a crédito sin intereses
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" />{" "}
                      Descuentos exclusivos
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" /> Atención
                      al cliente prioritaria
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" /> Envíos
                      gratis en compras superiores a 100.000 COP
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    style={{ backgroundColor: "#fdc111", color: "black" }}
                  >
                    Suscribirse al Plan Premium
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿Cómo puedo registrarme en MerCOLonuestro?
                </AccordionTrigger>
                <AccordionContent>
                  Para registrarte, haz clic en el botón &quot;Registrarse&quot;
                  en la parte superior de la página. Completa el formulario con
                  tus datos personales y ¡listo! Ya podrás empezar a explorar y
                  comprar productos locales.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  ¿Cuáles son los métodos de pago disponibles?
                </AccordionTrigger>
                <AccordionContent>
                  Aceptamos diversos métodos de pago, incluyendo tarjetas de
                  crédito y débito, transferencias bancarias y pagos en efectivo
                  a través de puntos de pago autorizados. Además, ofrecemos la
                  opción de compras a crédito sin intereses para usuarios
                  Premium.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  ¿Cómo funciona la entrega a domicilio?
                </AccordionTrigger>
                <AccordionContent>
                  Nuestro servicio de entrega a domicilio cubre todo el
                  territorio nacional, incluyendo zonas de difícil acceso. Los
                  tiempos de entrega pueden variar según la ubicación, pero nos
                  esforzamos por entregar tus productos en el menor tiempo
                  posible.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 MerCOLonuestro. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
