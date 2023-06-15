import axios from 'axios';
import './Learning.scss';
import React, { useEffect, useState } from 'react';
import SliderComp from '../../components/Slider/Slider';
import { FEATURES_API, COLORS_API, PRODUCT_LIST_API } from '../../data/ProductListAPI';
import PaginationNew from '../../components/PaginationNew';

function Learning() {
  const [features, setFeatures] = useState({})
  const [colors, setColors] = useState({})
  const [products, setProducts] = useState({})
  const [imgPreview, setImgPreview] = useState()

  useEffect(() => {
    getFeatures(FEATURES_API)
    getColor(COLORS_API)
    getProduct(PRODUCT_LIST_API)
  }, [])

  const getFeatures = (API) => {
    axios
      .get(API)
      .then(res => {
        setFeatures(res.data)
      })
  }
  
  const getColor = (API) => {
    axios
      .get(API)
      .then(res => {
        setColors(res.data)
      })
  }

  const getProduct = (API) => {
    axios({
        method: 'POST',
        url: API,
        header: 'Accept: application/json',
        data: {
          "per_page": 10,
          "page": 1
        }
      })
      .then(res => {
        setProducts(res.data)
        console.log(res.data)
      })
  }

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImgPreview(e.target.files[0]);
    }
  }
  
  const handleDelete = () => {
    setImgPreview();
  }
  
  return (
    <div className="learning">
      <div className="learning__slider">
        <p className='Learning__title'>Slick Carousel Custom Paging</p>
        <SliderComp />
      </div>
      <div className="learning__item">
        <p className='Learning__title'>Features Data using axios</p>
        <div className="learning__list">
          { features.data?.map( feature => (
            <p className='learning__desc' key={feature.id}>{feature.name}</p>
          ))}
        </div>
      </div>
      <div className="learning__item">
        <p className='Learning__title'>Colors Data using axios</p>
        <div className="learning__img-wrap">
          { colors.data?.map( color => (
            <div key={color.id}>
              <img className='learning__img' src={color.image} key={color.id} alt={colors.name}/>
              <p>{color.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="learning__item">
        <p className='Learning__title'>Products Data Pagination</p>
        <div className="learning__products">
          <ol>
            { products.data?.product_list.map( product => (
              <li className='learning__p-item' key={product.id}>{product.product_name}</li>
            ))}
          </ol>
        </div>

        <PaginationNew
          currentPage={1}
          totalProducts={products.data?.total_data}
          pageSize={products.data?.per_page}
        />
      </div>
      <div className="learning__item">
        <p className='Learning__title'>Show image Preview</p>
        { imgPreview &&
          <div className='learning__preview'>
            <img src={URL.createObjectURL(imgPreview)} className='learning__img' alt='img-preview'/>
            <button className='learning__btn' onClick={handleDelete}>
              <img className='learning__icon' src="assets/delete.svg" alt='delete-icon'/>   
            </button>
          </div>
        }
        <div className='learning__input-wrap'>
          <input
            accept="image/*"
            type='file'
            onChange={handleChange}
            className='learning__input'
          />
        </div>
      </div>
    </div>
  )
}

export default Learning