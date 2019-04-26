import React from 'react';
import MockData from '../Config/MockData';

const TopCategory = () => (
  <section className="home-cat-sec text-center">
    <div className="container">
      <h2 className="site-title">Browse by top categories</h2>
      <div className="row">
        {
          MockData.Categories.map((cate, index) => (
            <div key={index} className="col-sm-4 cat-box">
              <a href="#" className="block-link">
                <div className="cat-txt">
                  <h3>{cate.type}</h3>
                </div>
                <img src={cate.imgSrc} alt=""
                     className="img-full-width"/>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  </section>
);

export default TopCategory;
