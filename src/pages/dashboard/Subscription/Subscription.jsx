import React from "react";
import "./subscription.css"

const Subscription = () => {
  return (
    <section className="pricing_section">
      <div className="container">
        <div className="sec-title text-center">
          <span className="title"> Cost Plus Parts </span>
          <h2>Choose a Plan</h2>
        </div>
        <div className="outer-box">
          <div className="row">
            {/* Pricing Block */}
            <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon-outer">
                    <i className="fas fa-paper-plane" />
                  </div>
                </div>
                <div className="price-box">
                  <div className="title"> Free </div>
                  <h4 className="price">$0.00</h4>
                </div>
                <ul className="features">
                  <li className="true">Montly 10 hours  </li>
                  <li className="true">Free Lunch And Coffee</li>
                  <li className="true">Certificate</li>
                  <li className="false">Easy Access</li>
                  <li className="false">Free Contacts</li>
                </ul>
                <div className="btn-box">
                  <button
                    className="btn theme-btn"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            {/* Pricing Block */}
            <div
              className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon-outer">
                    <i className="fas fa-gem" />
                  </div>
                </div>
                <div className="price-box">
                  <div className="title">Standard</div>
                  <h4 className="price">$99.99</h4>
                </div>
                <ul className="features">
                <li className="true">Montly 30 hours  </li>
                  <li className="true">Free Lunch And Coffee</li>
                  <li className="true">Certificate</li>
                  <li className="true">Easy Access</li>
                  <li className="false">Free Contacts</li>
                </ul>
                <div className="btn-box">
                  <button
                    className="btn theme-btn"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            {/* Pricing Block */}
            <div
              className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon-outer">
                    <i className="fas fa-rocket" />
                  </div>
                </div>
                <div className="price-box">
                  <div className="title">Premium</div>
                  <h4 className="price">$199.99</h4>
                </div>
                <ul className="features">
                <li className="true">Montly 300 hours  </li>
                  <li className="true">Free Lunch And Coffee</li>
                  <li className="true">Certificate</li>
                  <li className="true">Easy Access</li>
                  <li className="true">Free Contacts</li>
                </ul>
                <div className="btn-box  ">
                  <button
                    className="btn theme-btn"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
