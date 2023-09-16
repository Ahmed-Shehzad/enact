import { StaticImageData } from "next/image";

export type MemberProps = {
  imageUrl: string | StaticImageData;
  name: string;
  description: string;
};
export type TeamMembers = [MemberProps, MemberProps, MemberProps];
