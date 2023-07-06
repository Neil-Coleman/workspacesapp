import { View, Text, Button, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const screen3Enabled = true;

const Stack = createNativeStackNavigator();

 const Screen1 = ({ navigation }) => (
    <View>
      <Text style={{ marginVertical: 20, fontSize: 18, textAlign: 'center'}}>Navigate between modules in this project</Text>
      <Button title="Feature 1" onPress={() => navigation.navigate("Feature 1")} />
      <Button title="Feature 2" onPress={() => navigation.navigate("Feature 2")} />
      <Image style={{ height: 300, marginTop: 50 }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3SF_XQkdE2hh0XiTFXW3us3DH-j0JsErWHA&usqp=CAU'}} />
      <Text style={{ marginVertical: 20, fontSize: 18, textAlign: 'center'}}>Navigate between screens in this module using nested navigator</Text>
      <Button title="Next" onPress={() => navigation.navigate("Screen2")} />
    </View>
  );

 const Screen2 = ({ navigation }) => (
    <View style={{backgroundColor: '#7CFC00' }}>
         <Text style={{textAlign: 'center', marginVertical: 20, fontSize: 18}}>Screen 2</Text>
         <Image style={{ height: 200 }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAZGqMOZgtH_BXKZfsJ9Yr7lUQKtUqgRtlQ&usqp=CAU'}} />
        <View style={{ flexDirection: 'row', marginVertical: 20, alignSelf: 'center'}}>
            <Button title="Back" onPress={() => navigation.navigate("Screen1")} />
            {screen3Enabled ? <Button title="Next" onPress={() => navigation.navigate("Screen3")} /> : null }
            
        </View>
    </View>
    );
  const Screen3 = ({ navigation }) => (
    <View style={{backgroundColor: '#7CFC00' }}>
         <Text style={{textAlign: 'center', marginVertical: 20, fontSize: 18}}>Screen 3</Text>
         <Image style={{ height: 200 }} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAz7chcM6jAPT150jzRJNSssEgMl2ePUp6lQ&usqp=CAU'}} />
        <View style={{ flexDirection: 'row', marginVertical: 20, alignSelf: 'center'}}>
            <Button title="Back" onPress={() => navigation.navigate("Screen2")} />
        </View>
    </View>
    );

export default Feature3 = () => (
<Stack.Navigator>
    <Stack.Screen
     name="Screen1"
     component={Screen1}
     options={{ headerShown: false }}
    />
    <Stack.Screen
     name="Screen2"
     component={Screen2}
     options={{ headerShown: false }}
    />
    {screen3Enabled ?
    <Stack.Screen
     name="Screen3"
     component={Screen3}
     options={{ headerShown: false }}
    /> : null}
    
</Stack.Navigator>
);
