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
import {MdLibraryMusic, MdOutlinePeopleAlt, MdOutlineQueueMusic} from "react-icons/md";
import {FaHistory, FaUserCheck} from "react-icons/fa";

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
      icon: <MdOutlinePeopleAlt size={18}/>,
    },
  },

  {
    name: "songs",
    list: "/songs",
    meta: {
      label: "Songs",
      icon: <MdOutlineQueueMusic size={20}/>,
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
      icon: <FaUserCheck />,
    },
  },
  {
    name: "histories",
    list: "/histories",
    meta: {
      label: "Buy histories",
      icon: <FaHistory size={14}/>,
    },
  },
  {
    name: "songs",
    list: "/songs",
    meta: {
      label: "Songs",
      icon: <FaHistory />,
    },
  },
];
