import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { addToCart } from "../../actions/cart";

const renderProducts = (products) => {
  const dispatch = useDispatch();

  return Object.values(products).map((product) => {
    return (
      <div
        className={`col-lg-3 col-md-6 special-grid ${product.tags.join(" ")}`}
        key={product.id}
      >
        <div className="products-single fix">
          <div className="box-img-hover">
            <div className="type-lb">
              <p className="sale">Serviços</p>
            </div>
            <img
              src={`/images/${product.featured_image}`}
              className="img-fluid"
              alt="Image"
            />
            <div className="mask-icon">
              <ul>
                <li>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="View"
                  >
                    <i className="fas fa-eye"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Compare"
                  >
                    <i className="fas fa-sync-alt"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Add to Wishlist"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                </li>
              </ul>
             
            </div>
          </div>
          <Link href="/p/[pid]" as={`/p/${product.id}`}>
            <a>
              <div className="why-text">
                <h4>{product.name}</h4>
                
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  });
};

export default function FeaturedProducts() {
  const products = useSelector((state) => {
    return useMemo(() => state.products, [state.products]);
  });

  return (
    <div className="products-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-all text-center">
              <h3>O que dizem sobre</h3>
              <h1>
              EASY CARE
              </h1>
            </div>
          </div>
        </div>
        
          <div className="col-lg-12">
            <div className="special-menu text-right">
              <div className="button-group filter-button-group">
                <button className="active" data-filter="*">
                  Todos
                  </button>
               <button data-filter=".Energia-Fotovoltaica">Energia Fotovoltaica</button>
                <button data-filter=".Pedra-esculpida">Pedra esculpida</button>
                <button data-filter=".Móveis-planejados">Móveis planejados</button>
                <button data-filter=".best-seller">Móveis planejados</button>
                <button data-filter=".best-seller">Móveis planejados</button>
                <button data-filter=".best-seller">Móveis planejados</button>
              </div>
            </div>
          </div>
     

        <div className="row special-list">{renderProducts(products)}</div>
      </div>
    </div>
  );
}
