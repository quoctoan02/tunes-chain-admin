import type { IResourceItem } from "@refinedev/core";

import {
  CalendarOutlined,
  ContainerOutlined,
  CrownOutlined,
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import {
  MdChecklistRtl,
  MdLibraryMusic,
  MdOutlinePeopleAlt,
  MdOutlineQueueMusic,
} from "react-icons/md";
import { FaFlag, FaHistory, FaRegFlag, FaUserCheck } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { LuListMusic } from "react-icons/lu";
export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "blog_posts",
    list: "/blog-posts",
    create: "/blog-posts/create",
    edit: "/blog-posts/edit/:id",
    show: "/blog-posts/show/:id",
    meta: {
      canDelete: true,
    },
  },
  {
    name: "categories",
    list: "/categories",
    create: "/categories/create",
    edit: "/categories/edit/:id",
    show: "/categories/show/:id",
    meta: {
      canDelete: true,
    },
  },

  {
    name: "artists",
    list: "/artists",
    create: "/categories/create",
    edit: "/categories/edit/:id",
    show: "/categories/show/:id",
    meta: {
      canDelete: true,
      icon: <FiUserCheck size={18} />,
    },
  },
  {
    name: "unverified-artists",
    list: "/unverified-artists",
    create: "/categories/create",
    edit: "/categories/edit/:id",
    show: "/categories/show/:id",
    meta: {
      label: "Unverified artists",
      icon: <MdChecklistRtl size={18} />,
    },
  },

  {
    name: "songs",
    list: "/songs",
    meta: {
      label: "Songs",
      icon: <LuListMusic size={18} />,
    },
  },
  {
    name: "report-songs",
    list: "/report-songs",
    meta: {
      label: "Report songs",
      icon: <FaRegFlag />,
    },
  },
  {
    name: "users",
    list: "/users",
    create: "/categories/create",
    edit: "/categories/edit/:id",
    show: "/categories/show/:id",
    meta: {
      canDelete: true,
      icon: <MdOutlinePeopleAlt size={18} />,
    },
  },
  {
    name: "transactions",
    list: "/transactions",
    meta: {
      icon: <FaHistory size={14} />,
    },
  },
];
