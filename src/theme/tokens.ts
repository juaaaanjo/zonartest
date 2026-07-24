export const colors = {
  background: "#F3F4F6",
  surface: "#FFFFFF",
  border: "#D1D5DB",
  textPrimary: "#1F2937",
  textSecondary: "#6B7280",
} as const;

export const spacing = {
  screen: 16,
  cardPadding: 12,
  cardMarginBottom: 8,
  cardRadius: 12,
} as const;

export const dimensions = {
  avatar: 25,
  input: 8,
  card: 12,
} as const;

export const typography = {
  name: { fontSize: 16, fontWeight: "bold", color: colors.textPrimary },
  email: { fontSize: 14, fontWeight: "normal", color: colors.textSecondary },
};
