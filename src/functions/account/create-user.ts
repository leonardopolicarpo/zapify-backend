import { eq } from 'drizzle-orm';
import { db } from '../../database/client';
import { users } from '../../database/schemas/';

interface createUserProps {
  name: string;
  email: string;
  password: string;
}

export async function createUser({
  name,
  email,
  password,
}: createUserProps): Promise<void> {
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  if (existingUser.length > 0) {
    throw new Error('Email already exits');
  }

  await db.insert(users).values({
    name,
    email,
    password,
  });
}
