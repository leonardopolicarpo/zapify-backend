import { db } from '../../database/client';
import { chats } from '../../database/schemas';

interface createChatProps {
  name: string;
  createdBy: string;
}

export async function createChat({
  name,
  createdBy,
}: createChatProps): Promise<{ id: string }> {
  const [chat] = await db
    .insert(chats)
    .values({
      name,
      created_by: createdBy,
      created_at: new Date(),
    })
    .returning({ id: chats.id });

  return chat;
}
