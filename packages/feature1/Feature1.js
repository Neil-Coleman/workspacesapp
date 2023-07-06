import { Image } from 'expo-image';
import { View, Text } from 'react-native';

export default Feature1 = () => (
<View>
  <Text style={{ marginVertical: 20, fontSize: 18, textAlign: 'center'}}>Use Image from Expo-image library, shows a 'feature' module with an external dependency</Text>

    <Image
    style={{height: 500, marginTop: 50}}
    source="https://picsum.photos/seed/696/3000/2000"
    contentFit="cover"
    transition={2000}
    />
</View>
);

