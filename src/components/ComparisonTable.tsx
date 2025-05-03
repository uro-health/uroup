
import React from "react";
import { Check } from "lucide-react";

const ComparisonTable = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">¿Por Qué Elegir Uro UP Forte?</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-3 text-left">Característica</th>
              <th className="p-3 text-center">Uro UP Forte</th>
              <th className="p-3 text-center">Otros productos</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="p-3">Composición 100% natural</td>
              <td className="p-3 text-center"><Check className="text-green-500 mx-auto" /></td>
              <td className="p-3 text-center text-gray-400">Varía</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-3">Desarrollo científico</td>
              <td className="p-3 text-center"><Check className="text-green-500 mx-auto" /></td>
              <td className="p-3 text-center text-gray-400">Raro</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-3">Elimina la inflamación</td>
              <td className="p-3 text-center"><Check className="text-green-500 mx-auto" /></td>
              <td className="p-3 text-center text-gray-400">Parcial</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-3">Mejora la función sexual</td>
              <td className="p-3 text-center"><Check className="text-green-500 mx-auto" /></td>
              <td className="p-3 text-center text-gray-400">Temporal</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="p-3">Sin efectos secundarios</td>
              <td className="p-3 text-center"><Check className="text-green-500 mx-auto" /></td>
              <td className="p-3 text-center text-gray-400">No siempre</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
