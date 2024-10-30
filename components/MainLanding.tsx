"use client";
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
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Store,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const bannerSlides = [
    {
      image:
        "https://dummyimage.com/1200x400/fdc111/ffffff.png&text=Conectando+Regiones",
      title: "Conectando Regiones",
      description:
        "Uniendo emprendedores locales con consumidores en toda Colombia",
    },
    {
      image:
        "https://dummyimage.com/1200x400/fdc111/ffffff.png&text=Productos+Únicos",
      title: "Descubre Productos Únicos",
      description:
        "Explora una amplia variedad de productos locales y artesanales",
    },
    {
      image:
        "https://dummyimage.com/1200x400/fdc111/ffffff.png&text=Impulsa+tu+Negocio",
      title: "Impulsa tu Negocio",
      description: "Lleva tus productos a consumidores de toda Colombia",
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
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/consumer" passHref>
              <Button variant="ghost">Soy Consumidor</Button>
            </Link>
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
              Beneficios para Todos
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <ShoppingBag className="h-12 w-12 text-[#fdc111]" />
                  <h3 className="text-2xl font-bold text-center">
                    Para Consumidores
                  </h3>
                  <ul className="space-y-2 text-center">
                    <li>Acceso a productos locales únicos</li>
                    <li>Apoyo a emprendedores de tu región</li>
                    <li>Entrega a domicilio en zonas de difícil acceso</li>
                    <li>Compras a crédito sin intereses</li>
                  </ul>
                  <Button asChild>
                    <Link
                      href="/consumer"
                      style={{ backgroundColor: "#fdc111", color: "black" }}
                    >
                      Descubre Más
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Store className="h-12 w-12 text-[#fdc111]" />
                  <h3 className="text-2xl font-bold text-center">
                    Para Emprendedores
                  </h3>
                  <ul className="space-y-2 text-center">
                    <li>Amplía tu alcance a nivel nacional</li>
                    <li>Herramientas de gestión de ventas</li>
                    <li>Capacitación y soporte continuo</li>
                    <li>Visibilidad destacada en la plataforma</li>
                  </ul>
                  <Button asChild>
                    <Link
                      href="/entrepreneur"
                      style={{ backgroundColor: "#fdc111", color: "black" }}
                    >
                      Empieza a Vender
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="como-funciona"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6 mx-auto">
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
                    description: "Crea tu cuenta como consumidor o emprendedor",
                  },
                  {
                    icon: Store,
                    title: "Explora o Publica",
                    description:
                      "Descubre productos únicos o sube tus propios productos",
                  },
                  {
                    icon: ShoppingBag,
                    title: "Compra o Vende",
                    description: "Realiza pedidos o gestiona tus ventas",
                  },
                  {
                    icon: Truck,
                    title: "Recibe o Envía",
                    description:
                      "Disfruta de tus compras o prepara tus productos para envío",
                  },
                  {
                    icon: BarChart,
                    title: "Crece",
                    description:
                      "Apoya a emprendedores locales o expande tu negocio",
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
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Lo que Dicen Nuestros Usuarios
            </h2>
            <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <CarouselContent>
                {[
                  {
                    name: "María Gómez",
                    role: "Consumidora",
                    content:
                      "MerCOLonuestro me ha permitido descubrir productos increíbles de mi región que no conocía.",
                    image:
                      "https://dummyimage.com/80x80/fdc111/ffffff.png&text=MG",
                  },
                  {
                    name: "Juan Pérez",
                    role: "Emprendedor",
                    content:
                      "Gracias a esta plataforma, he podido expandir mi negocio de artesanías a nivel nacional.",
                    image:
                      "https://dummyimage.com/80x80/fdc111/ffffff.png&text=JP",
                  },
                  {
                    name: "Ana Rodríguez",
                    role: "Consumidora",
                    content:
                      "La facilidad de comprar a crédito sin intereses ha sido un gran alivio para mi economía.",
                    image:
                      "https://dummyimage.com/80x80/fdc111/ffffff.png&text=AR",
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#fdc111]">
          <div className="container px-4 md:px-6 text-center mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6 text-black">
              ¿Listo para Empezar?
            </h2>
            <p className="mb-8 text-xl text-gray-800">
              Únete a MerCOLonuestro y sé parte de la revolución del comercio
              local en Colombia
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/consumer" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  style={{ borderColor: "black", color: "black" }}
                >
                  Soy Consumidor
                </Button>
              </Link>
              <Link href="/entrepreneur" passHref>
                <Button
                  size="lg"
                  style={{ backgroundColor: "black", color: "#fdc111" }}
                >
                  Soy Emprendedor
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4  md:px-6 border-t">
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
