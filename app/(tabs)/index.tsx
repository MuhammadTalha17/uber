import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-800">
      <Text className="text-white">BISMILLAH!</Text>
    </SafeAreaView>
  );
}
