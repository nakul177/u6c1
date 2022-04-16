import { CITY_ERR, CITY_GET, CITY_LOADING } from "./action";

const initstate = {
  loading: false,
  err: false,
  city: [],
};

export const City_Reducer = (store = initstate, { type, payload }) => {
  switch (type) {
    case CITY_LOADING:
      return { ...store, loading: true };
    case CITY_GET:
      return { ...store, city:payload , err: false };
    case CITY_ERR:
      return { ...store, err: true, loading: false };
    default:
      return { ...store };
  }
};
