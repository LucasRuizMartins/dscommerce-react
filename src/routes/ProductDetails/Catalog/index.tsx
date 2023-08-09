import HeaderClient from "../../../components/HeaderClient";
import "./styles.css";
import SearchBar from "../../../components/SearchBar";

import ButtonNextPage from "../../../components/ButtonNextPage";
 
import ProductDetailsCard from "../../../components/ProductDetailsCard";



export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
        <SearchBar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
 
          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
