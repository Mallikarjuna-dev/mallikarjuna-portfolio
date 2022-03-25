import React from "react";
import { Toggle } from "./Toggle";
import { NavBarDiv, NavBarRight, NavLink } from "./Styles";
import { Link } from "react-scroll";
// import useMediaQuery from "react-use-media-query-hook";
// import { slide as Menu } from 'react-burger-menu'
// import './Navbar.module.css'
// import { red } from "@material-ui/core/colors";

const menus = [
  { id: 0, name: "Home", css: "home" },
  { id: 1, name: "About", css: "about" },
  { id: 2, name: "Skills", css: "skills" },
  { id: 3, name: "Projects", css: "projects" },
  { id: 4, name: "Contact", css: "contact" },
];


function Navbar({ themeToggler }) {
  // const isMobile = useMediaQuery("(max-width: 400px)");
  // const isTablet = useMediaQuery("(min-width: 401px) and (max-width: 875px)");
  // const isDesktop = useMediaQuery("(min-width: 876px) and (max-width: 1024px)");
  // const isLargeDesktop = useMediaQuery("(min-width: 1025px)");
  // const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   if ((isDesktop || isLargeDesktop) && open) {
  //     setOpen(false, isDesktop);
  //   }
  //   // eslint-disable-next-line
  // }, [isLargeDesktop, isDesktop]);
  // const [opened,setOpened] = useState(false);
  // const isOpened = ()=>{
  //   setOpened(!opened)
  //   console.log(opened)
  // }
  return (
    <NavBarDiv>
      <Toggle themeToggler={themeToggler} />
      <NavBarRight>
        {menus.map((item) => (
          <Link
            key={item.id}
            activeClass="active"
            to={item.css}
            spy={true}
            smooth={true}
            duration={500}
          >
            <NavLink key={item.id}>{item.name}</NavLink>
          </Link>
        ))}
      </NavBarRight>
    </NavBarDiv>
  );
}

export default Navbar;
