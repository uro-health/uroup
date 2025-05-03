import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import productsData from "@/data/alternativeProducts.json";

interface ProductCardProps {
  name: string;
  backgroundImage: string;
  originalPrice?: string;
  currentPrice: string;
  discount?: string;
  description: string;
  productUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  backgroundImage,
  originalPrice,
  currentPrice,
  discount,
  description,
  productUrl,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <AspectRatio ratio={16/9} className="bg-gradient-to-b from-gray-100 to-gray-200">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.9)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white drop-shadow-md">{name}</h3>
          </div>
        </AspectRatio>
      </div>
      
      <div className="p-4">
        <div className={cn("flex items-center justify-between mb-4", !discount && "block")}>
          <div>
            {originalPrice && (
              <span className="text-gray-500 line-through block">{originalPrice}</span>
            )}
            <div className="text-lg font-bold text-red-600">{currentPrice}</div>
          </div>
          {discount && (
            <div className="bg-red-100 text-red-800 p-1 px-2 rounded-full text-xs font-bold">
              {discount}
            </div>
          )}
        </div>
        
        <p className="text-sm text-gray-600 mb-4 h-16 overflow-hidden">
          {description}
        </p>
        
        <a href={productUrl} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Ver Producto
          </Button>
        </a>
      </div>
    </Card>
  );
};

const AlternativeProducts = () => {
  const products: ProductCardProps[] = productsData;

  return (
    <section id="alternative-products" className="my-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Productos Alternativos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default AlternativeProducts;
