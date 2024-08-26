const Footer = () => {
  return (
    <footer className="footer pt-10">
      <div className="bg-bground md:flex justify-between px-4">
        <div className="footer__media">
          <div className="footer__primary mt-8">
            <span>Building products that meets users needs</span>
          </div>
          <div className="footer__socials"></div>
        </div>
        <div className="footer__content my-8">
          <h5>Links</h5>
          <ul>
            <li>
              <span>Our Projects</span>
            </li>
            <li>
              <span>About us</span>
            </li>
            <li>
              <span>Our Location</span>
            </li>
          </ul>
        </div>
        <div className="footer__content my-6">
          <h5>Legal</h5>
          <ul>
            <li>
              <span>Terms and condition</span>
            </li>
            <li>
              <span>Privact and Policy</span>
            </li>
            <li>
              <span>Company reviews</span>
            </li>
          </ul>
        </div>
        <div className="footer__content my-8">
          <h5>Support</h5>
          <ul>
            <li>
              <span>FAQs</span>
            </li>
            <li>
              <span>Contact Us</span>
            </li>
            <li>
              <span>Pricing</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__foot text-center w-3/4 font-semibold mb-4 m-auto">
        <p>© 2024 PTS. Copyright and All Rights reserved</p>
        <p>Terms and Condtions</p>
      </div>
    </footer>
  );
};

export default Footer;
