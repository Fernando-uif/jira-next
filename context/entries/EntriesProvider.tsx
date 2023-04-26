import { FC, useReducer, useEffect } from "react";

import { Entry } from "../../interfaces";

import { EntriesContext, entriesReducer } from "./";
import { entriesApi } from "../../apis";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "INITIAL_LOAD", payload: data });
  };
  useEffect(() => {
    refreshEntries();
    return () => {};
  }, []);

  const addNewEntry = async (description: string) => {
    // const newEntry: Entry = {
    //   _id: uuidv4(),
    //   description,
    //   createdAt: Date.now(),
    //   status: "pending",
    // };
    // try {

    // } catch (error) {

    // }

    const { data } = await entriesApi.post<Entry>("/entries", { description });
    dispatch({ type: "[Entry] Add-Entry", payload: data });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] Entry-Updated", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
