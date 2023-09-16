import { IScreenDimensions } from "@components/layout/lib";
import { ToggleText } from "@constants";
import { Button, Typography } from "@mui/joy";
import { Box, Grid, Skeleton, useMediaQuery } from "@mui/material";
import { MemberProps } from "@utils/team/lib";
import Image from "next/image";
import { useState } from "react";

interface MemberDescriptionProps {
  description: string;
  isSmallScreen: boolean;
  toggle: boolean;
  onToggle: () => void;
}

const MemberDescription = (props: MemberDescriptionProps) => {
  const { description, isSmallScreen, toggle, onToggle } = props;
  const text = toggle
    ? `${description.split(" ").slice(0, 10).join(" ")} ...`
    : description;
  if (isSmallScreen) {
    return (
      <>
        <Typography>{text}</Typography>
        <Button variant="plain" onClick={onToggle}>
          {toggle ? ToggleText.SEE_MORE : ToggleText.SEE_LESS}
        </Button>
      </>
    );
  } else {
    return <Typography>{description}</Typography>;
  }
};

const Member = (props: MemberProps) => {
  const { name, description, imageUrl } = props;
  const [toggle, setToggle] = useState<boolean>(
    description.split(" ").length > 10,
  );

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const screenDimensions: IScreenDimensions = isSmallScreen
    ? {
        width: 300,
        height: 300,
      }
    : {
        width: 250,
        height: 250,
      };

  const { width, height } = screenDimensions;

  const onToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item md={4} xs={6}>
        {imageUrl.toString().length > 0 ? (
          <Image
            quality={100}
            width={width}
            height={height}
            src={imageUrl}
            alt={name}
          />
        ) : (
          <Box width={width} height={height}>
            <Skeleton
              width={width}
              height={height}
              variant="rectangular"
              animation="wave"
            />
          </Box>
        )}
      </Grid>
      <Grid item md={8} xs={6}>
        <Typography component={"h3"} variant="solid">
          {name}
        </Typography>
        <Typography>
          <MemberDescription
            description={description}
            isSmallScreen={isSmallScreen}
            onToggle={onToggle}
            toggle={toggle}
          />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Member;
