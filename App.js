import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feature1 from 'feature1';
import Feature2 from 'feature2';
import  Feature3 from 'feature3';

const flags = {
  FEATURE_1 : 1,
  FEATURE_2 : 1,
  FEATURE_3 : 1,
}

const TabBar = createBottomTabNavigator();

const App = () => (
    <NavigationContainer>
      <TabBar.Navigator>
      { flags.FEATURE_1 ? <TabBar.Screen name="Feature 1" component={Feature1} /> : null}
      { flags.FEATURE_2 ? <TabBar.Screen name="Feature 2" component={Feature2} /> : null}
      { flags.FEATURE_3 ? <TabBar.Screen name="Feature 3" component={Feature3} /> : null}
      </TabBar.Navigator>
    </NavigationContainer>
);

export default App;
