import { ReactNode } from "react";

export type ExperiencesObject = {
    rowType: string;
    roleName: string;
    company: string;
    st_date: Date;
    endDate: Date;
    startDate: Date;
    st_date_format: string;
    ed_date_format: string;
  };

export type ProjectCardsProps =  {
  imglink: string;
  prname: string;
  prlink: string;
}

export type TimelineCardProps = {
  title: string;
  st_date: string;
  ed_date: string;
  company: string;
  rowType: string;
  expIcon: ReactNode;
}

export type ProjectTypes = {
  imageLink: string;
  projectLink: string;
   projectName: string;
}

export type ButtonProps =  {
  button: string;
  behavior: () => void;
  buttonText: string;
}