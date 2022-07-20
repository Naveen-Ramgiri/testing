import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../Redux/actions/productsActions";
import BreadcrumbPage from "../../BreadCrumb/BreadCrumb";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import men from "../../ProductListing/MenProductListings/men.jpg";
import Men from "../Men/men";
import { BiSort } from "react-icons/bi";
import { FaArrowsAlt } from 'react-icons/fa';

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);
  const updatedList = products.filter((value) => value.category === "men's clothing");
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")

    dispatch(setProducts(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <div className="productlisting">
      <div className="productlisting-mobile">
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productlisting__image">
              <img src={men} alt="men" />
            </div>
          </div>
          <div className="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productlisting__title">
              <h3>Men’s Outerwear</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="productlisting-desktop">
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--4">
              <div className="productlisting__title">
                <h3>Men's</h3>
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--8">
              <div className="productlisting__image">
                <img src={men} alt="men" />
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumbslist">
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <BreadCrumb />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              <div className="product-filter">
                <button><FaArrowsAlt /> Filter Results</button><button><BiSort /> Sort Ptoducts</button>
              </div>
              <div className="breadcrumbslist__filter">
                <p>{updatedList.length} Products</p>
                <div className="breadcrumbslist__sort">
                  <select>
                    <option>Sort by Latest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="productfilter">
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--3">
              <div className="productfilters">
                <h4>Filters</h4>
                <p>Attribute</p>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <a href="#">Show more</a>
                <p>Attribute</p>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <p>Color</p>
                <button className="btn-1"></button>
                <button className="btn-2"></button>
                <button className="btn-3"></button>
                <button className="btn-4"></button>
                <button className="btn-5"></button>
                <button className="btn-6"></button>
                <button className="btn-7"></button>
                <button className="btn-8"></button>
                <button className="btn-9"></button>
                <button className="btn-10"></button>
                <p>Attribute</p>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <label><input type="checkbox" />Option</label>
                <hr></hr>
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              <Men />
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default ProductPage;
