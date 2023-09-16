import { PageContent } from "@components";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useIntl } from "react-intl";

const CopyRight = () => {
  const intl = useIntl();
  const data: PageContent[] = [
    {
      isHeading: true,
      isSubHeading: false,
      text: intl.formatMessage({
        id: `$page.copyright.disclaimer`,
      }),
    },
    {
      isHeading: false,
      isSubHeading: false,
      text: intl.formatMessage(
        {
          id: `$page.copyright.disclaimer.section_1`,
        },
        {
          email: (
            <Link
              style={{ textDecoration: "none" }}
              href="mailto:info@tti-stuttgart.de"
            >
              info@tti-stuttgart.de
            </Link>
          ),
        },
      ),
    },
    {
      isHeading: false,
      isSubHeading: true,
      text: intl.formatMessage({
        id: `$page.copyright.disclaimer.link`,
      }),
    },
    {
      isHeading: false,
      isSubHeading: false,
      text: intl.formatMessage({
        id: `$page.copyright.disclaimer.section_2`,
      }),
    },
    {
      isHeading: false,
      isSubHeading: false,
      text: intl.formatMessage({
        id: `$page.copyright.disclaimer.section_3`,
      }),
    },
  ];

  return (
    <>
      {data.map((item, index) => {
        if (item.isHeading) {
          return (
            <div key={index} style={{ marginTop: 16 }}>
              <Typography
                component={"p"}
                textAlign={"justify"}
                color={"green"}
                fontSize={36}
              >
                {item.text}
              </Typography>
            </div>
          );
        } else if (item.isSubHeading) {
          return (
            <div key={index} style={{ marginTop: 16 }}>
              <Typography
                component={"p"}
                textAlign={"justify"}
                color={"gray"}
                fontSize={24}
              >
                {item.text}
              </Typography>
            </div>
          );
        } else {
          return (
            <Typography
              component={"p"}
              textAlign={"justify"}
              fontSize={16}
              key={index}
            >
              {item.text}
            </Typography>
          );
        }
      })}
    </>
  );
};

export default CopyRight;
