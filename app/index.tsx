import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import "react-native-get-random-values";

const Page = () => {
  const { isSignedIn } = useAuth();

  // if (isSignedIn) return <Redirect href={"/(root)/(tabs)/home"} />;
  if (isSignedIn) return <Redirect href={"/(root)/find-ride"} />;
  return <Redirect href="/(auth)/welcome" />;
};

export default Page;
