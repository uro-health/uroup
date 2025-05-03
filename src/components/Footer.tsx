
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Uro UP Forte</h3>
            <p className="text-gray-300 mb-4">
              La solución natural para problemas prostáticos y restauración de la función sexual.
            </p>
            <div className="flex space-x-2">
              <div className="bg-blue-800 rounded-full p-2">
                <span className="text-xs">Hecho en Europa</span>
              </div>
              <div className="bg-blue-800 rounded-full p-2">
                <span className="text-xs">Desarrollo Israelí</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">Beneficios</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Testimonios</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Información Médica</a>
              </li>
              <li>
                <a href="#alternative-products" className="hover:text-white">Productos Alternativos</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">¡Mejora Tu Salud Ahora!</h3>
            <p className="text-gray-300 mb-4">
              No esperes más para mejorar tu calidad de vida. Uro UP Forte te ofrece una solución efectiva.
            </p>
            <a href="https://ghh5o.doctortrf.com/l" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                ¡Comprar Ahora! <ArrowRight className="ml-2" size={16} />
              </Button>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Uro UP Forte. Todos los derechos reservados.</p>
          <p className="mt-2">
            Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad. 
            Consulte a un profesional de la salud antes de usar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
