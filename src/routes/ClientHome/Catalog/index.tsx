import "./styles.css";
import SearchBar from "../../../components/SearchBar";

import ButtonNextPage from "../../../components/ButtonNextPage";

import CatalogCard from "../../../components/CatalogCard";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import { CategoryDTO } from "../../../models/category";
import { json } from "react-router-dom";


export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const objTest : CategoryDTO = {
  id : 8,
  name : "Jardinagem"
  }

  useEffect(() => {

    //localStorage.setItem("minhaCategoria", JSON.stringify(objTest))
    const obj = JSON.parse(localStorage.getItem("minhaCategoria") || "{}"); 
    console.log(obj.name)


    productService.findAll().then((response) => {
      setProducts(response.data.content);
    });
  }, []);

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>

        <ButtonNextPage nameButton="TESTE" />
      </section>
    </main>
  );
}
