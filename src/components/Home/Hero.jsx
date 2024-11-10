function Hero() {
  return (
    <div className=" hero d-flex flex-row justify-content-center align-items-center">
      <div className="heroContent d-flex flex-column justify-content-around align-items-center heroBg">
        <span
          className="d-none d-md-block heroBrandImgLg img-fluid mb-5"
        ></span>

        <span
          alt="Tesnic.io Brand Image"
          className="d-md-none heroBrandImgSm img-fluid mb-5"
        ></span>

        <div className=" h2 text-center px-1 HeroText ">
          Heyya! It's me
          <div className="heroSpecial h1 text-center text-warning en-sirin">
            <span className="heroTesnic ">TesNic </span>
            <span className="HeroChristo d-none">Christo John </span>
          </div>
          here
        </div>
        <p className=" web-dev btn nav-link text-capitalize btn-outline-success px-3 en-sirin">
          WEB-DEV
        </p>
      </div>
    </div>
  );
}

export default Hero;
