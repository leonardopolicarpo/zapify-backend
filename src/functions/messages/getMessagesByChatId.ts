import { eq } from 'drizzle-orm';
import { db } from '../../database/client';
import { messages } from '../../database/schemas';

interface GetMessagesByChatIdProps {
  chatId: string;
}

interface CreatedMessage {
  id: string;
  chat_id: string;
  user_id: string;
  message: string;
  created_at: Date;
}

export async function getMessagesByChatId({
  chatId,
}: GetMessagesByChatIdProps): Promise<CreatedMessage[]> {
  const chatMessages = await db
    .select()
    .from(messages)
    .where(eq(messages.chat_id, chatId))
    .orderBy(messages.created_at);

  return chatMessages;
}
