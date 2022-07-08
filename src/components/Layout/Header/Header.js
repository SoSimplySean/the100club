import React from "react";

import Logo from "../../../assets/Logo.png";
import MenuItems from "./MenuItems";
import ImageGrid from "../../UI/ImageGrid/ImageGrid";

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
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "@mui/material";

const Header = ({ session }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log(session);
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
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
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
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile Photo" sx={{ bgcolor: "primary.main" }}>
                  <PersonIcon />
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
              {session && (
                <Box>
                  <Link
                    key={1}
                    component={RouterLink}
                    to={"/dashboard"}
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <MenuItem key={1} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        sx={{ fontWeight: "bold" }}
                      >
                        Dashboard
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Link
                    key={2}
                    component={RouterLink}
                    to={"/cart"}
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <MenuItem key={2} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        sx={{ fontWeight: "bold" }}
                      >
                        Cart
                      </Typography>
                    </MenuItem>
                  </Link>
                </Box>
              )}

              {!session && (
                <Box>
                  <Link
                    key={1}
                    component={RouterLink}
                    to={"/join"}
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <MenuItem key={1} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        sx={{ fontWeight: "bold" }}
                      >
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
                      <Typography
                        textAlign="center"
                        sx={{ fontWeight: "bold" }}
                      >
                        Login
                      </Typography>
                    </MenuItem>
                  </Link>
                </Box>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
