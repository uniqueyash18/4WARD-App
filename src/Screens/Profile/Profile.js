import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";
import Profilecomp from "../../Components/Profilecomp";
import ImagePath from "../../Constants/ImagePath";
import { sendstatus } from "../../redux/actions/stackAction";
import { styles } from "./ProfileStyle";
export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.profilehead}>Profile</Text>
      <Profilecomp
        title="Edit Profile"
        img={ImagePath.icUser1}
        onPress={() => navigation.navigate("EditProfile")}
      />
      <Profilecomp
        title="Change Password"
        img={ImagePath.icChangepwd}
        onPress={() => navigation.navigate("ChangePwd")}
      />
      <Profilecomp
        title="Signout"
        img={ImagePath.icSignout}
        onPress={async () => {
          try {
            await AsyncStorage.removeItem('Details')
            sendstatus(false)
          } catch (e) {
            console.log('eroor occured in removing elements',e)
          }
        }
        }
      />
    </View>
  );
}
