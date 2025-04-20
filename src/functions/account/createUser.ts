import { eq } from 'drizzle-orm';
import { db } from '../../database/client';
import { users } from '../../database/schemas';

interface findUserByEmailProps {
  email: string;
}

interface userInterface {
  id: string,
  name: string,
  email: string,
  password: string,
  created_at: Date,
  updated_at: Date,
  last_login: Date,
}

export async function findUserByEmail({
  email,
}: findUserByEmailProps): Promise<userInterface | undefined> {
  const user = await db.select().from(users).where(eq(users.email, email));

  return user[0];
}
