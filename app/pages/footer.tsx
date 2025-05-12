import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full p-5 bg-slate-200">
      <div className="container">
        <div className="fore">
          <h1>DROP US A LINE</h1>
          <p>- We would like to hear from you</p>
        </div>
        <div className="col-1">
          <div className="c-col">
            <div className="loc-col">
              <h4>ADDRESS</h4>
              <div className="row">
                <div className="data">
                  <i className="bi bi-telephone icon"></i>
                  <div className="text"> +250 788 282 252</div>
                </div>
                <div className="data">
                  <i className="bi bi-at icon"></i>
                  <div className="text"> info@biafricantouch.com</div>
                </div>
                <div className="data">
                  <i className="bi bi-geo-alt icon"></i>
                  <div className="text">
                    <ul>
                      <li> - Giporoso,  Remera, Kigali</li>
                      <li> - Youth center, Muhoza, Musanze</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-col">
            <div className="field-row">
              <div className="inputs">
                <input type="text" name="name" id="name" placeholder="Full names" />
                <input type="email" name="email" id="email" placeholder="Email" />
              </div>
              <div className="text">
                <textarea name="message" id="message" placeholder="Your message"></textarea>
              </div>
              <div className="submit">
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div className="follow-col">
            <h4>Follow Us</h4>
            <div className="row-2 flex justify-between w-full">
              <Link href="#">
                <i className="bi bi-twitter icon text-2xl mr-3 my-2"></i>
              </Link>
              <Link href="#">
                <i className="bi bi-whatsapp icon text-2xl mr-3 my-2"></i>
              </Link>
              <Link href="#">
                <i className="bi bi-linkedin icon text-2xl mr-3 my-2"></i>
              </Link>
              <Link href="#">
                <i className="bi bi-instagram icon text-2xl mr-3 my-2"></i>
              </Link>
              <Link href="#">
                <i className="bi bi-facebook icon text-2xl mr-3 my-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="col">
          <div className="logo">
            <Image src="/logo/favicon.ico" width={40} height={40} alt="Logo" layout="contain" />
          </div>
          <span>&copy; Copyright 2024. All rights reserved</span>
        </div>
      </div>
      <button className="back-to-top">
        <i className="bi bi-chevron-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
