import { Image, StyleSheet, Text, View } from "react-native";

import { colors, dimensions, spacing, typography } from "@/theme/tokens";
import { contact } from "@/types/contacts";

type Props = {
  contact: contact;
};

export default function ContactDetail({ contact }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: contact.thumbnail }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>
          {contact.firstName} {contact.lastName}
        </Text>
        <Text style={styles.email}>{contact.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: spacing.cardRadius,
    padding: spacing.cardPadding,
    marginBottom: spacing.cardMarginBottom,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: dimensions.avatar,
  },
  info: {
    marginLeft: spacing.cardPadding,
    flexShrink: 1,
  },
  name: typography.name,
  email: typography.email,
});
