import { useContacts } from "@/hooks/useContacts";
import { contact } from "@/types/contacts";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// components, hooks, type

export default function ContactScreen() {
  const { contacts } = useContacts();

  function filterContacts(contacts: contact[]){

    const contacts.filter()
  }

  return (
    <SafeAreaView>
      <View> {contacts.status === "success"}</View>

      {contacts.status === "success" && 
      <FlatList
      data={}
      renderItem={({item}) => 
      <Text title={item.title} />
    }
      keyExtractor={}
      removeClippedSubviews
      
      />}
    </SafeAreaView>
  );
}
