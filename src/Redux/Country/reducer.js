import { COUNTRY_ERR , COUNTRY_GET , COUNTRY_LOADING } from "./action";

const initstate = {
  loading: false,
  err: false,
  country: [],
};

export const Country_Reducer = (store = initstate, { type, payload }) => {
  switch (type) {
    case COUNTRY_LOADING:
      return { ...store, loading: true };
    case COUNTRY_GET:
      return { ...store, country:[...payload], err: false };
    case COUNTRY_ERR:
      return { ...store, err: true, loading: false };
    default:
      return { ...store };
  }
};
