import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'img/banner/banner-bg.jpg';

function Intro() {
  return (
    <section className="banner-area" data-bs-theme="dark">
      <div className="container">
        <div
          className="row fullscreen align-items-center justify-content-start"
          style={{ height: "100vh" }}
        >
          <div className="col-lg-12">
            <Carousel>
              <Carousel.Item>
                <div class="row single-slide align-items-center d-flex">
                  <div class="col-lg-5 col-md-6">
                    <div class="banner-content">
                      <h1>
                        Sai Sagar New <br />
                        Collection!
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.
                      </p>
                      <div class="add-bag d-flex align-items-center">
                        <a class="add-btn" href="">
                          <span class="ri-close-fill"></span>
                        </a>
                        <span class="add-text text-uppercase">Add to Bag</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="banner-img">
                      <img
                        className="img-fluid"
                        src="img/banner/CombineBoxesNoBg.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="row single-slide align-items-center d-flex">
                  <div class="col-lg-5 col-md-6">
                    <div class="banner-content">
                      <h1>
                        Sai Sagar New <br />
                        Collection!
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.
                      </p>
                      <div class="add-bag d-flex align-items-center">
                        <a class="add-btn" href="">
                          <span class="ri-close-fill"></span>
                        </a>
                        <span class="add-text text-uppercase">Add to Bag</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="banner-img">
                      <img
                        className="img-fluid"
                        src="img/banner/CombineBoxesNoBg.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="row single-slide align-items-center d-flex">
                  <div class="col-lg-5 col-md-6">
                    <div class="banner-content">
                      <h1>
                        Sai Sagar New <br />
                        Collection!
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.
                      </p>
                      <div class="add-bag d-flex align-items-center">
                        <a class="add-btn" href="">
                          <span class="ri-close-fill"></span>
                        </a>
                        <span class="add-text text-uppercase">Add to Bag</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="banner-img">
                      <img
                        className="img-fluid"
                        src="img/banner/CombineBoxesNoBg.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
