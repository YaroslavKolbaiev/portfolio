"use client";

const Footer = () => {
  const srollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero-foot">
      <nav className="tabs">
        <div class="container">
          <a onClick={srollToTop}>
            <img
              className="icon is-large cardIcon"
              src="/assets/arrow-circle-up-svgrepo-com.svg"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
