import React, { useState, useEffect, useContext } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { BiMenuAltRight, BiUser, BiCart } from "react-icons/bi";
import { DataContext } from "nahuel/store/GlobalState";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Avatar, Button } from "@mui/material";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(5);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const open2 = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    toast.success("Ha cerrado sesion!");
    return router.push("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const adminRouter = () => {
    return (
      <div className={styles.avatarContainer}>
        <Avatar
          id="basic-button"
          aria-controls={open2 ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? "true" : undefined}
          onClick={handleClick}
          alt="UserImage"
          src={auth.user.avatar}
          style={{ cursor: "pointer"}}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open2}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Perfil</MenuItem>
          <MenuItem onClick={handleClose}>Products</MenuItem>
          <MenuItem onClick={handleClose}>Categories</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  };

  const loggedRouter = () => {
    return (
      <div className={styles.avatarContainer}>
        <Avatar
          id="basic-button"
          aria-controls={open2 ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? "true" : undefined}
          onClick={handleClick}
          alt="UserImage"
          src={auth.user.avatar}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open2}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Perfil</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
          {auth.user.role === "admin" && adminRouter()}
        </Menu>
        {/*     <Button variant="outlined" className={styles.btn}>Logout</Button> */}
      </div>
    );
  };

  return (
    <>
      <header
        className={`${styles.mainHeader} ${
          scrolled ? styles.stickyHeader : ""
        }`}
      >
        <div className={styles.headerContent}>
          <ul className={styles.left}>
            <Link href="/">
              <li style={{ color: "white" }}>Home</li>
            </Link>
            <li>Nosotros</li>
            <li>Productos</li>
          </ul>

          <div className={styles.center}>
            <Link href="/">
              <span style={{ color: "white" }}>AOE-TIENDA.</span>
            </Link>
          </div>
          <div className={styles.right}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/aoe_indumentaria"
            >
              <BsInstagram />
            </a>
            <Link href="/cart">
              <BiCart style={{ fontSize: "35px" }} />
              {cartCount > 0 && <div className={styles.badge}>{cartCount}</div>}
            </Link>
            {Object.keys(auth).length === 0 ? (
              <Link href="/signin">
                <BiUser style={{ fontSize: "35px" }} />
              </Link>
            ) : (
              loggedRouter()
            )}

            <BiMenuAltRight
              onClick={() => setOpen(!open)}
              style={{ fontSize: "34px" }}
              className={styles.menuxIcon}
            />
            {open && (
              <div className={styles.containerMenus}>
                <ul>
                  <Link href="/products">
                    <li>Productos</li>
                  </Link>
                  <Link href="/about">
                    <li>Nosotros</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </header>
    </>
  );
};

export default Navbar;
