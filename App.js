import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking } from 'react-native';
import {FontAwesome6} from "@expo/vector-icons"

export default function App() {

  const onContactMe = () => {
    Linking.openURL('mailto:maestrooctavian@gmail.com')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Image source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg"}} 
      style={{width: "100%", aspectRatio: 16/9}}/>
      <Image source={require('./assets/vadim.png')} 
      style={{width: 150, height: 150, borderRadius: 150, borderColor: "white", borderWidth: 5, marginTop: -75}}/>
      <Text style={{fontSize: 30, fontWeight: "bold"}}>Vadim Savin</Text>
      <Text>Founder of notJust.dev</Text>
      
      <View style={{flexDirection: 'row', marginVertical: 10, gap: 10}}>
      <FontAwesome6 name="github" size={24} color="black" />
      <FontAwesome6 name="x-twitter" size={24} color="black" />
      <FontAwesome6 name="at" size={24} color="black" />
      </View>

      <Button title='Contact me' onPress={onContactMe}/>

      <Text style={{padding: 10, fontSize: 16, lineHeight: 20}}>
        Quis nisi nisi velit Lorem. Ipsum consequat Lorem labore esse ea est nostrud qui. Voluptate qui voluptate sunt est. Duis est nulla ea amet deserunt. Sit fugiat cupidatat eiusmod ea consectetur pariatur eiusmod irure enim veniam consequat.

Ad anim dolor cillum occaecat Lorem et laboris amet enim. Veniam esse dolore cupidatat ut incididunt est sint. Esse nisi proident eu minim Lorem. Consequat magna sit excepteur minim dolor in deserunt adipisicing qui sunt excepteur minim. Nostrud mollit laborum cillum nulla irure cupidatat consequat ea.

Cupidatat ea commodo fugiat aliqua duis consequat velit culpa ullamco voluptate ullamco ex excepteur occaecat. Lorem ea culpa laboris exercitation voluptate ipsum pariatur. Laborum tempor commodo in culpa nostrud exercitation fugiat tempor aute sunt. Proident sunt ut sint in sint in ex minim ex occaecat do consectetur est. Duis magna voluptate do et. Cillum non tempor anim commodo aliqua sunt amet deserunt.

Cillum deserunt pariatur incididunt aute mollit excepteur nostrud laborum aliquip sunt. Est qui non sit aliqua velit sint ea ipsum consectetur id non sit mollit. Sunt minim nulla quis reprehenderit.

Ea eiusmod reprehenderit nostrud occaecat ipsum elit mollit aute elit esse eiusmod. Cupidatat officia cupidatat laborum eiusmod Lorem do sunt commodo ullamco incididunt. Lorem eu esse sunt nulla labore proident culpa quis reprehenderit proident. Nulla enim cupidatat adipisicing non laboris aliquip. Est est amet sint laborum excepteur consectetur laboris irure enim aliquip laborum velit occaecat.
      </Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
