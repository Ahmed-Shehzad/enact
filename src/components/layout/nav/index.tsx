import { Page } from "@components";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "@public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useIntl } from "react-intl";
import Flag from "react-world-flags";

function Navbar() {
  const { locales, route } = useRouter();
  const isMobileScreen = useMediaQuery("(max-width: 576px)");

  const intl = useIntl();
  const home = intl.formatMessage({ id: `$page.home.head.title` });
  const about = intl.formatMessage({ id: `$page.about.head.title` });
  const team = intl.formatMessage({ id: `$page.team.head.title` });
  const references = intl.formatMessage({ id: `$page.references.head.title` });
  const services = intl.formatMessage({ id: `$page.services.head.title` });
  const contact = intl.formatMessage({ id: `$page.contact.head.title` });

  const pages: Page[] = [
    {
      name: "",
      data: {
        title: home,
      },
    },
    {
      name: "about",
      data: {
        title: about,
      },
    },
    {
      name: "references",
      data: {
        title: references,
      },
    },
    {
      name: "services",
      data: {
        title: services,
      },
    },
    // {
    //   name: "team",
    //   data: {
    //     title: team,
    //   },
    // },
    {
      name: "contact",
      data: {
        title: contact,
      },
    },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      style={{
        backgroundColor: "white",
        marginBottom: route === "/" ? "5px" : "60px",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              fontFamily={"monospace"}
              fontWeight={700}
              letterSpacing={".3rem"}
              color="black"
              textAlign={"center"}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                textDecoration: "none",
              }}
            >
              <Image
                src={logo}
                priority={true}
                alt="logo"
                height={100}
                width={200}
              />
            </Typography>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
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
                display: { xs: "block", sm: "none", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link
                    href={`/${page.name}`}
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <Typography textAlign="center">
                      {page.data.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link href="/">
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              <Image
                src={logo}
                priority={true}
                alt="logo"
                height={100}
                width={200}
              />
            </Typography>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                onClick={handleCloseNavMenu}
                href={`/${page.name}`}
                style={{ textDecoration: "none", flexGrow: 1 }}
              >
                <Typography textAlign="center" color={"gray"}>
                  {page.data.title}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              "& > *": { mx: isMobileScreen ? "1px" : "5px" },
            }}
          >
            {locales?.map((locale) => {
              return (
                <Link key={locale} href={route} locale={locale}>
                  <Flag code={locale === "en" ? "gb" : "de"} height={16} />
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
