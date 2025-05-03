
import React from "react";
import { Star, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainProduct = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      <div className="md:w-1/2">
        <img 
          src="/lovable-uploads/c5663232-7d84-4f86-a596-908f076840d2.png" 
          alt="Uro UP Forte - Suplemento para la salud prostática" 
          className="rounded-lg shadow-md w-full"
        />
        <div className="flex items-center mt-4 justify-center md:justify-start">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className="text-yellow-400 fill-yellow-400 w-5 h-5" 
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600">5.0 (124 reseñas verificadas)</span>
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Uro UP Forte - Salud Prostática</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
              <p>Composición 100% natural de origen vegetal</p>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
              <p>Elimina la inflamación de la próstata</p>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
              <p>Alivia el dolor y ardor uretral</p>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
              <p>Restaura la función eréctil</p>
            </div>
            <div className="flex items-start">
              <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
              <p>Aumenta la libido y la producción de testosterona</p>
            </div>
          </div>

          <div className="border-t border-b border-gray-200 py-4 my-6">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-500 line-through text-sm">1180 MXN</span>
                <div className="text-2xl font-bold text-red-600">Preço com 50% OFF: 590 MXN</div>
                <p className="text-gray-600 text-sm">Envío gratis + Garantía de devolución</p>
              </div>
              <div className="bg-red-100 text-red-800 p-2 rounded-full font-bold">
                -50%
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a href="https://ghh5o.doctortrf.com/l" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-xl py-6">
                Comprar Ahora <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
            <p className="text-center text-gray-500 text-sm">
              Hecho en Europa · Desarrollado en Israel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
