import {
  CircleGauge,
  FilePen,
  Compass,
  Users,
  User,
  Settings,
  Building2,
} from "lucide-react";

export const navItems = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: CircleGauge,
  },
  {
    id: 2,
    name: "Travel Request",
    link: "/travel-request",
    icon: FilePen,
  },
  {
    id: 3,
    name: "Travel Orders",
    link: "/travel-orders",
    icon: Compass,
  },
  {
    id: 4,
    name: "Employees",
    link: "/employees",
    icon: Users,
  },
  {
    id: 5,
    name: "Divisions",
    link: "/divisions",
    icon: Building2,
  },
  {
    id: 6,
    name: "Users",
    link: "/users",
    icon: User,
  },
  {
    id: 7,
    name: "Settings",
    link: "/settings",
    icon: Settings,
  },
];
