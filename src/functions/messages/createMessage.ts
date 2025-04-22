import { db } from '../../database/client';
import { messages } from '../../database/schemas';

interface Message {
  chatId: string;
  senderId: string;
  content: string;
}

type CreateMessageProps = Message;


export async function createMessage({
  chatId,
  content,
  senderId
}: CreateMessageProps): Promise<CreateMessageProps> {
  const [newMessage] = await db
    .insert(messages)
    .values({
      chat_id: chatId,
      user_id: senderId,
      message: content,
    })
    .returning();

  const message = {
    chatId: newMessage.chat_id,
    content: newMessage.message,
    senderId: newMessage.user_id
  }

  return message;
}
