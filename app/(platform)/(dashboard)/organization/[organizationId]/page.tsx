import { create } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div>
      <form action={create}>
        <input id="title" name="title" className="border-black border" />
        <Button type="submit">Submit</Button>
      </form>
      {boards.map((board) => (
        <div key={board.id}>board Name: {board.title}</div>
      ))}
    </div>
  );
};

export default OrganizationIdPage;
