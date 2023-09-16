import { GridItemText } from "@components/@types";
import { Sheet } from "@mui/joy";
import { Container, Grid, Typography, styled } from "@mui/material";
import { useIntl } from "react-intl";

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.background.default : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  borderRadius: 4,
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows["24"],
  height: "250px",
  marginBottom: "8px",
  marginLeft: "8px",
}));

const Services = () => {
  const intl = useIntl();
  const description = intl.formatMessage({
    id: `$page.services.content_description`,
  });
  const keyAreas = intl.formatMessage({
    id: `$page.services.content_key_areas_of_work`,
  });

  const data: GridItemText[] = [
    {
      title: intl.formatMessage({
        id: `$page.services.content_concept`,
      }),
      description: [
        intl.formatMessage({
          id: `$page.services.content_concept_description`,
        }),
      ],
    },
    {
      title: intl.formatMessage({
        id: `$page.services.content_acquisition`,
      }),
      description: [
        intl.formatMessage({
          id: `$page.services.content_acquisition_description_1`,
        }),
        intl.formatMessage({
          id: `$page.services.content_acquisition_description_2`,
        }),
        intl.formatMessage({
          id: `$page.services.content_acquisition_description_3`,
        }),
      ],
    },
    {
      title: intl.formatMessage({
        id: `$page.services.content_assessments`,
      }),
      description: [
        intl.formatMessage({
          id: `$page.services.content_assessments_description_1`,
        }),
        intl.formatMessage({
          id: `$page.services.content_assessments_description_2`,
        }),
        intl.formatMessage({
          id: `$page.services.content_assessments_description_3`,
        }),
      ],
    },
    {
      title: intl.formatMessage({
        id: `$page.services.content_evaluation`,
      }),
      description: [
        intl.formatMessage({
          id: `$page.services.content_description_1`,
        }),
      ],
    },
    {
      title: intl.formatMessage({
        id: `$page.services.content_policy`,
      }),
      description: [
        intl.formatMessage({
          id: `$page.services.content_policy_1`,
        }),
        intl.formatMessage({
          id: `$page.services.content_policy_2`,
        }),
        intl.formatMessage({
          id: `$page.services.content_policy_3`,
        }),
      ],
    },
    {
      title: intl.formatMessage({
        id: `$page.services.content_capacity`,
      }),
      description: [
        intl.formatMessage({
          id: `$page.services.content_capacity_description_1`,
        }),
      ],
    },
  ];

  return (
    <>
      <Typography
        component={"p"}
        textAlign={"justify"}
        marginBottom={"16px"}
        fontSize={16}
      >
        {description}
      </Typography>

      <Typography
        component={"p"}
        textAlign={"justify"}
        color={"green"}
        marginBottom={"16px"}
        fontSize={36}
      >
        {keyAreas}
      </Typography>

      <Container style={{ marginTop: "16px" }} maxWidth="xl">
        <Grid container>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Item>
                <Typography color={"gray"} fontSize={24}>
                  {item.title}
                </Typography>
                {item.description.map((desc, desc_index) => (
                  <Typography key={`${index}_${desc_index}`} fontSize={16}>
                    {desc}
                  </Typography>
                ))}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Services;
