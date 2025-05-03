
import React from "react";
import HeroBanner from "@/components/HeroBanner";
import MainProduct from "@/components/MainProduct";
import ProductReview from "@/components/ProductReview";
import DoctorSection from "@/components/DoctorSection";
import SymptomsSection from "@/components/SymptomsSection";
import AlternativeProducts from "@/components/AlternativeProducts";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import Footer from "@/components/Footer";
import ProstatitisInfo from "@/components/ProstatitisInfo";
import ComparisonTable from "@/components/ComparisonTable";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Encabezado */}
      <HeroBanner />

      {/* Contenido principal */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Sección de producto principal */}
        <MainProduct />

        {/* Secciones informativas */}
        <ProductReview />
        
        <DoctorSection />
        
        <SymptomsSection />

        {/* Información Detallada */}
        <ProstatitisInfo />

        {/* Comparativa */}
        <ComparisonTable />
        
        {/* CTA Central */}
        <CTASection />

        {/* Productos Alternativos */}
        <AlternativeProducts />
        
        {/* CTA Final Mejorado */}
        <CTASection primary={true} />
      </main>

      {/* Divulgación de Afiliados */}
      <AffiliateDisclosure />

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Index;
