"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  ShoppingBag,
  Truck,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const testimonials = [
  {
    name: "María Gómez",
    location: "Artesana de La Guajira",
    comment:
      "Gracias a MerCOLonuestro, mis mochilas wayúu ahora llegan a todo el país. ¡Mis ventas se han triplicado!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Carlos Rodríguez",
    location: "Caficultor del Eje Cafetero",
    comment:
      "La plataforma me ha permitido vender mi café directamente a los consumidores. El apoyo en logística es invaluable.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Ana Martínez",
    location: "Emprendedora de Medellín",
    comment:
      "La capacitación gratuita me dio las herramientas para digitalizar mi negocio. Ahora tengo clientes en todo Colombia.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

const services = [
  "Ecommerce de productos y servicios, por medio de una app web y mobile.",
  "Plataforma de aprendizaje guiado para el comercio digital.",
  "Marketplace segmentado por regiones y categorías (Cauca/Ganadería).",
  "Alianzas estratégicas con otros Ecommerce para manejar plan de referidos y comisiones.",
  "Plataforma con sistema de domicilios y entregas.",
  "Plataforma de Suscripciones Personalizadas de Productos y servicios.",
  "Marketing digital por medio de redes sociales y conjuntos residenciales.",
  "Plataforma de Alquiler de Equipos y Herramientas.",
  "Alianzas con entidades financieras para créditos.",
  "Sección destacada para venta y compra de productos de nuestros colombianos. (Sin intermediarios)",
];

const trustedCompanies = [
  {
    name: "Empresa 1",
    logo: "https://storage.googleapis.com/larecetta-ibis-images/Zenu120.png",
  },
  {
    name: "Empresa 2",
    logo: "https://storage.googleapis.com/larecetta-ibis-images/LogoMonticello2023.png",
  },
  {
    name: "Empresa 3",
    logo: "https://storage.googleapis.com/larecetta-ibis-images/Santander.png",
  },
  {
    name: "Empresa 4",
    logo: "https://storage.googleapis.com/larecetta-ibis-images/Sinfonia.png",
  },
  {
    name: "Empresa 5",
    logo: "https://storage.googleapis.com/larecetta-ibis-images/Cunit120.png",
  },
];

export function LandingPageComponent() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCompany, setCurrentCompany] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompany((prev) => (prev + 1) % trustedCompanies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/images/mercalonuestro-logo.png"
            alt="MerCOLonuestro Logo"
            width={240}
            height={65}
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 hover:text-gray-900"
            href="#features"
          >
            Características
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 hover:text-gray-900"
            href="#services"
          >
            Servicios
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 hover:text-gray-900"
            href="#contact"
          >
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <Image
            src="https://images.unsplash.com/photo-1518481852452-9415b262eba4?w=1200&h=600&fit=crop"
            alt="Paisaje colombiano"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <div className="container px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  MerCOLonuestro
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Conectando emprendedores colombianos con el mundo. Un
                  marketplace para todas las regiones.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="text-white bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                  Empezar ahora
                </Button>
                <Button
                  variant="outline"
                  className="border-white hover:bg-white hover:text-gray-900"
                >
                  Saber más
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          id="features"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900">
              Nuestras Soluciones
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-50">
                <CardHeader>
                  <ShoppingBag className="h-8 w-8 mb-2 text-yellow-500" />
                  <CardTitle className="text-gray-900">
                    Marketplace Especializado
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  Conectamos directamente a pequeños productores rurales con
                  consumidores finales y comercios locales, eliminando
                  intermediarios y ofreciendo precios justos.
                </CardContent>
              </Card>
              <Card className="bg-gray-50">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-yellow-500" />
                  <CardTitle className="text-gray-900">
                    Ecommerce Cooperativo
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  Los productores pueden unirse en grupos para vender sus
                  productos en conjunto, reduciendo costos y ofreciendo una
                  mayor variedad.
                </CardContent>
              </Card>
              <Card className="bg-gray-50">
                <CardHeader>
                  <Truck className="h-8 w-8 mb-2 text-yellow-500" />
                  <CardTitle className="text-gray-900">
                    Modelo de Suscripción
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700">
                  Los consumidores reciben productos frescos de manera
                  recurrente, garantizando ingresos estables para los
                  productores y oferta constante para los clientes.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
          id="services"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900">
              Nuestros Servicios
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?w=600&h=400&fit=crop"
                  alt="Productos colombianos"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <ul className="grid gap-4 md:order-1">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-yellow-500" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900">
              Empresas que Confían en Nosotros
            </h2>
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentCompany * 100}%)` }}
              >
                {trustedCompanies.map((company, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex justify-center items-center"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900">
              Historias de Éxito
            </h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${currentTestimonial * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Card className="h-full bg-white">
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                            <div>
                              <CardTitle className="text-gray-900">
                                {testimonial.name}
                              </CardTitle>
                              <p className="text-sm text-gray-600">
                                {testimonial.location}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="italic text-gray-700">
                            {testimonial.comment}
                          </p>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 text-yellow-500 fill-current"
                              />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-gray-900 hover:bg-gray-100"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-gray-900 hover:bg-gray-100"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
          id="contact"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Únete a la revolución del comercio regional
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Sé parte de MerCOLonuestro y ayuda a construir un país más
                  equitativo y próspero.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="flex-1 bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Ingresa tu correo"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                  >
                    Suscribirse
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  Suscríbete para recibir actualizaciones y noticias sobre el
                  lanzamiento.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100">
        <p className="text-xs text-gray-700">
          © 2024 MerCOLonuestro. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-700"
            href="#"
          >
            Términos de Servicio
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-700"
            href="#"
          >
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
