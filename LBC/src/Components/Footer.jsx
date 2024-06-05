import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      {/* <div className="container-l"> */}
      <footer class="text-center text-lg-start text-muted mt-5">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block text-light">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" class="me-4 text-reset ">
              <i class="fab fa-facebook-f text-light"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter text-light"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google text-light"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram text-light"></i>
            </a>
            <Link to={"https://www.linkedin.com/in/irbaz-ahmed-6b0699272/"}>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin text-light"></i>
              </a>
            </Link>
            <Link to={"https://github.com/Irbaz2004"}>
              {" "}
              <a href="" class="me-4 text-reset">
                <i class="fab fa-github text-light"></i>
              </a>
            </Link>
          </div>
        </section>
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4 text-light">
                <i class="fas fa-gem me-3 text-light"></i>LeatherBoundCreations
              </h6>
              <p className="text-light">
                At LeatherBound Creations, we deliver exceptional, handcrafted
                leather goods with a focus on quality, sustainability, and
                style. Our products are designed to last and ethically sourced.
                Contact us at contact{" "}
                <strong>@leatherboundcreations.com</strong> for inquiries.
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4 text-light">Products</h6>
              <Link to={"/leatherbag"}>
                {" "}
                <p>
                  <a href="#!" class="text-light">
                    Leather Bags
                  </a>
                </p>
              </Link>
              <Link to={"/leatherwallets"}>
                {" "}
                <p>
                  <a href="#!" class="text-light">
                    Leather Wallets
                  </a>
                </p>
              </Link>
              <Link to={"/leathershoes"}>
                {" "}
                <p>
                  <a href="#!" class=" text-light">
                    Leather Shoes
                  </a>
                </p>
              </Link>
              <Link to={"leatherbelts"}>
                {" "}
                <p>
                  <a href="#!" class="text-light">
                    Leather Belts
                  </a>
                </p>
              </Link>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4 text-light">
                Useful links
              </h6>
              <Link to={"/leatherwatchstraps"}>
                {" "}
                <p>
                  <a href="#!" class="text-light">
                    Product
                  </a>
                </p>
              </Link>
              <Link to={"/b"}>
                <p>
                  <a href="#!" class="text-light">
                    About
                  </a>
                </p>
              </Link>
              <Link to={"/a"}>
                {" "}
                <p>
                  <a href="#!" class="text-light">
                    Contact
                  </a>
                </p>
              </Link>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4 text-light">Contact</h6>
              <p className="text-light">
                <i class="fas fa-home me-3 text-light"></i> New York, NY 10012,
                US
              </p>
              <p className="text-light">
                <i class="fas fa-envelope me-3 text-light"></i>
                irbazahmeds20@gmail.com
              </p>
              <p className="text-light">
                <i class="fas fa-phone me-3 text-light"></i> +91 9363466343
              </p>
              <p className="text-light">
                <i class="fas fa-print me-3 text-light"></i> +91 9363466343
              </p>
            </div>
          </div>
        </div>
        <div class="text-center p-4 text-light">
          © 2024 Copyright:
          <a
            class="text-reset fw-bold text-light"
            href="https://mdbootstrap.com/"
          >
            LeatherBoundCreations
          </a>
        </div>
      </footer>
      {/* </div> */}
    </>
  );
}
