import { EntriesState } from "./";
import { Entry } from "../../interfaces";

type EntriesActionType =
  | {
      type: "[Entry] Add-Entry";
      payload: Entry;
    }
  | {
      type: "[Entry] Entry-Updated";
      payload: Entry;
    }
  | { type: "INITIAL_LOAD"; payload: Entry[] };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "[Entry] Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case "[Entry] Entry-Updated":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };
    case "INITIAL_LOAD":
      return {
        ...state,
        entries: [...action.payload],
      };
    default:
      return state;
  }
};
