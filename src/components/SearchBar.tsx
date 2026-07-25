import { StyleSheet, TextInput, View } from "react-native";

import { colors, dimensions, spacing } from "@/theme/tokens";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchIcon}>
        <View style={styles.searchIconCircle} />
        <View style={styles.searchIconHandle} />
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search contacts..."
        placeholderTextColor={colors.textSecondary}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: dimensions.input,
    paddingHorizontal: spacing.cardPadding,
    marginBottom: spacing.screen,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  searchIconCircle: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
    borderWidth: 1.5,
    borderColor: colors.textSecondary,
  },
  searchIconHandle: {
    position: "absolute",
    bottom: 1,
    right: 2,
    width: 1.5,
    height: 6,
    backgroundColor: colors.textSecondary,
    transform: [{ rotate: "-45deg" }],
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.textPrimary,
  },
});
