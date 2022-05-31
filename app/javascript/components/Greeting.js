import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGreetingApi } from "../store/greetings"

const Greeting = () => {
  const message = useSelector(({ msgReducer }) => msgReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGreetingApi())
  }, [])

  return (
    <React.Fragment>
      Greeting: {message}
    </React.Fragment>
  );
}

export default Greeting
