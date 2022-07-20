import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../Redux/actions/productsActions";
import BreadcrumbPage from "../../BreadCrumb/BreadCrumb";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import accessories from "../../ProductListing/AccessoriesListings/accessories.jpg";
import { BiSort } from "react-icons/bi";
import { FaArrowsAlt } from 'react-icons/fa';
import Accessories from "../Accessories/Accessories";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);
  const updatedList = products.filter((value) => value.category === "electronics");
  const fetchProducts = async () => {
    const response = await
      axios.get("https://fakestoreapi.com/products")
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="productlisting">
        <div className="productlisting-mobile">
          <div className="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--phone--12">
              <div className="productlisting__image">
                <img src={accessories} alt="accessories" />
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--phone--12">
              <div className="productlisting__title">
                <h3>Accessories</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="productlisting-desktop">
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--4">
                <div className="productlisting__title">
                  <h3>Accessories</h3>
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--8">
                <div className="productlisting__image">
                  <img src={accessories} alt="accessories" />
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
                <Accessories />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
