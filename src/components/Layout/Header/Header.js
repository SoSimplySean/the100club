import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

import css from "./Header.module.css";

import Button from "../../UI/Button/Button";
import MenuItems from "./MenuItems";
import NavLogo from "../../../assets/NavLogo.png";

const Header = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={css.navbar}>
      <div className={css.navLogo}>
        <img src={NavLogo} alt="NavLogo" />
      </div>
      <div className={css.navIcon} onClick={handleClick}>
        {/* Add logic here for logo shape depending on clicked or not */}
        <HiMenuAlt3 />
      </div>
      {/* <ul className={clicked ? `css.navMenu css.active` : `css.navMenu`}> */}
      <ul className={css.navMenu}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              {/* Issue: template literal doesn't work here for some reason. {`css.${item.cName}`} */}
              <a className={css.navLink} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
        <li>
          <Button text="LOG IN" link="https://t.me/JoinThe100Club" />
        </li>
        <li>
          <Button text="JOIN WAITLIST" link="https://t.me/JoinThe100Club" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
