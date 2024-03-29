// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { db } from "../../../database";
import { Entry, IEntry } from "../../../models";

type Data = { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "El id no es valido " + id });
  }
  switch (req.method) {
    case "PUT":

      return updateEntry(req, res);
      break;

    default:
      return res.status(400).json({ message: "Metodo no existe" });
  }
}
const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  await db.connect();

  const entryToUpdate = await Entry.findById(id);
  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "No hay entrada con ese id" + id });
  }
  const {
    
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  const updatedEntry = await Entry.findByIdAndUpdate(
    id,
    {
      description,
      status,
    },
    { runValidators: true, new: true }
  );
  res.status(200).json(updatedEntry);
  await db.disconnect();
};
