import { InitialScreen } from "../Screens/InitialScreen/InitialScreen";
import { Login } from "../Screens/Login/Login";
import { Onboarding } from "../Screens/Onboarding/Onboarding";
import { OtpScreen } from "../Screens/OtpScreen/OtpScreen";
import { SetPassword } from "../Screens/SetPassword/SetPassword";
import { Signup } from "../Screens/Signup/Signup";
// import * as Screens from "../Screens";
export default function AuthStack(Stack) {
    return (
      <>
       <Stack.Screen
          name='Signup'
          component={Signup}
          options={{ headerShown: false }}
        />
     <Stack.Screen
          name='Onboarding'
          component={Onboarding}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name='InitialScreen'
          component={InitialScreen}
          options={{ headerShown: false}}
          
        />
        {/* <Stack.Screen
          name='Signup'
          component={Signup}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name='OtpScreen'
          component={OtpScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name='SetPassword'
          component={SetPassword}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
       
      </>
    );
  }