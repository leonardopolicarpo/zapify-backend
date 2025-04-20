import { db } from '../../database/client';
import { chatUsers } from '../../database/schemas';

interface addUsersToChatProps {
  chatId: string;
  userIds: string[];
  createdBy: string;
}

export async function addUsersToChat({
  chatId,
  userIds,
  createdBy,
}: addUsersToChatProps): Promise<void> {
  const participants = userIds.map(id => ({
    chat_id: chatId,
    user_id: id,
    role: id === createdBy ? 'admin' : 'user',
  }));

  await db.insert(chatUsers).values(participants);
}
