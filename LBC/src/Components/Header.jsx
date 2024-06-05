import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function DesktopNavbar() {
  const [bodycolor, setbodycolor] = useState("white");
  const [DL, setDL] = useState("fa-solid fa-cloud-moon");
  const length = useSelector((state) => state.AllDATA);

  const changebody = () => {
    const newcolor = bodycolor === "white" ? "black" : "white";
    const newDL =
      DL === "fa-solid fa-cloud-moon"
        ? "fa-solid fa-cloud-sun"
        : "fa-solid fa-cloud-moon";
    setbodycolor(newcolor);
    setDL(newDL);
    document.body.style.backgroundColor = newcolor;
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const itemList = [
    { name: "Leather Bag", route: "/leatherbag" },
    { name: "Leather Belts", route: "/leatherbelts" },
    { name: "Leather Gloves", route: "/leathergloves" },
    { name: "Leather Jackets", route: "/leatherjackets" },
    { name: "Leather Keychains", route: "/leatherkeychains" },
    { name: "Leather Notebook Covers", route: "/leathernotebookcovers" },
    { name: "Leather Phone Cases", route: "/leatherphonecases" },
    { name: "Leather Shoes", route: "/leathershoes" },
    { name: "Leather Wallets", route: "/leatherwallets" },
    { name: "Leather Watch Straps", route: "/leatherwatchstraps" },
  ];

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query) {
      const filtered = itemList.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = itemList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <>
      <h6 className="text-center">
        <marquee behavior="" direction="">
          Upto 50% off sitewide | Free Shipping & COD available
        </marquee>
      </h6>
      <header className="py-3 sticky-top" id="nav">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
          >
            <img
              src="src/img/logo black.png"
              className="mt-5"
              width={"70"}
              height={"70"}
              alt=""
            />
            <span className="fs-1 lbc text-light mt-5 me-5">
              {" "}
              LeatherBoundCreations
            </span>
          </a>
          <div className="sh">
            <form className="search-bar" onSubmit={handleSubmit}>
              <input
                className="form-control asd"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
              />
            </form>
            {searchQuery && (
              <ul className="item-list text-dark">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <li key={index} className="listitem">
                      <Link to={item.route}>
                        {item.name} - {item.price}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>No matching items found</li>
                )}
              </ul>
            )}
          </div>

          <div className="col-md-3 text-end">
            <Link to={"/signup"}>
              <button type="button" className="btn ">
                Sign-up
              </button>
            </Link>
            <Link to={"/cart"}>
              <button type="button" className="btn me-2">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <span className="cart-length">{length.length}</span>
            </Link>
            <button type="button" className="btn me-2" onClick={changebody}>
              <i className={DL}></i>
            </button>
          </div>
        </div>
        <div className="container-l">
          <header className="d-flex justify-content-center">
            <ul className="nav nav-pills">
              <NavLink to={"/"}>
                {" "}
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-light"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
              </NavLink>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <Link to={"/leatherwallets"}>
                    {" "}
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        wallets
                      </a>
                    </li>
                  </Link>
                  <Link to={"leatherbelts"}>
                    {" "}
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        belts
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leatherbag"}>
                    {" "}
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        bags
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leatherjackets"}>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        jackets
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leathershoes"}>
                    {" "}
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        shoes
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leathergloves"}>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        gloves
                      </a>
                    </li>
                  </Link>
                  <Link to={"leatherwatchstraps"}>
                    {" "}
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        watch straps
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leatherphonecases"}>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        phone cases
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leatherkeychains"}>
                    {" "}
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        keychains
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leathernotebookcovers"}>
                    {" "}
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        notebook covers
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>
              <NavLink to={"/b"}>
                {" "}
                <li className="nav-item">
                  <a href="#" className="nav-link text-light">
                    About
                  </a>
                </li>
              </NavLink>
              <NavLink to={"/a"}>
                {" "}
                <li className="nav-item">
                  <a href="#" className="nav-link text-light">
                    Contact
                  </a>
                </li>
              </NavLink>
            </ul>
          </header>
        </div>
      </header>
    </>
  );
}

