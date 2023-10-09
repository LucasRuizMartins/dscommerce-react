import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";

export default function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  const navigate = useNavigate();

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
       
        {product && <ProductDetailsCard product={product} />}

        <div className="dsc-btn-page-container">
          <ButtonPrimary nameButton="COMPRAR" />
    
          
          <Link to="/">
            <ButtonInverse nameButton="INICIO" />
          </Link>
        </div>
      </section>
    </main>
  );
}
