import { useSelector } from "react-redux";

export const useDisplay = () => useSelector(state => state.display)