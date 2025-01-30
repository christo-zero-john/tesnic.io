import SplitText from "../../lib/react-bits-animation-library/TextAnimations/SplitText/SplitText";

function Hero() {
  let delayStart = 100;
  return (
    <div className=" hero d-flex flex-row justify-content-center align-items-center">
      <div className="heroContent d-flex flex-column justify-content-around align-items-center heroBg">
        <div className="display-1 text-center px-1 HeroText my-3">
          <SplitText
            delay={delayStart}
            inDisplay={true}
            text="Heyya! It's me"
          />
          <div className="heroSpecial text-center text-warning en-sirin">
            <span className="heroTesnic ">
              <SplitText
                delay={delayStart + 100}
                inDisplay={true}
                text="TesNic"
              />{" "}
            </span>
            <span className="HeroChristo d-none">
              <SplitText
                delay={delayStart + 150}
                inDisplay={true}
                text="Christo John"
              />{" "}
            </span>
          </div>
          <SplitText delay={delayStart + 200} inDisplay={true} text="here" />
        </div>
        <p className=" web-dev btn nav-link text-capitalize btn-outline-success px-3 en-sirin">
          WEB-DEV
        </p>
      </div>
    </div>
  );
}

export default Hero;
