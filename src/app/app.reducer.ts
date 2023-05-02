import { createAction, on } from "@ngrx/store";
import { createLsRehydrateReducer } from "./rehydrate-util/localstorage";
import { initialState } from "./ngrx/state/product.state";



export const simpleAction = createAction("SimpleAction");

export const localStorageRehydrated = createLsRehydrateReducer(
    "bigState",
    initialState,
    on(simpleAction, (state: any) => {
      return {
        ...state,
        modifiableField: state.modifiableField + 1,
      };
    })
  );