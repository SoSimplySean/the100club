// import { HiMenuAlt3 } from "react-icons/hi";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// import css from "./Header.module.css";

// import MyButton from "../../UI/Button/Button";

// import MenuItems from "./MenuItems";

// const Header = (props) => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <nav onClick={clicked ? handleClick : null} className={css.navbar}>
//       {/* <div className={css.navLogo}>
//         <img src={NavLogo} alt="NavLogo" />
//       </div> */}
//       <div className={css.navIcon} onClick={handleClick}>
//         <HiMenuAlt3 size={36} />
//       </div>
//       <ul
//         className={
//           clicked
//             ? `${css.navMenu} ${css.active}`
//             : `${css.navMenu} ${css.hidden}`
//         }
//       >
//         {MenuItems.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link className={css.navLink} to={item.url}>
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}
//         <li>
// <Button
//   text="LOG IN"
//   // typeform="true"
//   link="https://t.me/JoinThe100Club"
//   inverted={clicked ? "false" : "true"}
//   className={css.navButton}
// />
//         </li>
//         <li>
// <Button
//   text="JOIN WAITLIST"
//   typeform="true"
//   className={css.navButton}
// />
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Headerimport * as React from 'react';
import React from "react";

import Logo from "../../../assets/Logo.png";
import MenuItems from "./MenuItems";
import ImageGrid from "../../UI/ImageGrid/ImageGrid";
import MyButton from "../../UI/Button/Button";

import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "@mui/material";

// const settings = ["Profile", "Account", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            component={RouterLink}
            to={"/"}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: "0.5rem",
              textDecoration: "none",
            }}
          >
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <ImageGrid
                src={Logo}
                alt={"Logo"}
                maxWidth={{ maxWidth: "40px" }}
              />
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {MenuItems.map((item, index) => (
                <Link
                  key={index}
                  component={RouterLink}
                  to={item.url}
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  <MenuItem key={item} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontWeight: "bold",
                        color: "primary",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Link
            component={RouterLink}
            to={"/"}
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              mr: "0.5rem",
              textDecoration: "none",
            }}
          >
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <ImageGrid
                src={Logo}
                alt={"Logo"}
                maxWidth={{ maxWidth: "40px" }}
              />
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item, index) => (
              <Link
                key={index}
                component={RouterLink}
                to={item.url}
                sx={{
                  textDecoration: "none",
                }}
              >
                <Button
                  key={item}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "primary.main",
                    display: "block",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <MyButton
              text="Chat with Sean"
              link="https://t.me/MrRaincloud"
              symbol="arrow"
              // sx={{ mr: 2 }}
            />
            {/* <Button
              sx={{
                mr: 3,
                my: 2,
                color: "white",
                display: { xs: "none", md: "block" },
                fontWeight: "bold",
                backgroundColor: "primary.main",
                "&:hover": { backgroundColor: "black" },
              }}
            >
              SIGN UP
            </Button> */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile Photo" sx={{ bgcolor: "primary.main" }}>
                  <AddIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link
                key={1}
                component={RouterLink}
                to={"/join"}
                sx={{
                  textDecoration: "none",
                }}
              >
                <MenuItem key={1} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{ fontWeight: "bold" }}>
                    Sign Up
                  </Typography>
                </MenuItem>
              </Link>
              <Link
                key={2}
                component={RouterLink}
                to={"/login"}
                sx={{
                  textDecoration: "none",
                }}
              >
                <MenuItem key={2} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{ fontWeight: "bold" }}>
                    Login
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
