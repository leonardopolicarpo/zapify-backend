import { ilike, or } from 'drizzle-orm';
import { db } from '../../database/client';
import { users } from '../../database/schemas';

interface getUserBySearchProps {
  searchTerm: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export async function getUserBySearch({
  searchTerm,
}: getUserBySearchProps): Promise<User[]> {
  const foundUsers = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
    })
    .from(users)
    .where(
      or(
        ilike(users.name, `%${searchTerm}%`),
        ilike(users.email, `%${searchTerm}%`)
      )
    );

  return foundUsers;
}
