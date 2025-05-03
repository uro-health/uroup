
import React from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const DoctorSection = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Opinión Profesional</h2>
      
      <Card className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/4 flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
              alt="Dr. Carlos Ramírez" 
              className="rounded-lg shadow-md w-full max-w-[200px]"
            />
          </div>
          
          <div className="md:w-3/4">
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className="text-yellow-400 fill-yellow-400 w-5 h-5" 
                />
              ))}
            </div>
            
            <h3 className="text-xl font-bold text-blue-700 mb-2">Dr. Carlos Ramírez</h3>
            <p className="text-sm text-gray-500 mb-4">Urólogo, especialista en salud prostática con más de 15 años de experiencia</p>
            
            <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4 py-1">
              "En mi práctica clínica he recomendado Uro UP Forte a numerosos pacientes con prostatitis crónica y problemas 
              urinarios recurrentes. Los resultados han sido notablemente positivos. Lo que distingue a este producto es su 
              formulación basada en ingredientes naturales que actúan sinérgicamente para reducir la inflamación y mejorar 
              la función prostática sin los efectos secundarios comunes de los medicamentos sintéticos.
              <br /><br />
              Particularmente destaco su eficacia en casos donde los tratamientos convencionales no han logrado resultados satisfactorios. 
              La combinación de extractos vegetales no sólo alivia los síntomas, sino que trabaja en restaurar el funcionamiento 
              saludable de la próstata a largo plazo."
            </blockquote>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default DoctorSection;
