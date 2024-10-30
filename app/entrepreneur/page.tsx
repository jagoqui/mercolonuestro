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
  BarChart,
  Check,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Store,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EntrepreneurLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const bannerSlides = [
    {
      image:
        "https://dummyimage.com/1200x400/fdc111/ffffff.png&text=Impulsa+tu+Negocio",
      title: "Impulsa tu Negocio",
      description: "Lleva tus productos a consumidores de toda Colombia",
    },
    {
      image:
        "https://dummyimage.com/1200x400/fdc111/ffffff.png&text=Herramientas+de+Gestión",
      title: "Herramientas de Gestión",
      description:
        "Administra tus ventas y crecimiento con nuestras potentes herramientas",
    },
    {
      image:
        "https://dummyimage.com/1200x400/fdc111/ffffff.png&text=Soporte+Continuo",
      title: "Soporte Continuo",
      description: "Recibe capacitación y asistencia para impulsar tu negocio",
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
            <Link href="/consumer" passHref>
              <Button style={{ backgroundColor: "#fdc111", color: "black" }}>
                Soy Consumidor
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
          <div className="container px-4 md:px-6 m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Beneficios para Emprendedores
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Store className="h-12 w-12 text-[#fdc111]" />
                  <h3 className="text-xl font-bold text-center">
                    Amplía tu Alcance
                  </h3>
                  <p className="text-center">
                    Llega a consumidores de toda Colombia y expande tu negocio a
                    nivel nacional.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <BarChart className="h-12 w-12 text-[#fdc111]" />
                  <h3 className="text-xl font-bold text-center">
                    Herramientas de Gestión
                  </h3>
                  <p className="text-center">
                    Accede a potentes herramientas para administrar tus ventas y
                    crecimiento.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-[#fdc111]" />
                  <h3 className="text-xl font-bold text-center">
                    Soporte Continuo
                  </h3>
                  <p className="text-center">
                    Recibe capacitación y asistencia para impulsar tu negocio en
                    la plataforma.
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
                    icon: Users,
                    title: "Regístrate",
                    description:
                      "Crea tu cuenta de emprendedor y configura tu perfil",
                  },
                  {
                    icon: Store,
                    title: "Sube tus Productos",
                    description:
                      "Añade tus productos o servicios a la plataforma",
                  },
                  {
                    icon: DollarSign,
                    title: "Recibe Pedidos",
                    description:
                      "Gestiona los pedidos que llegan a través de la plataforma",
                  },
                  {
                    icon: Truck,
                    title: "Prepara y Envía",
                    description:
                      "Prepara los productos para su envío a los clientes",
                  },
                  {
                    icon: BarChart,
                    title: "Haz Crecer tu Negocio",
                    description:
                      "Utiliza nuestras herramientas para expandir tu alcance",
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
              Historias de Éxito
            </h2>
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent>
                {[
                  {
                    name: "Juan Pérez",
                    role: "Artesano",
                    content:
                      "Gracias a MerCOLonuestro, he podido expandir mi negocio de artesanías a nivel nacional.",
                    image:
                      "https://dummyimage.com/80x80/fdc111/ffffff.png&text=JP",
                  },
                  {
                    name: "Laura Gómez",
                    role: "Agricultora",
                    content:
                      "La plataforma me ha permitido conectar directamente con consumidores de todo el país.",
                    image:
                      "https://dummyimage.com/80x80/fdc111/ffffff.png&text=LG",
                  },
                  {
                    name: "Carlos Ramírez",
                    role: "Emprendedor",
                    content:
                      "Las herramientas de gestión y el soporte que ofrece MerCOLonuestro han sido fundamentales para el crecimiento de mi negocio.",
                    image:
                      "https://dummyimage.com/80x80/fdc111/ffffff.png&text=CR",
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
                          <p className="text-sm text-gray-500">
                            {testimonial.role}
                          </p>
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
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" /> Listado
                      de productos ilimitado
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" />{" "}
                      Herramientas básicas de gestión
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" /> Soporte
                      por chat
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" /> Pagos
                      seguros
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
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" />{" "}
                      Publicidad destacada
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" />{" "}
                      Herramientas avanzadas de análisis
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" />{" "}
                      Capacitación personalizada
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#fdc111]" /> Soporte
                      prioritario
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
                  ¿Cómo puedo empezar a vender en MerCOLonuestro?
                </AccordionTrigger>
                <AccordionContent>
                  Para comenzar a vender, regístrate como emprendedor en nuestra
                  plataforma, configura tu perfil de negocio y sube tus
                  productos. Una vez aprobado, podrás empezar a recibir pedidos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  ¿Qué comisiones cobra MerCOLonuestro por las ventas?
                </AccordionTrigger>
                <AccordionContent>
                  Nuestras comisiones son competitivas y varían según el plan
                  que elijas. El plan Básico tiene una comisión estándar,
                  mientras que el plan Premium ofrece comisiones reducidas.
                  Consulta los detalles específicos en la sección de planes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  ¿Cómo se manejan los envíos de los productos?
                </AccordionTrigger>
                <AccordionContent>
                  Ofrecemos integración con diversos servicios de envío. Puedes
                  elegir gestionar tus propios envíos o utilizar nuestros
                  servicios logísticos asociados para llegar a todo el país.
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
