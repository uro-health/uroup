
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ProstatitisInfo = () => {
  const [showMore, setShowMore] = useState(false);
  
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">¿Qué es la Prostatitis y Por Qué Debes Combatirla?</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">
          La prostatitis es una patología que se manifiesta como una inflamación o infección de la próstata. 
          Según el Foro Europeo de Asociaciones Médicas, entre el 35% y el 50% de los hombres en Europa 
          sufren de esta enfermedad.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <h3 className="font-bold text-red-600 mb-2">¡Atención!</h3>
          <p>
            La prostatitis crónica suele desarrollarse de forma latente, sin síntomas avanzados.
            El principal síntoma de la prostatitis son los trastornos urinarios.
          </p>
        </div>

        <p className="text-gray-700 mb-4">
          No seas indiferente a tu salud. La prostatitis puede provocar infertilidad e incluso cáncer. 
          Solo hay un paso entre una frecuente micción y el cáncer de próstata. En el nivel inicial, 
          la enfermedad puede pasar bastante desapercibida, pero los problemas de potencia sexual y 
          de micción son los primeros síntomas. Lo principal es no ignorarlos.
        </p>

        <p className="text-gray-700">
          De hecho, la impotencia es solo el menor de los problemas que puede causar esta enfermedad. 
          Sin duda, mucho más peligrosa es la aparición de una masa tumoral.
        </p>

        {showMore && (
          <div className="mt-4">
            <h3 className="font-bold text-lg text-blue-800 mb-2">Otros síntomas importantes de la prostatitis:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Dolor en la uretra y en la parte inferior del abdomen</li>
              <li>Ausencia de atracción sexual</li>
              <li>Erección débil</li>
              <li>Dolor durante las relaciones sexuales</li>
              <li>Eyaculación precoz</li>
              <li>Temperatura elevada hasta 39-40 grados</li>
            </ul>
          </div>
        )}

        <Button 
          variant="outline" 
          className="mt-4" 
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Mostrar menos" : "Leer más"}
        </Button>
      </div>
    </section>
  );
};

export default ProstatitisInfo;
