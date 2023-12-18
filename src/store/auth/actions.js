import { _setCurrentAccount } from ".";
import store from "../../store/auth";

export const setCurrentAccount = data => store.dispatch (_setCurrentAccount(data))