export function MobileNavbar() {
  const [bodycolor, setbodycolor] = useState("white");
  const [DL, setDL] = useState("fa-solid fa-cloud-moon");
  const length = useSelector((state) => state.AllDATA);

  const changebody = () => {
    const newcolor = bodycolor === "white" ? "black" : "white";
    const newDL =
      DL === "fa-solid fa-cloud-moon"
        ? "fa-solid fa-cloud-sun"
        : "fa-solid fa-cloud-moon";
    setbodycolor(newcolor);
    setDL(newDL);
    document.body.style.backgroundColor = newcolor;
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const itemList = [
    { name: "Leather Bag", route: "/leatherbag" },
    { name: "Leather Belts", route: "/leatherbelts" },
    { name: "Leather Gloves", route: "/leathergloves" },
    { name: "Leather Jackets", route: "/leatherjackets" },
    { name: "Leather Keychains", route: "/leatherkeychains" },
    { name: "Leather Notebook Covers", route: "/leathernotebookcovers" },
    { name: "Leather Phone Cases", route: "/leatherphonecases" },
    { name: "Leather Shoes", route: "/leathershoes" },
    { name: "Leather Wallets", route: "/leatherwallets" },
    { name: "Leather Watch Straps", route: "/leatherwatchstraps" },
  ];

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query) {
      const filtered = itemList.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = itemList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <img src="src/img/logo white.png" width={"70"} height={"70"} alt="" />
          <div className="display">
            <Link to={"/cart"}>
              <button type="button" class="btn  me-2">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <span className="cart-length">{length.length}</span>
            </Link>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={"/"}>
                {" "}
                <li class="nav-item">
                  <a href="#" class="nav-link text-dardark" aria-current="page">
                    Home
                  </a>
                </li>
              </Link>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul class="dropdown-menu">
                  <Link to={"/leatherwallets"}>
                    {" "}
                    <li>
                      <a class="dropdown-item" href="#">
                        {" "}
                        wallets
                      </a>
                    </li>
                  </Link>
                  <Link to={"leatherbelts"}>
                    {" "}
                    <li>
                      <a class="dropdown-item" href="#">
                        {" "}
                        belts
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leatherbag"}>
                    {" "}
                    <li>
                      <a class="dropdown-item" href="#">
                        {" "}
                        bags
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leatherjackets"}>
                    <li>
                      <a class="dropdown-item" href="#">
                        {" "}
                        jackets
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leathershoes"}>
                    {" "}
                    <li>
                      <a class="dropdown-item" href="#">
                        {" "}
                        shoes
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leathergloves"}>
                    <li>
                      <a class="dropdown-item" href="#">
                        {" "}
                        gloves
                      </a>
                    </li>
                  </Link>
                  <Link to={"leatherwatchstraps"}>
                    {" "}
                    <li>
                      <a class="dropdown-item" href="#">
                        {" "}
                        watch straps
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leatherphonecases"}>
                    <li>
                      <a class="dropdown-item" href="#">
                        {" "}
                        phone cases
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leatherkeychains"}>
                    {" "}
                    <li>
                      <a class="dropdown-item" href="#">
                        {" "}
                        keychains
                      </a>
                    </li>
                  </Link>
                  <Link to={"/leathernotebookcovers"}>
                    {" "}
                    <li>
                      <a class="dropdown-item" href="#">
                        {" "}
                        notebook covers
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>
              <Link to={"/b"}>
                {" "}
                <li class="nav-item">
                  <a href="#" class="nav-link text-dark">
                    About
                  </a>
                </li>
              </Link>
              <Link to={"/a"}>
                {" "}
                <li class="nav-item">
                  <a href="#" class="nav-link text-dark">
                    Contact
                  </a>
                </li>
              </Link>

              <button type="button" class="btn  me-2" onClick={changebody}>
                <i className={DL}></i>
              </button>
              <Link to={"/signup"}>
                <button type="button" className="btn me-2">
                  Sign-up
                </button>
              </Link>
            </ul>
            <div className="sh">
              <form className="search-bar" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleInputChange}
                />
              </form>
              {searchQuery && (
                <ul className="item-list text-dark">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <li key={index} className="listitem">
                        <Link to={item.route}>
                          {item.name} - {item.price}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>No matching items found</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};
