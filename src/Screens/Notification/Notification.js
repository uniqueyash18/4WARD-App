import { FlatList } from "react-native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import ImagePath from "../../Constants/ImagePath";
import { styles } from "./NotificationStyle";
export default Notification = ({ navigation }) => {
  const notifications = [
    {
      userimg: ImagePath.icUser,
      username: "Russell Gordon",
      textdata: " added a new post.",
      time: "20 min ago",
    },
    {
      userimg: ImagePath.googlelogo,
      username: "Sara",
      textdata: " added a new post.",
      time: "20 min ago",
    },
    {
      userimg: ImagePath.applelogo,
      username: "Russell Gordon",
      textdata: " added a new post.",
      time: "20 min ago",
    },
    {
      userimg: ImagePath.icUser1,
      username: "Syker John",
      textdata: " added a new post.",
      time: "20 min ago",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.notification}>Notification</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notifycontainer}>
            <Image style={styles.userimg} source={item.userimg} />
            <View style={styles.notifytext}>
              <Text style={styles.datatxt}>
                {item.username}
                <Text style={styles.datatxt2}>{item.textdata}</Text>
              </Text>
              <Text style={styles.timetxt}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
