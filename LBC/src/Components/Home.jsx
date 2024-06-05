import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  const items = [
    "Leather wallets",
    "Leather belts",
    "Leather bags",
    "Leather jackets",
    "Leather shoes",
    "Leather gloves",
    "Leather watch straps",
    "Leather phone cases",
    "Leather keychains",
    "Leather notebook covers",
  ];

  const sliderData = [
    {
      src: "https://m.media-amazon.com/images/I/71aGvqHzVCL._AC_UL480_FMwebp_QL65_.jpg",
      price: "₹289 - ₹299",
      name: "Symbol Men Leather Belt",
    },
    {
      src: "https://m.media-amazon.com/images/I/61ooQ+uODzL._AC_UL480_FMwebp_QL65_.jpg",
      price: "₹289 - ₹2299",
      name: "PELO Leather Gloves",
    },
    {
      src: "https://m.media-amazon.com/images/I/81wnGjtFJ3L._AC_UY327_FMwebp_QL65_.jpg",
      price: "₹889 - ₹4299",
      name: "LV Full Grain Natural Bag",
    },
    {
      src: "https://m.media-amazon.com/images/I/61G10Ph5+tL._AC._SR360,460.jpg",
      price: "₹399 - ₹729",
      name: "NAPA HIDE Wallet for Men",
    },
    {
      src: "https://m.media-amazon.com/images/I/61zawPJEAdL._AC_UL480_FMwebp_QL65_.jpg",
      price: "₹399 - ₹729",
      name: "NOBILITY Action Faux Lace Shoe",
    },
    {
      src: "https://m.media-amazon.com/images/I/714PH1UOcPL._AC_UY327_FMwebp_QL65_.jpg",
      price: "₹289 - ₹4299",
      name: "Case for Phone 14",
    },
  ];

  const settings = {
    centerMode: true,
    autoplay: true,
    dots: true,
    arrows: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div id="carouselExample" className="carousel slide m-3">
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src="https://cdn-hmbgd.nitrocdn.com/ECQWvziZkMtQPTAECmuwpVBZUtVjQlLn/assets/images/optimized/wp-content/uploads/2022/03/5f4793b5e71dbdc1cdb5602c4e31da51.Bennetic-shop-banner-scaled.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>

      <h3 className="fw-bold fs-1 text-center m-4">
        Welcome to LeatherBound Creations: Where Craftsmanship Meets Elegance
      </h3>

      <div className="home-two d-flex align-items-center container rounded-3">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-8 a rounded"></div>
            <div className="col-sm b rounded"></div>
            <div className="col-sm c rounded"></div>
          </div>
        </div>
        <div className="H-content-1 ms-4 me-4 rounded px-4 ps-4 pt-4 ">
          <h3 className="text-dark fw-bold">
            The Art of Fine Leather Craftsmanship
          </h3>
          <p className="text-dark">
            {" "}
            At <span className="brand">LeatherBoundCreations</span>, we believe
            that exceptional products begin with exceptional materials. Our
            commitment to quality starts with sourcing the finest leather
            available. We partner with renowned tanneries that adhere to
            sustainable and ethical practices, ensuring that every piece of
            leather we use meets the highest standards of durability,
            suppleness, and aesthetic appeal.
          </p>
        </div>
      </div>

      <div className="container">
        <h3 className="fw-bold fs-1 text-center m-4 ">Latest Product</h3>
        <div className="home-three-wrapper rounded-2" ref={scrollRef}>
          <div className="home-three d-flex gap-5 pt-4">
            <Link to={"/leatherwallets"}>
              <div className="item rounded a1">
                <div className="hover-message">{items[0]}</div>
              </div>
            </Link>
            <Link to={"leatherbelts"}>
              <div className="item rounded a2">
                <div className="hover-message">{items[1]}</div>
              </div>
            </Link>
            <Link to={"/leatherbag"}>
              <div className="item rounded a3">
                <div className="hover-message">{items[2]}</div>
              </div>
            </Link>
            <Link to={"/leatherjackets"}>
              <div className="item rounded a4">
                <div className="hover-message">{items[3]}</div>
              </div>
            </Link>
            <Link to={"/leathershoes"}>
              <div className="item rounded a5">
                <div className="hover-message">{items[4]}</div>
              </div>
            </Link>
            <Link to={"/leathergloves"}>
              <div className="item rounded a6">
                <div className="hover-message">{items[5]}</div>
              </div>
            </Link>
            <Link to={"leatherwatchstraps"}>
              <div className="item rounded a7">
                <div className="hover-message">{items[6]}</div>
              </div>
            </Link>
            <Link to={"/leatherphonecases"}>
              <div className="item rounded a8">
                <div className="hover-message">{items[7]}</div>
              </div>
            </Link>
            <Link to={"/leatherkeychains"}>
              <div className="item rounded a9">
                <div className="hover-message">{items[8]}</div>
              </div>
            </Link>
            <Link to={"/leathernotebookcovers"}>
              <div className="item rounded a10">
                <div className="hover-message">{items[9]}</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="scroll-buttons">
          <button onClick={scrollLeft} className="rounded">
            &lt;
          </button>
          <button onClick={scrollRight} className="rounded">
            &gt;
          </button>
        </div>
      </div>

      <section className="py-5 text-center container home-four">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold text-light">
              Welcome to LeatherBound Creations
            </h1>
            <p className="lead text-light">
              Discover the elegance and durability of our handcrafted leather
              products. Each piece is a testament to our commitment to quality
              and craftsmanship. Explore our collection and find your perfect
              match.
            </p>
            <p>
              <a href="#" className="btn  my-2">
                Shop Now
              </a>
              <a href="#" className="btn  my-2">
                Learn More
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="slider m-5">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index}>
              <img
                decoding="async"
                className="img"
                src={item.src}
                alt={`Slide ${index + 1}`}
              />
              <div className="desc">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <Link to={"/leatherbag"}>
                  <a href="" className="btn">
                    Show More
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <div className="container">
        <div className="album py-5 mt-5 rounded-3 home-five">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ps-5 pe-5">
            <div className="col">
              <div className="card shadow-sm z1 border-1 border-white">
                <img
                  className="p-4"
                  id="i1"
                  src="https://kitpro.site/leathy/wp-content/uploads/sites/171/2023/06/leather-crafting-tools-2021-08-26-16-18-51-utc-copy-1-1024x683.jpg"
                  alt="Leather crafting tools"
                />
                <div className="card-body">
                  <h3 className="fw-bold">Timeless Leather Goods</h3>
                  <p className="card-text">
                    Our leather goods are crafted to last a lifetime ensuring
                    they meet your everyday, combining style.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                    <small class="text-body-secondary">
                      Updated 5 mins ago
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm z1 border-1 border-white">
                <img
                  className="p-4"
                  id="i2"
                  src="https://kitpro.site/leathy/wp-content/uploads/sites/171/2023/06/close-up-of-a-cobbler-working-with-leather-2021-08-26-18-21-43-utc-copy-1024x684.jpg"
                  alt="Close-up of a cobbler working with leather"
                />
                <div className="card-body">
                  <h3 className="fw-bold">Handicraft Excellence</h3>
                  <p className="card-text">
                    Experience the art of leather crafting with our expertly
                    handcrafted products, made with care and precision.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-body-secondary">
                      Updated 10 mins ago
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm z1 border-1 border-white">
                <img
                  className="p-4"
                  id="i3"
                  src="https://kitpro.site/leathy/wp-content/uploads/sites/171/2023/06/many-rolls-leather-on-shelf-in-leather-workshop-2021-09-01-22-06-35-utc-copy2-1024x683.jpg"
                  alt="Rolls of leather in a workshop"
                />
                <div className="card-body">
                  <h3 className="fw-bold">Quality and Necessity</h3>
                  <p className="card-text">
                    Our products are designed with necessity and quality in
                    mind, ensuring they meet your everyday needs with style.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-body-secondary">
                      Updated 15 mins ago
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <h3 className="fw-bold fs-1 text-center m-5">
          LeatherBoundCreations Gallery
        </h3>
        <div class="row ">
          <div class="col-sm-7 six-one"></div>
          <div class="col-sm-4 six-two"></div>
        </div>
        <div class="row">
          <div class="col-sm six-three"></div>
          <div class="col-sm six-four"></div>
          <div class="col-sm six-five"></div>
        </div>
      </div>

      <div className="container">
        <h3 className="fw-bold fs-1 text-center m-4">LeatherBound Creations</h3>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button fw-bold"
                id="ac1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Our Products
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <strong>
                  Explore our exclusive range of leather products.
                </strong>{" "}
                We offer a variety of high-quality leather goods including
                handcrafted bags, wallets, belts, and accessories. Each piece is
                designed with attention to detail and durability, ensuring you
                receive both style and function.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                id="ac2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Materials
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <strong>Premium materials for superior quality.</strong> We use
                only the finest full-grain leather, sourced ethically from
                trusted suppliers. Our commitment to quality ensures that every
                product is not only beautiful but also long-lasting.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                id="ac3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Craftsmanship
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <strong>Artisan craftsmanship at its finest.</strong> Our
                products are handmade by skilled artisans who bring years of
                experience and passion to their work. This dedication to
                craftsmanship ensures each item is a masterpiece of design and
                durability.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                id="ac4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Contact Us
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <strong>We'd love to hear from you!</strong> For any inquiries
                or feedback, please reach out to us at{" "}
                <a href="mailto:contact@leatherboundcreations.com">
                  contact@leatherboundcreations.com
                </a>
                . Our customer service team is here to assist you with all your
                needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
