"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
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

  revalidatePath('organization/org_2bO2kFR0DSCNBcCQQzcPw0Xl3VF')
}
