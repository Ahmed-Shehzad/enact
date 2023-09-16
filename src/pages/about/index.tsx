import { Box, Typography } from "@mui/material";
import Team from "@pages/team";
import { useIntl } from "react-intl";

const About = () => {
  const intl = useIntl();
  const first_heading = intl.formatMessage({
    id: `$page.about.content_heading_1`,
  });

  const first_description = intl.formatMessage({
    id: `$page.about.content_description_1`,
  });

  const second_heading = intl.formatMessage({
    id: `$page.about.content_heading_2`,
  });

  const second_description = intl.formatMessage({
    id: `$page.about.content_description_2`,
  });

  return (
    <>
      <Typography component={"p"} color={"green"} fontSize={36}>
        {first_heading}
      </Typography>
      <Typography component={"p"} fontSize={16}>
        {first_description}
      </Typography>

      <Box marginY={"16px"}>
        <Team />
      </Box>

      <Typography component={"p"} color={"green"} fontSize={36}>
        {second_heading}
      </Typography>
      <Typography component={"p"} fontSize={16}>
        {second_description}
      </Typography>
    </>
  );
};

export default About;
