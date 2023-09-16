import { Card, CardCover } from "@mui/joy";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const CarouselItem = (props: any) => {
  return (
    <Card sx={{ minHeight: "280px" }}>
      <CardCover>
        <Image
          src={props.item.image}
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </CardCover>
      {/* <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="h2" fontSize="lg" textColor="green" mb={1}>
          {props.item.name}
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {props.item.description}
        </Typography>
      </CardContent> */}
    </Card>
  );
};

export type CarouselProps = {
  items: any;
};

const CarouselSlider = (props: CarouselProps) => {
  const { items } = props;
  return (
    <Carousel
      animation="fade"
      autoPlay={true}
      swipe={true}
      indicatorContainerProps={{
        style: { marginTop: "16px", marginBottom: "16px" },
      }}
      next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      }
    >
      {items?.map((item: any, i: number) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
