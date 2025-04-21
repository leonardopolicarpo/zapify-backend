import { eq, inArray } from 'drizzle-orm';
import { db } from '../../database/client';
import { chatUsers, chats, users } from '../../database/schemas';

interface getChatsByUserIdProps {
  userId: string;
}

interface ChatParticipants {
  id: string;
  name: string;
  role: string;
}

interface ChatListItem {
  id: string;
  name: string;
  created_at: Date;
  created_by: string | null;
  participants: ChatParticipants[];
}

export async function getChatsByUserId({
  userId,
}: getChatsByUserIdProps): Promise<ChatListItem[]> {
  const chatMemberships = await db
    .select({
      chatId: chatUsers.chat_id,
    })
    .from(chatUsers)
    .where(eq(chatUsers.user_id, userId));

  const chatIds = chatMemberships.map(chat => chat.chatId);
  if (!chatIds.length) return [];

  const [chatsData, participantsData] = await Promise.all([
    db.select().from(chats).where(inArray(chats.id, chatIds)),

    db
      .select({
        chatId: chatUsers.chat_id,
        userId: users.id,
        name: users.name,
        role: chatUsers.role,
      })
      .from(chatUsers)
      .innerJoin(users, eq(chatUsers.user_id, users.id))
      .where(inArray(chatUsers.chat_id, chatIds)),
  ]);

  const participantsByChat: Record<string, ChatParticipants[]> = {};

  for (const participant of participantsData) {
    if (!participantsByChat[participant.chatId]) {
      participantsByChat[participant.chatId] = [];
    }
    participantsByChat[participant.chatId].push({
      id: participant.userId,
      name: participant.name,
      role: participant.role,
    });
  }

  const chatList: ChatListItem[] = chatsData.map(chat => ({
    id: chat.id,
    name: chat.name,
    created_at: chat.created_at,
    created_by: chat.created_by,
    participants: participantsByChat[chat.id] ?? [],
  }));

  return chatList;
}
