import Notification from "../Screens/Notification/Notification";
import { Search } from "../Screens/Search/Search";
import TabRoutes from "./TabRoutes";
export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen
        name='TabRoutes'
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </>
  );
}