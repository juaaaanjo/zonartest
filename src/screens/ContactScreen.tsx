import ContactDetail from "@/components/ContactDetail";
import SearchBar from "@/components/SearchBar";
import { useContacts } from "@/hooks/useContacts";
import { colors, spacing, typography } from "@/theme/tokens";
import { contact } from "@/types/contacts";
import { useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// components, hooks, type

export default function ContactScreen() {
  const { contacts } = useContacts();
  const [query, setQuery] = useState("");

  function filterContacts(list: contact[]) {
    const search = query.trim().toLowerCase();

    return list.filter(
      (c) =>
        c.firstName?.toLowerCase().includes(search) ||
        c.lastName?.toLowerCase().includes(search)
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Contact Directory</Text>
      <SearchBar value={query} onChangeText={setQuery} />

      {contacts.status === "loading" && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={colors.textPrimary} />
        </View>
      )}

      {contacts.status === "error" && (
        <View style={styles.center}>
          <Text style={styles.errorText}>No se pudieron cargar contactos</Text>
        </View>
      )}

      {contacts.status === "success" && (
        <FlatList
          data={filterContacts(contacts.contacts)}
          renderItem={({ item }) => <ContactDetail contact={item} />}
          keyExtractor={(item, index) => item.id ?? String(index)}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.screen,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: spacing.screen,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: typography.name,
});
