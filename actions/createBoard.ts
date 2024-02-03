"use server";
import { db } from "@/lib/db";
import { z } from "zod";

const CreateBoard = z.object({
  title: z.string(),
});

export async function create(formdata: FormData) {
  const { title } = CreateBoard.parse({
    title: formdata.get("title"),
  });

  await db.board.create({
    data: {
      title,
    },
  });
}
