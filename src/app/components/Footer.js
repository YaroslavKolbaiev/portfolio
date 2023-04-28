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
          <a className="is-underlined is-size-4" onClick={srollToTop}>
            Go to top
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
