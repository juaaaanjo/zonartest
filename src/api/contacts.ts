import {
    RamdomUserApi,
    RamdomUserApiResponse,
    contact,
} from "@/types/contacts";

export const CONTACTS_ENDPOINT = "https://randomuser.me/api/?results=1000";

export function toContact(user: RamdomUserApi): contact {
  const firstName = user.name?.first;
  const lastName = user.name?.last;
  const email = user.email;
  const thumbnail = user?.avatar?.thumbnail;

  /* if (!firstName || !lastName || !email || !thumbnail) {
    return null;
  } */

  return {
    id: user.login?.uuid,
    firstName,
    lastName,
    email,
    thumbnail,
  };
}

export function mapContacts(payload: RamdomUserApiResponse): contact[] {
  const results = payload?.results;
  return results?.map(toContact) || [];
}

export async function fetchContacts(): Promise<contact[]> {
  const response = await fetch(CONTACTS_ENDPOINT);

  if (!response.ok) {
    console.error("error", !response.ok);
  }

  const payload = (await response.json()) as RamdomUserApiResponse;
  return mapContacts(payload);
}
