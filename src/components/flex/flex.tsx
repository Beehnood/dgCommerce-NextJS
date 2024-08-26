import React from 'react';
import Image from 'next/image'; // Importer le composant Image de Next.js
import products from '../../data/products'; // Importer les données des produits

export default function Flex() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="max-w-screen-md mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group pb-24 relative overflow-hidden">
              <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-orange-600 z-10"></div>
              <Image
                src={product.imageUrl} // Utilisation de Next.js Image avec src dynamique
                className="transition-all group-hover:scale-125 duration-700 mr-4 h-60 w-auto"
                alt={product.name}
                width={300} // Spécifie la largeur
                height={300} // Spécifie la hauteur
              />
              <div className="bg-orange-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
                <div className="z-20 absolute -top-5 w-full flex justify-center">
                </div>
                <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
                  <div className="h-6 bg-orange-900 -rotate-45 transform origin-bottom-right"></div>
                </div>
                <h2 className="font-bold">{product.name}</h2>
                <span className="text-white">{product.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
