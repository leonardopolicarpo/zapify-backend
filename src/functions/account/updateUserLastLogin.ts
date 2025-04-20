import { eq } from 'drizzle-orm';
import { db } from '../../database/client';
import { users } from '../../database/schemas';

interface updateUserLastLoginProps {
  id: string;
}

export async function updateUserLastLogin({
  id,
}: updateUserLastLoginProps): Promise<void> {
  await db
    .update(users)
    .set({ last_login: new Date() })
    .where(eq(users.id, id));
}
