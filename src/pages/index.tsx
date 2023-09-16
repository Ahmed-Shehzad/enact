import CarouselSlider, { CarouselProps } from "@components/carousel";
import { images } from "@images";
import { Card, CardContent, Typography } from "@mui/material";
import type { GetServerSideProps } from "next";
import { useIntl } from "react-intl";
import { v4 } from "uuid";

const generateItems = () => {
  return Array.from(Array(4).keys()).map((i) => ({
    name: `Item #${i}`,
    image: images.carousel[i],
    description: `Item ${v4().toString()} description`,
  }));
};

interface HomePageProps {
  carouselProps: CarouselProps;
}

const Home = (props: HomePageProps) => {
  const { carouselProps } = props;
  const { items } = carouselProps;

  const intl = useIntl();
  const main = intl.formatMessage({
    id: `$page.main`,
  });

  return (
    <>
      <CarouselSlider items={items} />
      <Card elevation={4}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
            marginY={"16px"}
          >
            EnACT - Environment And Climate Consultants
          </Typography>

          <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            component="p"
            fontSize={"16px"}
            textAlign={"justify"}
            marginY={"16px"}
          >
            {main}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const items = generateItems();
  const carouselProps: CarouselProps = {
    items: items,
  };
  return { props: { carouselProps } };
};

export default Home;
