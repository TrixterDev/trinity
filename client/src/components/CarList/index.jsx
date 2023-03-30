import { fetchCarList } from "@/api/request";
import { useParamContext } from "@/context";
import { useEffect, useState } from "react";
import BreadCrumps from "../ui/BreadCrumps";

const CarList = () => {
  const [response, setResponse] = useState();
  const { country } = useParamContext();

  useEffect(() => {
    fetchCarList().then((res) => setResponse(res.data));
  }, []);

  console.log(response);
  return (
    <div>
      <BreadCrumps />
      <h1>Car list in {country}</h1>
      {response &&
        response.map((xz) => {
          return <h1 key={xz.id}>{xz.title}</h1>;
        })}
    </div>
  );
};

export default CarList;
