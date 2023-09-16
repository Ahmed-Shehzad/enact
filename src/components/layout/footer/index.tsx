import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useIntl } from "react-intl";

const Footer = () => {
  const intl = useIntl();
  const director = intl.formatMessage({
    id: `$page.copyright.director`,
  });
  const court = intl.formatMessage({
    id: `$page.copyright.local.court`,
  });
  const registery = intl.formatMessage({
    id: `$page.copyright.registery.court`,
  });

  const copyright = intl.formatMessage({
    id: `$page.copyright`,
  });

  return (
    <>
      <Typography
        component={"p"}
        textAlign={"justify"}
        color={"gray"}
        marginBottom={"16px"}
        fontSize={24}
      >
        {copyright}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography color={"green"}>EnACT TGU</Typography>
          <Typography>Nobelstraße 15, 70569 Stuttgart</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography color={"green"}>TTI GmbH – EnACT TGU</Typography>
              <Typography>{director}</Typography>
              <Typography>Prof. Dr.-Ing. Bernd Bertsche</Typography>
              <Typography>Dipl.-Ing., MBA Peter Heinke</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography color={"green"}>{registery}</Typography>
              <Typography>{court} Stuttgart HRB 19455</Typography>
              <Typography>USt-ldNr. DE 194532993</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography color={"green"}>EnACT TGU</Typography>
          <Typography>Hannes Lauer</Typography>
          <Typography>Nobelstraße 15</Typography>
          <Typography>70569 Stuttgart</Typography>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Typography variant="body2" textAlign={"center"}>
            <Link href={"/copyright"} style={{ textDecoration: "none" }}>
              © 2023 EnACT, Inc. All rights reserved.
            </Link>
          </Typography>
          <Box textAlign={"center"}>
            <Link href="#">
              <Twitter fontSize="large" color="action" />
            </Link>
            <Link href="#">
              <Instagram fontSize="large" color="action" />
            </Link>
            <Link href="#">
              <Facebook fontSize="large" color="action" />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
