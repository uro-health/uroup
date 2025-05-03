
import React from "react";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const SymptomsSection = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">¿Tienes algún síntoma de prostatitis?</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
        <p className="mb-4 text-lg">
          Si tienes alguno de los siguientes síntomas, ¡puedes estar sufriendo de prostatitis!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <Check className="text-red-600" size={18} />
            </div>
            <p>Dolor en el área entre el recto y el escroto</p>
          </div>
          
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <Check className="text-red-600" size={18} />
            </div>
            <p>Ganas para orinar con frecuencia</p>
          </div>
          
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <Check className="text-red-600" size={18} />
            </div>
            <p>Diarrea o estreñimiento</p>
          </div>
          
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <Check className="text-red-600" size={18} />
            </div>
            <p>Indiferencia al sexo</p>
          </div>
          
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <Check className="text-red-600" size={18} />
            </div>
            <p>Dificultades y dolores al orinar o al eyacular</p>
          </div>
          
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <Check className="text-red-600" size={18} />
            </div>
            <p>Erección débil</p>
          </div>
          
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <Check className="text-red-600" size={18} />
            </div>
            <p>Sangre en la orina y el semen</p>
          </div>
          
          <div className="flex items-center">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <Check className="text-red-600" size={18} />
            </div>
            <p>Dolor y molestias en el pene o los testículos</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="font-bold text-lg text-blue-800 mb-3">Principales síntomas urinarios de la prostatitis:</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="p-4 bg-white">
            <h4 className="font-semibold text-blue-700 mb-2">Ardor y dolor al orinar</h4>
            <p className="text-gray-600 text-sm">
              Sensación de quemazón o malestar durante la micción
            </p>
          </Card>
          
          <Card className="p-4 bg-white">
            <h4 className="font-semibold text-blue-700 mb-2">Vaciado incompleto</h4>
            <p className="text-gray-600 text-sm">
              Sensación de que la vejiga no se ha vaciado completamente
            </p>
          </Card>
          
          <Card className="p-4 bg-white">
            <h4 className="font-semibold text-blue-700 mb-2">Urgencia urinaria</h4>
            <p className="text-gray-600 text-sm">
              Sensación repentina e intensa de necesidad de orinar
            </p>
          </Card>
          
          <Card className="p-4 bg-white">
            <h4 className="font-semibold text-blue-700 mb-2">Nicturia</h4>
            <p className="text-gray-600 text-sm">
              Necesidad de levantarse más de una vez por noche para orinar
            </p>
          </Card>
          
          <Card className="p-4 bg-white">
            <h4 className="font-semibold text-blue-700 mb-2">Goteo post-miccional</h4>
            <p className="text-gray-600 text-sm">
              Gotas de orina después de terminar de orinar
            </p>
          </Card>
          
          <Card className="p-4 bg-white">
            <h4 className="font-semibold text-blue-700 mb-2">Dolor abdominal</h4>
            <p className="text-gray-600 text-sm">
              Dolor en la parte baja del abdomen o en la zona pélvica
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SymptomsSection;
