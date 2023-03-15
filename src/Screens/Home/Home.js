import { TouchableOpacity } from "react-native"
import { FlatList } from "react-native"
import { Text, Image, View } from "react-native"
import open from "react-native-open-maps"
import ImagePath from "../../Constants/ImagePath"
import StringContants from "../../Constants/StringContants"
import { styles } from "./Homestyles"

export default Home = ({ navigation }) => {
    carddata = [
        {
            Id: '1',
            personimg: ImagePath.applelogo,
            personName: "Russell Gordon",
            personaddress: "Sector 28D, Chandigarh",
            bannerimg: ImagePath.banner,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
            time: '1hr ago',
            comment: '1224',
            like: '44678'
        },
        {
            Id: '2',
            personimg: ImagePath.googlelogo,
            personName: "Lelia Walker",
            personaddress: "Sector 28D, Chandigarh",
            bannerimg: ImagePath.banner,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
            time: '4hr ago',
            comment: '1224',
            like: '44678'
        },
        {
            Id: '3',
            personimg: ImagePath.googlelogo,
            personName: "Sheetal",
            personaddress: "Sector 28D, Chandigarh",
            bannerimg: ImagePath.banner,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in turpis luctus.",
            time: '2hr ago',
            comment: '1224',
            like: '44678'
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logoimg} source={ImagePath.homelogo} />
                <TouchableOpacity onPress={() => open({ latitude: 30.71923776993991, longitude: 76.81066575861746 })}>
                    <Image source={ImagePath.locationicon} />
                </TouchableOpacity>
            </View>
            <FlatList
                style={{ flex: 1,alignSelf:'center' }}
                showsVerticalScrollIndicator={false}
                data={carddata}
                renderItem={({ item, index }) =>
                    <View style={styles.card}>
                        <View style={styles.personheader}>
                            <Image style={styles.personimg} source={item.personimg} />
                            <View >
                                <Text style={styles.personname}>{item.personName}</Text>
                                <Text style={styles.personaddress}>{item.personaddress}</Text>
                            </View>
                            <TouchableOpacity style={styles.dots} >
                                <Image source={ImagePath.dots} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('PostDetails', { item })}>
                                <Image style={styles.personbanner} source={item.bannerimg} />
                            </TouchableOpacity>
                            <Text style={styles.persondescription}>{item.description}</Text>
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                        <View style={styles.bottomarea}>
                            <Text style={styles.comment}>{StringContants.Comment} {item.comment}</Text>
                            <Text style={styles.like}>{StringContants.Likes} {item.like}</Text>
                            <Image style={styles.share} source={ImagePath.sharearrow} />
                        </View>
                        
                    </View>
                    
                }
            />
            <View style={{height:80}}></View>
        </View>
    )
}