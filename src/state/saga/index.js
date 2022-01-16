import { all, fork } from "redux-saga/effects";
import { allItemDetails } from "./itemDetails";

export function* rootSaga() {
  yield all([
    fork(allItemDetails)
  ]);
}
