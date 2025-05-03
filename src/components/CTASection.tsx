
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = ({ primary = false }) => {
  const scrollToProducts = () => {
    const section = document.getElementById("alternative-products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (primary) {
    return (
      <div className="mt-12 mb-8 text-center bg-white p-6 rounded-lg shadow-lg border border-red-200">
        <div className="mb-4">
          <span className="inline-block bg-red-600 text-white text-2xl font-bold py-2 px-4 rounded-full animate-pulse">
            ¡OFERTA ESPECIAL! 50% DE DESCUENTO
          </span>
        </div>
        
        <h2 className="text-2xl font-bold text-blue-800 mb-2">¡No pierdas esta oportunidad!</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center mb-6">
          <div className="text-right mr-0 md:mr-4 mb-4 md:mb-0">
            <span className="block text-gray-500 line-through text-xl">Precio normal: 1180 MXN</span>
          </div>
          <div className="text-left">
            <span className="block text-red-600 font-bold text-2xl">¡Ahora solo 590 MXN!</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Esta oferta es por tiempo limitado. Actúa ahora y mejora tu salud prostática 
          con Uro UP Forte al mejor precio disponible.
        </p>
        
        <a href="https://ghh5o.doctortrf.com/l" target="_blank" rel="noopener noreferrer">
          <Button className="bg-green-600 hover:bg-green-700 text-white text-xl py-6 px-8 transform transition duration-300 hover:scale-105">
            ¡COMPRAR CON 50% DE DESCUENTO! <ArrowRight className="ml-2" size={20} />
          </Button>
        </a>
        
        <p className="mt-4 text-gray-500">
          ¿Buscas otras opciones? <button onClick={scrollToProducts} className="text-blue-600 underline">Ver productos alternativos</button>
        </p>
      </div>
    );
  }

  return (
    <div className="my-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white text-center">
      <h2 className="text-2xl font-bold mb-4">¡Mejora Tu Salud Prostática Hoy!</h2>
      <p className="mb-6 max-w-2xl mx-auto">
        No esperes a que los síntomas empeoren. Uro UP Forte ofrece una solución natural 
        y efectiva para problemas de próstata y función sexual.
      </p>
      <a href="https://ghh5o.doctortrf.com/l" target="_blank" rel="noopener noreferrer">
        <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-8">
          Obtener Uro UP Forte Ahora
        </Button>
      </a>
    </div>
  );
};

export default CTASection;
