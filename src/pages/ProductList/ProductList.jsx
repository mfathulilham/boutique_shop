import React, { useEffect, useRef, useState } from 'react';
import './ProductList.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import InputSelect from '../../components/InputSelect/InputSelect';
import Pagination from '../../components/Pagination/Pagination';
import CardProduct from '../../components/CardProduct/CardProduct';
import Checkbox from '../../components/Checkbox/Checkbox';
import InputRange from '../../components/InputRange/InputRange';
import Button from '../../components/Button/Button';
import Accordion from '../../components/Accordion/Accordion';
import { productlist_links } from '../../data/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import { inputSelect } from '../../data/Input';
import {FilterSkeleton, RangeSkeleton, ColorSkeleton} from '../../components/Skeleton/FilterSkeleton';
import ProductSkeleton from '../../components/ProductSkeleton/ProductSkeleton';
import RadioImage from '../../components/RadioImage/RadioImage';
import { CATEGORIES_API, FEATURES_API, MATERIALS_API, COLORS_API,PRODUCT_LIST_API} from '../../data/ProductListAPI';

function ProductList() { 
  let [isOpen, setIsOpen] = useState('');
  let [spinner, setSpinner] = useState(true);
  let [skeleton, setSkeleton] = useState(true);
  let [categories, setCategories] = useState({});
  let [features, setFeatures] = useState({});
  let [materials, setMaterials] = useState({});
  let [colors, setColors] = useState({});
  let [products, setProducts] = useState({});
  let [filterCategory, setFilterCategory] = useState([]);
  let [filterColor, setFilterColor] = useState(null);
  let [filterMaterial, setFilterMaterial] = useState([]);
  
  // let page = urlEncoded.get("page")
  const page = new URLSearchParams(window.location.search).get("page");
  const categoryUrl = new URLSearchParams(window.location.search).get('category');
  const materialUrl = new URLSearchParams(window.location.search).get('material');
  const colorlUrl = new URLSearchParams(window.location.search).get('color');
  // const categoryUrl = new URLSearchParams(window.location.search).getAll("category")
  const navigate = useNavigate();

  const refProduct = useRef(true);
  const refFilter = useRef(true);

  useEffect(() => {
    if (refProduct.current) {
      refProduct.current = false;
      if (categoryUrl) {
        setFilterCategory(categoryUrl?.split(',').map(category => parseInt(category)));
      }
      if (materialUrl) {
        setFilterMaterial(materialUrl?.split(',').map(category => parseInt(category)));
      }
      if (colorlUrl) {
        setFilterColor(colorlUrl);
      }
      getProducts(PRODUCT_LIST_API, page, categoryUrl, materialUrl, colorlUrl)
    }
  }, [page, categoryUrl, materialUrl, colorlUrl])
  
  useEffect(() => {
    if (refFilter.current) {
      refFilter.current = false;
      getAllAPI(CATEGORIES_API, FEATURES_API, COLORS_API, MATERIALS_API, PRODUCT_LIST_API)
      }
    }, [])

  const handleFilterClick = () => {
    if (isOpen === 'is-active') {
      setIsOpen('')  
    } else setIsOpen('is-active')
  }

  const handleCategoryChange = (e) => {
    const value = parseInt(e.target.value);
    let newArray = [...filterCategory, value];
    if (filterCategory?.includes(value)) {
      newArray = newArray.filter(id => id !== value);
    } 
    setFilterCategory(newArray);
    
    let newMaterial = materialUrl?.split(',').map(material => parseInt(material));

    if (newArray?.length === 0 && newMaterial?.length === 0 && !colorlUrl) {
      navigate(`?page=${page || 1}`);
    } else if ((newMaterial?.length > 0) && (newArray?.length > 0) && (colorlUrl)) {
      navigate(`?page=${page || 1}&category=${ newArray?.join(",") }&material=${ newMaterial?.join(",") }&color=${colorlUrl}` )
    } else if (newMaterial?.length > 0 && (newArray?.length > 0)) {
      navigate(`?page=${page || 1}&category=${ newArray?.join(",") }&material=${ newMaterial?.join(",") }` )
    } else if (newMaterial?.length > 0 && (colorlUrl)) {
      navigate(`?page=${page || 1}&material=${ newMaterial?.join(",") }&color=${ colorlUrl}` )
    } else if (newArray?.length > 0 && (colorlUrl)) {
      navigate(`?page=${page || 1}&category=${ newArray?.join(",") }&color=${ colorlUrl}` )
    } else if (colorlUrl) {
      navigate(`?page=${page || 1}&color=${colorlUrl}` )
    } else if (newMaterial?.length > 0 ) {
      navigate(`?page=${page || 1}&material=${ newMaterial?.join(",") }` )
    } else navigate(`?page=${page || 1}&category=${ newArray?.join(",") }` )

    if (!refProduct.current) {
      refProduct.current = true;
    }
  }
  
  const handleMaterialChange = (e) => {
    const value = parseInt(e.target.value);
    let newArray = [...filterMaterial, value];
    if (filterMaterial?.includes(value)) {
      newArray = newArray.filter(id => id !== value);
    } 
    setFilterMaterial(newArray);
    let newCategory = categoryUrl?.split(',').map(category => parseInt(category));

    if (newArray?.length === 0 && newCategory?.length === 0 && !colorlUrl) {
      navigate(`?page=${page || 1}`);
    } else if ((newCategory?.length > 0) && (newArray?.length > 0) && (colorlUrl)) {
      navigate(`?page=${page || 1}&category=${ newCategory?.join(",") }&material=${ newArray?.join(",") }&color=${colorlUrl}` )
    } else if (newCategory?.length > 0 && (newArray?.length > 0)) {
      navigate(`?page=${page || 1}&category=${ newCategory?.join(",") }&material=${ newArray?.join(",") }` )
    } else if (newCategory?.length > 0 && (colorlUrl)) {
      navigate(`?page=${page || 1}&category=${ newCategory?.join(",") }&color=${ colorlUrl}` )
    } else if (newArray?.length > 0 && (colorlUrl)) {
      navigate(`?page=${page || 1}&material=${ newArray?.join(",") }&color=${ colorlUrl}` )
    } else if (colorlUrl) {
      navigate(`?page=${page || 1}&color=${colorlUrl}` )
    } else if (newCategory?.length > 0 ) {
      navigate(`?page=${page || 1}&category=${ newCategory?.join(",") }` )
    } else navigate(`?page=${page || 1}&material=${ newArray?.join(",") }` )
    
    if (!refProduct.current) {
      refProduct.current = true;
    }
  }
  
  const handleColorChange = (e) => {
    const newColor = parseInt(e.target.value); 
    setFilterColor(newColor);
    let newCategory = categoryUrl?.split(',').map(category => parseInt(category));
    let newMaterial = materialUrl?.split(',').map(material => parseInt(material));

    // console.log("color value: ",e.target.value)
    if (newCategory?.length === 0 && newMaterial?.length === 0 && !filterColor) {
      navigate(`?page=${page || 1}`);
    } else if ((newCategory?.length > 0) && (newMaterial?.length > 0)) {
      navigate(`?page=${page || 1}&category=${ newCategory?.join(",") }&material=${ newMaterial?.join(",") }&color=${newColor}` )
    } else if (newCategory?.length > 0) {
      navigate(`?page=${page || 1}&category=${ newCategory?.join(",") }&color=${newColor}` )
    } else if (newMaterial?.length > 0) {
      navigate(`?page=${page || 1}&material=${ newMaterial?.join(",") }&color=${newColor}` )
    } 
    else navigate(`?page=${page || 1}&color=${ newColor }` )
    
    if (!refProduct.current) {
      refProduct.current = true;
    }
  }

  const getAllAPI = async (categoriesAPI, featuresAPI, colorsAPI, materialAPI) => {
    setSpinner(true)
    Promise.all([
        await fetch(categoriesAPI),
        await fetch(featuresAPI),
        await fetch(colorsAPI),
        await fetch(materialAPI)
      ])
      .then((responses) => {
        return Promise.all(responses.map((response) => {
          return response.json();
        })); 
      })
      .then(([dataCategory, dataFeature, dataColor, dataMaterial]) => {
        setCategories(dataCategory)
        setFeatures(dataFeature)
        setColors(dataColor)
        setMaterials(dataMaterial)
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message)
        setSpinner(false);
      });
      
      setSpinner(false)
  }
  // const {search} = useLocation()

  const getProducts = async (API, page, filterCategory, filterMaterial, filterColor) => {
    setSkeleton(true);

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type':'application/json', 'Accept':'application/json'},
      body: JSON.stringify({
            "per_page": 12,
            "page": parseInt(page),
            "category": filterCategory?.split(',').map(item => parseInt(item)),
            "material": filterMaterial?.split(',').map(item => parseInt(item)),
            "color": filterColor ? [parseInt(filterColor)] : []
            }),
      redirect: 'follow'
    };

    await fetch(API, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setProducts(result)
    })
    .catch(error => console.log('error', error));
    setSkeleton(false);
  }

  const paginate = (e, pageNumber) => {
    e.preventDefault()
    if (categoryUrl && materialUrl && colorlUrl){
      navigate(`?page=${pageNumber}&category=${ categoryUrl?.split(',').join(",") }&material=${ materialUrl?.split(',').join(",") }&color=${ colorlUrl }` )
    } else if (categoryUrl && materialUrl) {
      navigate(`?page=${pageNumber}&category=${ categoryUrl?.split(',').join(",") }&material=${ materialUrl?.split(',').join(",") }` )
    } else if (categoryUrl && colorlUrl){
      navigate(`?page=${pageNumber}&category=${ categoryUrl?.split(',').join(",") }&color=${ colorlUrl }` )
    } else if (materialUrl && colorlUrl){
      navigate(`?page=${pageNumber}&material=${ materialUrl?.split(',').join(",") }&color=${ colorlUrl }` )
    } else if (materialUrl) {
      navigate(`?page=${pageNumber}&material=${ materialUrl?.split(',').join(",") }` )
    } else if (categoryUrl){
      navigate(`?page=${pageNumber}&category=${ categoryUrl?.split(',').join(",") }` )
    } else if (colorlUrl){
      navigate(`?page=${pageNumber}&color=${ colorlUrl }` )
    } else {
      navigate('?page=' + pageNumber)
    }

    if (!refProduct.current) {
      refProduct.current = true;
    }
  }

  const handleResetClick = () => {
    window.location.href = ('/productlist')
  }
  // if (Object.keys(products).length === 0) {
  //   alert('no data available')
  //   setTimeout(() => {
  //     navigate('?page=' + 1)
  //   }, 1000)
  // }
  
  return (
    <>
      <Header />
      <div className="plist">
        <div className="plist__title">
          <Breadcrumb>
            { productlist_links.map((product_link, index) => (
              <Link to={product_link.to} key={index}>
                {product_link.label}
              </Link>
            ))}
          </Breadcrumb>
        </div>
        <aside className="plist__list">
          {/* FILTER */}
          <div className={`filter ${isOpen}`}>
            <div className="filter__header">
              <p className="filter__title">Filter</p>
              <img className="filter__img" onClick={handleFilterClick} src="assets/icon/close.svg" alt="close-icon"/>
              <button className="filter__btn">Reset</button>
            </div>
            <div className="filter__list">
              <div className="filter__item">
                { spinner ?
                  <div className="filter__skeleton">
                    <FilterSkeleton />
                  </div>
                  :
                  <div className="filter__i-accordion">
                    <Accordion 
                      title={'Category'}
                    >
                      <div className="content-category">
                        { categories.data?.map((category) => (
                          <div className="checkbox__wrap" key={category.id}>
                            <Checkbox 
                              title={category.name}
                              onChange={handleCategoryChange}
                              value={category.id}
                              defaultChecked={filterCategory?.includes(parseInt(category.id))}
                            />
                          </div>
                        ))}
                      </div>
                    </Accordion>
                  </div>
                }
              </div>
              <div className="filter__item">
                { spinner ?
                  <div className="filter__skeleton">
                    <FilterSkeleton />
                  </div>
                  :
                  <div className="filter__i-accordion">
                    <Accordion 
                      title={'Featured'}
                    >
                      <div className="content-featured">
                        { features.data?.map((feature) => (
                          <div className="checkbox__wrap" key={feature.id}>
                            <Checkbox title={feature.name}/>
                          </div>
                        ))}
                      </div>
                    </Accordion>
                  </div>
                }
              </div>
              <div className="filter__item">
                { spinner ?
                  <div className="filter__skeleton">
                    <RangeSkeleton />
                  </div>
                  :                
                  <div className="filter__i-accordion">
                    <Accordion 
                      title={'Price Range'}
                    >
                      <div className="content-price pl-0">
                        <div className="price-range">
                          <p className="min">0</p>
                          <p className="max">13.479.000</p>
                        </div>
                        <div className="range__wrap">
                          <InputRange min="0" max="13479000" defaultValue="13479000"/>
                        </div>
                        <span className="footer-range">234097 Produk</span>
                      </div>
                    </Accordion>
                  </div>
                }
              </div>
              <div className="filter__item">
              { spinner ?
                  <div className="filter__skeleton">
                    <ColorSkeleton />
                  </div>
                :
                  <div className="filter__i-accordion">
                    <Accordion 
                      title={'Color'}
                    >
                      <div className="content-color pl-0">
                        <div className="c2-color-wrapper mb-2">
                          {  colors.data?.map((color) => (
                            <div className="radio__wrap" key={color.id}>
                              <RadioImage 
                                img={color.image}
                                onChange={handleColorChange}
                                value={color.id}
                                defaultChecked={filterColor === color.id}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </Accordion>
                  </div>
                }
              </div>
              <div className="filter__item border-none">
                { spinner ?
                  <div className="filter__skeleton">
                    <FilterSkeleton />
                  </div>
                  :
                  <div className="filter__i-accordion">
                    <Accordion 
                      title={'Material'}
                    >
                      <div className="content-material">
                        { materials.data?.map((material) => (
                          <div className="checkbox__wrap" key={material.id}>
                            <Checkbox 
                              title={material.name}
                              onChange={handleMaterialChange}
                              value={material.id}
                              defaultChecked={filterMaterial?.includes(parseInt(material.id))}
                              />
                          </div>
                        ))}
                      </div>
                    </Accordion>
                  </div>
                }
              </div>
            </div>
            <div className="filter__footer">
              <Button type="button" className="btn btn__white filter__f-reset">Reset</Button>
              <Button type="button" className="btn btn__gold filter__f-apply">Apply</Button>
            </div>
          </div>

          <section className="plist__item">
            <div className="plist__banner">
              <img className="plist__img" src="assets/banner-collection.jpg" alt="icon-collection"/>
            </div>
            <div className="plist__header">
              <h2 className="plist__h-title">
                View All Collections
              </h2>
              <p className="plist__h-desc">234097 Produk | <span className="bolder">Urut Berdasarkan</span></p>
              <div className="plist__h-btn">
                <button className='plist__h-filter filters' onClick={handleFilterClick}>
                  Filter
                  <img src="assets/icon/filter.svg" alt="filter-icon"/>
                </button>
                <div className="plist__h-select">
                  <InputSelect>
                    {inputSelect.map((input, index) =>(
                      <option key={index}>{input}</option>
                    ))}
                  </InputSelect>
                </div>
              </div>
              <p className="plist__h-desc2">234097 Produk</p>
            </div>

            <div className="plist__content">
              { skeleton ?
                <>
                  <div className="card__wrap">
                    <ProductSkeleton />
                  </div>
                  <div className="card__wrap">
                    <ProductSkeleton />
                  </div>
                  <div className="card__wrap">
                    <ProductSkeleton />
                  </div>
                  <div className="card__wrap">
                    <ProductSkeleton />
                  </div>
                  <div className="card__wrap">
                    <ProductSkeleton />
                  </div>
                  <div className="card__wrap">
                    <ProductSkeleton />
                  </div>
                </>
              :
              <>
                {( ((Object.keys(products).length) && (products.data.product_list.length)) === 0) ?
                    <p className='plist__noproduct'>
                      No Products Data available...
                      <br/>
                      <button onClick={handleResetClick} className='plist__linkproduct'>Klik here to reset</button>
                    </p>
                  :
                <>
                  { products.data?.product_list.map((product) => (
                    <div className="card__wrap" key={product.id}>
                      <CardProduct
                        rating={product.rating}
                        price={product.base_price}
                        disc_price={product.calculated_price}
                        discount={product.discount_percentage} 
                        name={product.product_name}
                        img={product.image}
                        material={product.material_name}
                        />
                    </div>
                  ))}
                </>
                }
              </>
              }
            </div>
            <Pagination
              currentPage={parseInt(page) || 1}
              paginate={paginate} 
              total={products.data?.total_data}
              productsPerPage={products.data?.per_page}
              nextPage={products.data?.nextPage}
            />
          </section>
        </aside>
      </div>
      <Footer />
      {/* <div className={`spinner__wrapper ${spinner && 'is-active'}`}>
        <Spinner/>
      </div> */}
    </>
  )
  // }
}

export default ProductList