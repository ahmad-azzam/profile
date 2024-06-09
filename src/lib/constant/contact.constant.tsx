import { TContactItem } from "../types";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const CONTACT: TContactItem[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 812 3895 0193",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ahmadazzam123654@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description:
      "No. 31 B, South Petojo Street XII, RT.10/RW.4, Cideng, Gambir Subdistrict, Central Jakarta City, Indonesia",
  },
];

export default CONTACT;
