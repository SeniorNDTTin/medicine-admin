import { IconType } from "react-icons";

import { AiOutlineDashboard } from "react-icons/ai";
import { CiMedicalCase } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";

export const menus: {
  path: string;
  title: string;
  icon: IconType;
}[] = [
    {
      path: "/",
      title: "Dashboard",
      icon: AiOutlineDashboard
    },
    {
      path: "/products",
      title: "Products",
      icon: CiMedicalCase
    },
    {
      path: "/products-category",
      title: "Products Category",
      icon: BiCategory
    },
    {
      path: "/payments",
      title: "Payments",
      icon: MdOutlinePayment
    }
  ];