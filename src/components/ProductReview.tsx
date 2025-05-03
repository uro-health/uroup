
import React from "react";
import { Card } from "@/components/ui/card";

const ProductReview = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Revisión Completa de Uro UP Forte</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3 text-blue-700">¿Qué es Uro UP Forte?</h3>
          <p className="text-gray-700">
            Uro UP Forte es un suplemento natural diseñado específicamente para la salud prostática y la restauración de la función sexual. 
            Desarrollado en Israel y fabricado en Europa bajo altos estándares de calidad, este producto utiliza una fórmula 
            con ingredientes 100% naturales que trabajan sinérgicamente para aliviar los síntomas de la prostatitis y mejorar la salud general del sistema urinario masculino.
          </p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3 text-blue-700">Beneficios Principales</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Reduce la inflamación de la próstata</li>
            <li>• Alivia los problemas urinarios frecuentes</li>
            <li>• Disminuye el dolor y el ardor al orinar</li>
            <li>• Mejora la función sexual y la calidad de la erección</li>
            <li>• Previene complicaciones más graves, como el cáncer de próstata</li>
            <li>• Aumenta naturalmente los niveles de testosterona</li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3 text-blue-700">Ingredientes Naturales</h3>
          <p className="text-gray-700">
            Uro UP Forte está compuesto por una mezcla exclusiva de extractos vegetales y minerales que actúan específicamente sobre la salud prostática:
          </p>
          <ul className="mt-3 space-y-1 text-gray-700">
            <li>• Extracto de Saw Palmetto: Reduce la inflamación prostática</li>
            <li>• Semillas de Calabaza: Ricas en zinc y con propiedades antiinflamatorias</li>
            <li>• Extracto de Ortiga: Mejora el flujo urinario</li>
            <li>• Licopeno: Potente antioxidante que protege las células prostáticas</li>
            <li>• Zinc: Mineral esencial para la salud reproductiva masculina</li>
            <li>• Vitamina E: Mejora la circulación sanguínea</li>
          </ul>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-3 text-blue-700">¿Cómo Funciona?</h3>
          <p className="text-gray-700">
            Uro UP Forte actúa a través de un mecanismo multinivel que:
          </p>
          <ol className="mt-3 space-y-2 text-gray-700">
            <li>1. Reduce la inflamación del tejido prostático</li>
            <li>2. Mejora la microcirculación en la zona pélvica</li>
            <li>3. Fortalece las paredes de la vejiga y mejora el control urinario</li>
            <li>4. Restaura el equilibrio hormonal, especialmente los niveles de testosterona</li>
            <li>5. Protege las células de la próstata contra el daño oxidativo</li>
          </ol>
        </Card>
      </div>

      <Card className="p-6 mt-6">
        <h3 className="text-lg font-bold mb-3 text-blue-700">Eficacia Comprobada</h3>
        <p className="text-gray-700">
          Los estudios clínicos realizados con pacientes que sufren de problemas prostáticos muestran que Uro UP Forte 
          comienza a aliviar los síntomas aproximadamente a las 2 semanas de uso continuo, con mejoras significativas 
          después de 1 mes de tratamiento. El 87% de los pacientes reportaron una disminución en la necesidad de orinar 
          por la noche, mientras que el 82% notaron una mejora en su función sexual.
        </p>
      </Card>
    </section>
  );
};

export default ProductReview;
