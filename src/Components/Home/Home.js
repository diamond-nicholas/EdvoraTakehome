import React, { useState, useEffect } from 'react';
import './Home.scss';
import { IoMdArrowDropdown, IoIosArrowForward } from 'react-icons/io';
import { formatDate } from '../Utilis/Format-date';
import axios from 'axios';

const Home = () => {
  const [apiData, setApiData] = useState([]);

  const handleScrollClick = () => {
    const right = document.querySelector('.cardScrollWrapper');
    right.scrollBy(400, 0);
  };

  const handleScrollClick2 = () => {
    const right = document.querySelector('.scroller2');
    right.scrollBy(400, 0);
  };

  const getData = async () => {
    const url = 'https://assessment-edvora.herokuapp.com/';
    try {
      const result = await axios.get(url);
      // console.log(result.data);
      setApiData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(apiData);
  return (
    <main>
      <section className='container'>
        <article className='leftWrapper'>
          <div className='card'>
            <h3>Filters</h3>
            <div className='br'></div>
            <div className='cardBtns'>
              <div className='btnProducts'>
                <h4>Products</h4>
                <IoMdArrowDropdown />
              </div>
              <div className='btnProducts'>
                <h4>State</h4>
                <IoMdArrowDropdown />
              </div>
              <div className='btnProducts'>
                <h4>City</h4>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </article>
        <article className='rightWrapper'>
          <div className='container'>
            <section className='heading'>
              <h1>Edvora</h1>
              <h3>Products</h3>

              <h4>Product Name</h4>
            </section>
          </div>
          <div className='br'></div>
          <div className='cardScroll'>
            <div className='cardScrollWrapper'>
              {/* start of cardStory */}

              {apiData.map(
                ({
                  brand_name,
                  address,
                  date,
                  discription,
                  image,
                  price,
                  product_name,
                  time,
                }) => (
                  <div className='cardStory' key={time}>
                    <div className='header'>
                      <img src={image} alt='brandImg' />
                      <aside>
                        <h5>{product_name}</h5>
                        <p className='brand'>{brand_name}</p>
                        <p>
                          <span>$</span>
                          {price}
                        </p>
                      </aside>
                    </div>
                    <div className='content'>
                      <aside>
                        <p>{address.state + ' ' + address.city}</p>
                        <p>
                          <span>Date: </span>
                          {formatDate(date)}
                        </p>
                      </aside>
                      <p>{discription}</p>
                    </div>
                  </div>
                )
              )}
            </div>
            <IoIosArrowForward
              className='arrowRight'
              onClick={() => handleScrollClick()}
            />
          </div>

          <section className='secondGallery'>
            {/* second gallery */}
            <h4>Product Name</h4>
            <div className='br'></div>
            <div className='cardScroll'>
              <div className='cardScrollWrapper scroller2'>
                {/* start of cardStory */}

                {apiData.map(
                  ({
                    brand_name,
                    address,
                    date,
                    discription,
                    image,
                    price,
                    product_name,
                    time,
                  }) => (
                    <div className='cardStory' key={time}>
                      <div className='header'>
                        <img src={image} alt='brandImg' />
                        <aside>
                          <h5>{product_name}</h5>
                          <p className='brand'>{brand_name}</p>
                          <p>
                            <span>$</span>
                            {price}
                          </p>
                        </aside>
                      </div>
                      <div className='content'>
                        <aside>
                          <p>{address.state + ' ' + address.city}</p>
                          <p>
                            <span>Date: </span>
                            {formatDate(date)}
                          </p>
                        </aside>
                        <p>{discription}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
              <IoIosArrowForward
                className='arrowRight'
                onClick={() => handleScrollClick2()}
              />
            </div>
          </section>
        </article>
      </section>
    </main>
  );
};

export default Home;
