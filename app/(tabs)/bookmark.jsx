import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

const Bookmark = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary px-4">
      <Text className="text-2xl text-white font-psemibold mt-6">Bookmark</Text>

      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl text-white font-psemibold text-center">
          Keep Calm
        </Text>
        <Text className="text-xl text-gray-100 font-pregular text-center">
          Feature is yet to be developed. 🚧
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
