import React, { useEffect } from "react";
    import { ADD, REM } from "../Functions/Actions";
    import { useDispatch, useSelector } from "react-redux";
    import {
      Productslist,
      Productslist1,
      Productslist2,
      Productslist3,
      Productslist4,
      Productslist5,
      Productslist6,
      Productslist7,
      Productslist8,
      Productslist9
    } from "../Functions/Productaction";

      export const Leatherwallets = () => {
        const dispatch = useDispatch();
        const cart = useSelector((state) => state.ProductData);

        useEffect(() => {
          dispatch(Productslist());
        }, [dispatch]);
      
      
        return (
          <>
            <h2 className="text-center m-5">Latest Wallets</h2>
      
            <div className="container">
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 mt-2">
                {cart.map((item) => {
                  const discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
                  return (
                    <div key={item.id} className="col">
                      <div className="card shadow-sm">
                        <div className="product-image">
                          <span className="product-new-label rounded-1">Sale</span>
                          <span className="product-discount-label rounded-1">
                            {discount}%
                          </span>
                        </div>
                          <img className="img" src={item.img} alt="" />
                        <div className="card-body">
                          <p className="card-text">{item.name}</p>
                          <p className="card-text">Color: {item.color}</p>
                          <p className="card-text">Price: ₹{item.Price}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group d-flex flex-wrap">
                              <button
                                className="btn m-2 ms-2"
                                onClick={() => dispatch(ADD(item))}
                              >
                                Add to cart
                              </button>
                              <button
                                className="btn ms-2 m-2"
                                onClick={() => dispatch(REM(item.id))}
                              >
                                Remove from cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      };
export function Leatherbelts() {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.AllDATA);
  const cart = useSelector((c) => c.ProductData);

  useEffect(() => {
    dispatch(Productslist1());
  }, [dispatch]);

  return (
    <>
      <h2 className="text-center m-5">Latest Belts</h2>

      <div className="container">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 mt-2">
          {cart.map((item) => {
            const discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
            return (
              <div key={item.id} className="col">
                <div className="card shadow-sm">
                  <div className="product-image">
                    <span className="product-new-label rounded-1">Sale</span>
                    <span className="product-discount-label rounded-1">
                      {discount}%
                    </span>
                  </div>
                  <img className="img" src={item.img} alt="" />
                  <div className="card-body">
                    <p className="card-text">{item.name}</p>
                    <p className="card-text">Color: {item.color}</p>
                    <p className="card-text">Price: ₹{item.Price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group d-flex flex-wrap">
                        <button
                          className="btn m-2 ms-2"
                          onClick={() => dispatch(ADD(item))}
                        >
                          Add to cart
                        </button>
                        <button
                          className="btn ms-2 m-2"
                          onClick={() => dispatch(REM(item.id))}
                        >
                          Rem to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function Leathergloves() {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.AllDATA);
  const cart = useSelector((c) => c.ProductData);

  useEffect(() => {
    dispatch(Productslist2());
  }, [dispatch]);
  return (
    <>
      <h2 className="text-center m-5">Latest Belts</h2>

      <div className="container">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 mt-2">
          {cart.map((item) => {
            const discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
            return (
              <div key={item.id} className="col">
                <div className="card shadow-sm">
                  <div className="product-image">
                    <span className="product-new-label rounded-1">Sale</span>
                    <span className="product-discount-label rounded-1">
                      {discount}%
                    </span>
                  </div>
                  <img className="img" src={item.img} alt="" />
                  <div className="card-body">
                    <p className="card-text">{item.name}</p>
                    <p className="card-text">Color: {item.color}</p>
                    <p className="card-text">Price: ₹{item.Price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group d-flex flex-wrap">
                        <button
                          className="btn m-2 ms-2"
                          onClick={() => dispatch(ADD(item))}
                        >
                          Add to cart
                        </button>
                        <button
                          className="btn ms-2 m-2"
                          onClick={() => dispatch(REM(item.id))}
                        >
                          Rem to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function Leatherjackets() {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.AllDATA);
  const cart = useSelector((c) => c.ProductData);

  useEffect(() => {
    dispatch(Productslist3());
  }, [dispatch]);
  return (
    <>
      <h2 className="text-center m-5">Latest Jackets</h2>

      <div className="container">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 mt-2">
          {cart.map((item) => {
            const discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
            return (
              <div key={item.id} className="col">
                <div className="card shadow-sm">
                  <div className="product-image">
                    <span className="product-new-label rounded-1">Sale</span>
                    <span className="product-discount-label rounded-1">
                      {discount}%
                    </span>
                  </div>
                  <img className="img jacket" src={item.img} alt="" />
                  <div className="card-body">
                    <p className="card-text">{item.name}</p>
                    <p className="card-text">Color: {item.color}</p>
                    <p className="card-text">Price: ₹{item.Price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group d-flex flex-wrap">
                        <button
                          className="btn m-2 ms-2"
                          onClick={() => dispatch(ADD(item))}
                        >
                          Add to cart
                        </button>
                        <button
                          className="btn ms-2 m-2"
                          onClick={() => dispatch(REM(item.id))}
                        >
                          Rem to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function Leatherkeychains() {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.AllDATA);
  const cart = useSelector((c) => c.ProductData);

  useEffect(() => {
    dispatch(Productslist4());
  }, [dispatch]);
  return (
    <>
      <h2 className="text-center m-5">Latest KeyChains</h2>

      <div className="container">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 mt-2">
          {cart.map((item) => {
            const discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
            return (
              <div key={item.id} className="col">
                <div className="card shadow-sm">
                  <div className="product-image">
                    <span className="product-new-label rounded-1">Sale</span>
                    <span className="product-discount-label rounded-1">
                      {discount}%
                    </span>
                  </div>
                  <img className="img" src={item.img} alt="" />
                  <div className="card-body">
                    <p className="card-text">{item.name}</p>
                    <p className="card-text">Color: {item.color}</p>
                    <p className="card-text">Price: ₹{item.Price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group d-flex flex-wrap">
                        <button
                          className="btn m-2 ms-2"
                          onClick={() => dispatch(ADD(item))}
                        >
                          Add to cart
                        </button>
                        <button
                          className="btn ms-2 m-2"
                          onClick={() => dispatch(REM(item.id))}
                        >
                          Rem to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function Leathernotebookcovers() {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.AllDATA);
  const cart = useSelector((c) => c.ProductData);

  useEffect(() => {
    dispatch(Productslist5());
  }, [dispatch]);
  return (
    <>
      <h2 className="text-center m-5">Latest KeyChains</h2>

      <div className="container">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 mt-2">
          {cart.map((item) => {
            const discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
            return (
              <div key={item.id} className="col">
                <div className="card shadow-sm">
                  <div className="product-image">
                    <span className="product-new-label rounded-1">Sale</span>
                    <span className="product-discount-label rounded-1">
                      {discount}%
                    </span>
                  </div>
                  <img className="img" src={item.img} alt="" />
                  <div className="card-body">
                    <p className="card-text">{item.name}</p>
                    <p className="card-text">Color: {item.color}</p>
                    <p className="card-text">Price: ₹{item.Price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group d-flex flex-wrap">
                        <button
                          className="btn m-2 ms-2"
                          onClick={() => dispatch(ADD(item))}
                        >
                          Add to cart
                        </button>
                        <button
                          className="btn ms-2 m-2"
                          onClick={() => dispatch(REM(item.id))}
                        >
                          Rem to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function Leatherphonecases() {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.AllDATA);
  const cart = useSelector((c) => c.ProductData);

  useEffect(() => {
    dispatch(Productslist6());
  }, [dispatch]);
  return (
    <>
      <h2 className="text-center m-5">Latest PhoneCase</h2>

<div className="container">
  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 mt-2">
    {cart.map((item) => {
      const discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      return (
        <div key={item.id} className="col">
          <div className="card shadow-sm">
            <div className="product-image">
              <span className="product-new-label rounded-1">Sale</span>
              <span className="product-discount-label rounded-1">
                {discount}%
              </span>
            </div>
            <img className="img" src={item.img} alt="" />
            <div className="card-body">
              <p className="card-text">{item.name}</p>
              <p className="card-text">Color: {item.color}</p>
              <p className="card-text">Price: ₹{item.Price}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group d-flex flex-wrap">
                  <button
                    className="btn m-2 ms-2"
                    onClick={() => dispatch(ADD(item))}
                  >
                    Add to cart
                  </button>
                  <button
                    className="btn ms-2 m-2"
                    onClick={() => dispatch(REM(item.id))}
                  >
                    Rem to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>    </>
  );
}

export function Leathershoes() {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.AllDATA);
  const cart = useSelector((c) => c.ProductData);

  useEffect(() => {
    dispatch(Productslist7());
  }, [dispatch]);
  return (
    <>
    
    <h2 className="text-center m-5">Latest Leather Shoes</h2>

<div className="container">
  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 mt-2">
    {cart.map((item) => {
      const discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      return (
        <div key={item.id} className="col">
          <div className="card shadow-sm">
            <div className="product-image">
              <span className="product-new-label rounded-1">Sale</span>
              <span className="product-discount-label rounded-1">
                {discount}%
              </span>
            </div>
            <img className="img shoe" src={item.img} alt="" />
            <div className="card-body">
              <p className="card-text">{item.name}</p>
              <p className="card-text">Color: {item.color}</p>
              <p className="card-text">Price: ₹{item.Price}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group d-flex flex-wrap">
                  <button
                    className="btn m-2 ms-2"
                    onClick={() => dispatch(ADD(item))}
                  >
                    Add to cart
                  </button>
                  <button
                    className="btn ms-2 m-2"
                    onClick={() => dispatch(REM(item.id))}
                  >
                    Rem to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>  
    
    </>
  );
}

export function Leatherbag() {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.AllDATA);
  const cart = useSelector((c) => c.ProductData);

  useEffect(() => {
    dispatch(Productslist8());
  }, [dispatch]);
  return (
    <>
    
    <h2 className="text-center m-5">Latest Leather Bags</h2>

<div className="container">
  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 mt-2">
    {cart.map((item) => {
      const discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      return (
        <div key={item.id} className="col">
          <div className="card shadow-sm">
            <div className="product-image">
              <span className="product-new-label rounded-1">Sale</span>
              <span className="product-discount-label rounded-1">
                {discount}%
              </span>
            </div>
            <img className="img shoe" src={item.img} alt="" />
            <div className="card-body">
              <p className="card-text">{item.name}</p>
              <p className="card-text">Color: {item.color}</p>
              <p className="card-text">Price: ₹{item.Price}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group d-flex flex-wrap">
                  <button
                    className="btn m-2 ms-2"
                    onClick={() => dispatch(ADD(item))}
                  >
                    Add to cart
                  </button>
                  <button
                    className="btn ms-2 m-2"
                    onClick={() => dispatch(REM(item.id))}
                  >
                    Rem to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>  
    

    </>
  );
}

export function Leatherwatchstraps() {
  
  const dispatch = useDispatch();
  const length = useSelector((state) => state.AllDATA);
  const cart = useSelector((c) => c.ProductData);

  useEffect(() => {
    dispatch(Productslist9());
  }, [dispatch]);
  return (
    <>
    
    <h2 className="text-center m-5">Latest Leather Bags</h2>

<div className="container">
  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 mt-2">
    {cart.map((item) => {
      const discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      return (
        <div key={item.id} className="col">
          <div className="card shadow-sm">
            <div className="product-image">
              <span className="product-new-label rounded-1">Sale</span>
              <span className="product-discount-label rounded-1">
                {discount}%
              </span>
            </div>
            <img className="img " src={item.img} alt="" />
            <div className="card-body">
              <p className="card-text">{item.name}</p>
              <p className="card-text">Color: {item.color}</p>
              <p className="card-text">Price: ₹{item.Price}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group d-flex flex-wrap">
                  <button
                    className="btn m-2 ms-2"
                    onClick={() => dispatch(ADD(item))}
                  >
                    Add to cart
                  </button>
                  <button
                    className="btn ms-2 m-2"
                    onClick={() => dispatch(REM(item.id))}
                  >
                    Rem to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div> 
    </>
  );
}
