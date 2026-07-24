export type ContactsState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "success"; contacts: contact[] };

import { fetchContacts } from "@/api/contacts";
import { contact } from "@/types/contacts";
import { useCallback, useEffect, useState } from "react";

/*
mapear estados de llamado hpttp

llamado a la api 

*/
export function useContacts() {
  const [contacts, setContacts] = useState<ContactsState>({
    status: "loading",
  });
  const load = useCallback(async () => {
    setContacts({ status: "loading" });
    try {
      const contacts = await fetchContacts();

      setContacts({ status: "success", contacts });
    } catch (error) {
      setContacts({ status: "error" });
    }
  }, []);

  useEffect(() => {
    load();
  }, []);

  return { contacts };
}
