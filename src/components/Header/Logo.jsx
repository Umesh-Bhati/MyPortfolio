import { HashLink } from "react-router-hash-link";

function Logo({ clicked, setClicked }) {
  return (
    <div className="header__logo">
      <HashLink
        smooth
        to="/#"
        onClick={() => {
          if (clicked) {
            setClicked(false);
          }
        }}
      >
        <img src="/images/Logo.png" alt="Brand Logo" width={200} color="#fff"  />
      </HashLink>
    </div>
  );
}

export default Logo;
