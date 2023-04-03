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

export const fetchReviews = () => {
  return requestApi(`videos?populate=*`).json();
};

export const fetchLimitCarList = () => {
  return requestApi(
    "car-lists?pagination[start]=0&pagination[limit]=4&populate=*"
  ).json();
};
