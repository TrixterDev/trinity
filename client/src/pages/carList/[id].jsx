import { fetchCarById } from "@/api/request";
import MoreInfo from "@/components/CarList/moreInfo";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const infoCar = () => {
  return <MoreInfo />;
};

export default infoCar;
