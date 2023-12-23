import { _setCurrentAccount } from ".";
import store from "../../store/auth/index";

export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))