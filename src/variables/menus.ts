import { IconType } from "react-icons";

import { AiOutlineDashboard } from "react-icons/ai";
import { CiMedicalCase } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdSupervisorAccount } from "react-icons/md";

export const menus: {
  path: string;
  title: string;
  icon: IconType;
}[] = [
    {
      path: "/",
      title: "Tổng quan",
      icon: AiOutlineDashboard
    },
    {
      path: "/products",
      title: "Sản phẩm",
      icon: CiMedicalCase
    },
    {
      path: "/types",
      title: "Loại",
      icon: BiCategory
    },
    {
      path: "/orders",
      title: "Đơn hàng",
      icon: IoBagCheckOutline
    },
    {
      path: "/accounts",
      title: "Tài khoản",
      icon: MdSupervisorAccount
    }
  ];