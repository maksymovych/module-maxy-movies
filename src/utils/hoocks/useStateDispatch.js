import { useDispatch, useSelector } from "react-redux";

export const useStateDispatch = (part) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state[part]);
  return [state, dispatch];
};
