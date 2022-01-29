import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71ov-M1GhYL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
         
          <Product
            id="12321341"
            title="SZXKT Reversible L Shaped Desk, Home Office Desk with Drawers,Corner Computer Table Sturdy Gaming Desk Writing Desk Studio Craft Tables Workstation Printer Table with Non-Woven Drawer Rustic Brown"
            price={149.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61sbO+j5cnL._AC_SX425_.jpg"
          />
          <Product
            id="49538094"
            title="Coaster Home Furnishings Ontario Connect-It Computer Desk Cappuccino"
            price={390.12}
            rating={4}
            image="https://m.media-amazon.com/images/I/81F+9rSX1jS._AC_SX569_.jpg"
          />
 <Product
            id="49538094"
            title="CubiCubi Computer Office Desk Study Writing Table, Modern Simple Style PC Desk with Splice Board, White and Walnut"
            price={59.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Q5BNngBtL._AC_SX425_.jpg"
          />

           {/* <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          /> */}

        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="MUNBYN Label Printer,Thermal Shipping Label Printer for Shipping Packages Postage Home Small Business, Compatible with Etsy, Shopify,Ebay, Amazon, FedEx, UPS"
            price={155.69 }
            rating={4}
            image="https://m.media-amazon.com/images/I/61vZ0+vtPTL._AC_SX569_.jpg"
          />
          <Product
            id="23445930"
            title="HP DeskJet 4155e All-in-One Wireless Color Printer, with bonus 6 months free Instant Ink with HP+"
            price={109.89 }
            rating={4}
            image="https://m.media-amazon.com/images/I/612G5AUOZWL._AC_SX569_.jpg"
          />
          <Product
            id="3254354345"
            title="Brother DCP-L2550DWB All-in-One Wireless Monochrome Laser Printer - Print Scan Copy - 2400 x 600 dpi, 36 ppm, 128MB Memory, 250-Sheet, 50-Sheet ADF, Automatic Duplex Printing, Tillsiy Printer Cable"
            price={349.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/611oNisazrL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Amazon Basics Bonded Leather Big & Tall Executive Office Computer Desk Chair, 350-Pound Capacity - Cream"
            price={180.74}
            rating={4}
            image="https://m.media-amazon.com/images/I/31HXAu1PI3L._SX425_.jpg"
          />
     <Product
            id="90829332"
            title="High Back Leather Executive Office Chair - Genuine Leather Computer Desk Chair in 8-Layer Solid Walnut Wood and Heavy Duty Aluminum Base for Living Room Study Office"
            price={399.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71-jWdPX-VL._AC_SX522_.jpg"
          />
    </div>
     <Product
     id="90829344"
     title="SAMSUNG 65-Inch Class QLED Q60A Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in QN65Q60AAFXZA, 2021 Model"
     price={947.99}
     rating={5}
     image="https://m.media-amazon.com/images/I/51xcY24UapL._AC_SX569_.jpg"
     />

      </div>
    </div>
  );
}

export default Home;
