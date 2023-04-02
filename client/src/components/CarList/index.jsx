import { fetchCarList } from "@/api/request";
import { useParamContext } from "@/context";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BreadCrumps from "../ui/BreadCrumps";
import { ButtonPrimary, ButtonSecondary } from "../ui/Button";
import styles from "./style.module.scss";
import Loading from "../ui/Loading";

const CarList = () => {
  const [response, setResponse] = useState();
  const { country } = useParamContext();

  useEffect(() => {
    fetchCarList().then((res) => setResponse(res.data));
  }, []);

  const router = useRouter();

  return (
    <div>
      <BreadCrumps />
      <h1 className={styles.list__title}>Car list in {country}</h1>
      <div className={styles.list__cards}>
        {!response ? (
          <Loading />
        ) : (
          response.map((xz) => {
            console.log(xz);
            return (
              <div key={xz.id} className={styles.list__card}>
                <img src={xz.attributes.img.data.attributes.url} />
                <h3>{xz.attributes.title}</h3>
                <ButtonSecondary
                  cs={styles.list__btn}
                  click={() => router.push(`/carList/${xz.id}`)}
                >
                  rent
                </ButtonSecondary>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CarList;
