import React from "react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/scrollbar";
import TitleSection from "./TitleSection";
import DATA_CATEGORIE_PRODUCTS from "../services/dataCategorie";
import DATA_LIST_PRODUCTS from "../services/dataProduit";
import SwiperProduct from "./SwiperProduct";
// import AOSProvider from "./AOSProvider";

export default function Product() {
  // state
  const titleSection = "Nos Produits"; //variable title de la section nos produits

  // comportement

  // affichage
  return (
    <div className="relative flex flex-col gap-6">
      {/* insertion du component titre section pour chaque section  */}
      <TitleSection titleSection={titleSection} />

      {DATA_CATEGORIE_PRODUCTS.map((categorie) => {
        // Filtrer les produits par catégorie
        let produitsFiltres = categorie.id === 1 ? DATA_LIST_PRODUCTS :  DATA_LIST_PRODUCTS.filter(
          (produit) => produit.categorie_id === categorie.id
        );
    return (
      <div className="mt-10 px-16 py-4" key={categorie.id}>
        <h1 className="font-semibold font-poppins text-3xl mb-3">
          {categorie.categorie}
        </h1>
          <SwiperProduct  produitsFiltres={produitsFiltres}/>
      </div>
  );
})}

    </div>
  );
}
