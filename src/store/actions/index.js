import * as profileAction from "./profileAction";
import * as authAction from "./authAction";
import * as examsAction from "./examsAction";
import * as directoryAction from "./directoryAction";

const actions = {
  ...profileAction,
  ...authAction,
  ...examsAction,
  ...directoryAction,
};

export default actions;
