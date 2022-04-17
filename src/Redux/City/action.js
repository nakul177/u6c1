
export const CITY_LOADING = "CITY_LOADING"
export const CITY_ERR = "CITY_ERR"
export const CITY_GET = "CTIY_GET"


export const Ctiy_Loading = () =>(
    {type:CITY_LOADING}
)

export const Ctiy_Err = () =>(
    {type:CITY_ERR}
)

export const Ctiy_Get = (payload) =>(
    {type : CITY_GET , payload }
)


export  const get_city = (details) => (dispatch) => {
    dispatch(Ctiy_Loading());
    fetch(`http://localhost:3001/city`, {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => dispatch(Ctiy_Get(res)))
      .catch((err) => dispatch(Ctiy_Err()));
  };

  export  const get_city_data= (details) => (dispatch) => {
    dispatch(Ctiy_Loading());
    fetch(`http://localhost:3001/city`, {
      method: "GET",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => dispatch(Ctiy_Get(res)))
      .catch((err) => dispatch(Ctiy_Err()));
  };