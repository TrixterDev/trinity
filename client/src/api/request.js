import ky from "ky";

const requestApi = ky.create({
  prefixUrl: "http://localhost:1337/api/",
});

export const fetchCarList = () => {
  return requestApi("car-lists?populate=*").json();
};

export const fetchCarById = (id) => {
  return requestApi(`car-lists/${id}?populate=*`).json();
};
