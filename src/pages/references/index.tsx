import { Link, Typography } from "@mui/material";
import { useIntl } from "react-intl";

const References = () => {
  const intl = useIntl();

  const first_heading = intl.formatMessage({
    id: `$page.references.content_heading_1`,
  });

  return (
    <>
      <Typography
        component={"p"}
        textAlign={"justify"}
        color={"green"}
        fontSize={36}
      >
        {first_heading}
      </Typography>

      <Typography>
        Experience in Projects as the part of the team of IREUS, University of
        Stuttgart, Germany
      </Typography>

      <br />

      <Typography>
        •{" "}
        <Link underline="hover" href="#">
          {" "}
          UrbanAct- Integrated Urban Climate Action for Low-Carbon and Resilient
          Cities
        </Link>{" "}
        (ongoing)
      </Typography>

      <br />

      <Typography>
        •{" "}
        <Link
          underline="hover"
          target="_blank"
          href="https://www.ireus.uni-stuttgart.de/en/Research/Projects/LIRLAP/"
        >
          {" "}
          LIRLAP - Linking disaster risk governance and land-use planning: the
          case of informal settlements in hazard prone areas in The Philippines{" "}
        </Link>
        (ongoing)
      </Typography>

      <br />

      <Typography>
        •{" "}
        <Link
          underline="hover"
          target="_blank"
          href="https://www.ireus.uni-stuttgart.de/forschung/forschungsprojekte/Urbisphere/"
        >
          {" "}
          Urbisphere - coupling dynamic cities and climate --- European Research
          Council -ERC 2019-Synergy Grant project.{" "}
        </Link>{" "}
        (2021 to 2022)
      </Typography>

      <br />

      <Typography>
        •{" "}
        <Link
          underline="hover"
          target="_blank"
          href="https://www.ireus.uni-stuttgart.de/en/Research/Projects/IPCC/"
        >
          {" "}
          Quality assurance of IPCC-AR6: Chapter Scientist for WG II, Chapter 8
          (Poverty, livelihoods and sustainable development){" "}
        </Link>{" "}
        (2021 to 2022)
      </Typography>

      <br />

      <Typography>
        •{" "}
        <Link
          underline="hover"
          target="_blank"
          href="https://www.ireus.uni-stuttgart.de/forschung/forschungsprojekte/abgeschlossen/MoKli/"
        >
          {" "}
          Module Development: Climate change adaptation in outside and interior
          spaces{" "}
        </Link>{" "}
        (2019 to 2021)
      </Typography>

      <br />

      <Typography>
        •{" "}
        <Link
          underline="hover"
          target="_blank"
          href="https://www.ireus.uni-stuttgart.de/forschung/forschungsprojekte/abgeschlossen/RESI-extrem/"
        >
          {" "}
          Building resilience after extreme even1ts: Lessons Learned and New
          Strategies for Cities in Dealing ith Spatially Ubiquitous Extreme
          Events (RESI Extreme){" "}
        </Link>{" "}
        (2018 to 2021)
      </Typography>
    </>
  );
};

export default References;
