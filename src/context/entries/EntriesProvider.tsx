import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";
import { Entry } from "../../../interfaces/entry";

export interface EntriesState {
  entries: Entry[];
}
interface Props {
  children: React.ReactNode;
}
const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
      
        "En progreso: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolores iusto dolorum, nemo necessitatibus totam natus quaerat temporibus enim perspiciatis excepturi exercitationem ullam ducimus sint tempore consequuntur amet asperiores ea.",
      createAt: new Date().getTime(),
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      description:
        "Terminado: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolores iusto dolorum, nemo .",
      createAt: new Date().getTime(),
      status: "finished",
    },
    {
      _id: uuidv4(),
      description:
        "Pendiente:enim perspiciatis excepturi exercitationem ullam ducimus sint tempore consequuntur amet asperiores ea.",
      createAt: new Date().getTime(),
      status: "pending",
    },
  ],
};
export const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
