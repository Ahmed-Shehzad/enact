import { images } from "@images";
import { Sheet } from "@mui/joy";
import { Grid, Typography, styled } from "@mui/material";
import { useIntl } from "react-intl";
import { TeamMembers } from "../../lib";
import Member from "./member";

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.background.default : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  borderRadius: 4,
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows["24"],
  marginBottom: "8px",
  marginLeft: "8px",
  boxSizing: "content-box",
}));

const Team = () => {
  const intl = useIntl();
  const main = intl.formatMessage({
    id: `$page.team.main`,
  });

  const members: TeamMembers = [
    {
      imageUrl: images.team.ali,
      name: "Dr.-Ing Ali Jamshed",
      description:
        "A vulnerability and risk analysis specialist with vast experience in developing and validating vulnerability and risk indicators at local and global scales. He has significant experience in conducting field research, particularly by engaging stakeholders and communities. His research has been published in well reputed international journals that could inform and shape adaptation policies both for national and international organizations. Currently, he is working as an academic associate and is a core member of Prof. Joern Birkmann’s research team at the Institute of Spatial and Regional Planning, University of Stuttgart, Germany. He is also involved in IPCC Sixth Assessment Report - Working Group II as ‘chapter scientist’ and ‘drafting contributing author’. He has worked with international organizations CDKN and Mott Macdonalds-UK for climate compatible village development in Pakistan. He holds a Ph.D. in vulnerability assessment and rural - urban linkages from the University of Stuttgart, Germany as well as Masters in Infrastructure planning from the same university.",
    },
    {
      imageUrl: images.team.hannes,
      name: "Hannes Lauer",
      description:
        "A research specialist with longstanding experience in projects in Africa, Southeast Asia, Eastern Europe and Germany as well as on the practical level in administrations. For years he has been engaged in climate science with a strong focus on vulnerability assessments, adaptation planning and political mainstreaming. Currently, he works as an academic associate and is also a core member of Prof. Joern Birkmann’s research team where he coordinates the development of an indicator-based monitoring and evaluation framework for climate induced resettlement in Metro Manila. Before that, he was working as a climate protection officer in a German municipality being responsible for coordinating the implementation of mitigation and adaptation measures. Further, he was involved in WASCAL (West African Science Service Centre on Climate Change and Adapted Land Use) and conducted research in The Gambia and Senegal on the efforts of mainstreaming climate change adaptation into development strategies. He is well connected and engaged in climate science and the related policy fields. He was acting as climate Ambassador of the international Climate Alliance at the COP 23 in Bonn and gives talks and lectures on climate action. He holds an M.Sc. in Geography from the University of Bonn and a B.Sc. from the University of Tübingen, Germany.",
    },
    {
      imageUrl: "",
      name: "Himanshu Raj",
      description:
        "A sustainability specialist with rich experience working with cities and industries in policy planning and solutions implementation. He has worked on various aspects of the built environment & urban development (smart cities, water & waste management), and urban mobility (passenger and freight) in Europe, Latin America, and Asia. Recognizing the need for cooperation between public actors, the private sector, international organizations, and the civic society for reaching wider sustainable development goals, he has worked over the past 5+ years in environments varying from international organizations such as ICLEI - Local Governments for Sustainability in Bonn (Germany), research institutes and think tanks in the fields of sustainability, climate change and public policies. Himanshu holds a M.Sc. in Infrastructure Planning from the University of Stuttgart, Germany, and a B.Arch (Architecture) from the National Institute of Technology Jaipur, India. His master thesis analysed the “Resilience to climate change in the urban slums of Mumbai, India”. He is fluent in English, Hindi and has basic knowledge of German. ",
    },
  ];
  return (
    <>
      <Typography component={"p"} color={"green"} fontSize={24}>
        Get To Know Us
      </Typography>
      <Typography className="mb-2 text-muted">{main}</Typography>

      <Grid>
        {members.map((member, index) => {
          const { name, imageUrl, description } = member;
          const key = `${index}_${name}`;
          return (
            <Item key={key}>
              <Member
                imageUrl={imageUrl}
                name={name}
                description={description}
              />
            </Item>
          );
        })}
      </Grid>
    </>
  );
};

export default Team;
