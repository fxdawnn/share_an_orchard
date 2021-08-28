import {Image, TouchableOpacity} from 'react-native';
import banana from '../img/banana.png';
import HomeScreen from '../screens/homeScreen';
import CropAreaScreen from '../screens/CropAreaScreen';
import CropYieldScreen from '../screens/CropYieldScreen';
import MapScreen from '../screens/mapScreen';
import AddTreeScreen from '../screens/AddTreeScreen';
import TreeInfoScreen from '../TreeInfoScreen';
import TreeListScreen from '../TreeListScreen';
import GrowerListScreen from '../GrowerListScreen';
import AddTreeMapScreen from '../screens/mapScreen';
import LoginScreen from '../screens/LoginScreen';
import AccountSetupScreen from '../screens/AccountSetUpScreens/AccountSetupScreen';
import AddCropPhotoScreen from '../screens/AddCropPhotoScreen';
import CommentsScreen from '../CommentsScreen';
import NewCropPrivacy from '../screens/NewCropScreens/NewCropPrivacy';
import NewCropSharing from '../screens/NewCropScreens/NewCropSharing';
import AddCropNameScreen from '../screens/NewCropScreens/AddCropNameScreen';
import NewCropLocationScreen from '../screens/NewCropScreens/NewCropLocationScreen';
import AddCropAvailabilityScreen from '../screens/NewCropScreens/AddCropAvailabilityScreen';
import CropCommentScreen from '../CropCommentScreen';
import Chat from '../screens/UsersFunctions/NewChat';
import AddCropBioScreen from '../screens/NewCropScreens/AddCropBioScreen';
import AddCropInfoScreen from '../screens/NewCropScreens/AddCropInfoScreen';
import AddCommentScreen from '../screens/AddCommentScreen';
import FriendListScreen from '../screens/UsersFunctions/FriendListScreen';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#254441',
        },
        headerTintColor: '#43AA8B',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={{width: 28, height: 28, margin: 12}}
              source={banana}
            />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CropArea" component={CropAreaScreen} />
      <Stack.Screen name="CropYield" component={CropYieldScreen} />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{title: 'Tree Map'}}
      />
      <Stack.Screen
        name="AddTree"
        component={AddTreeScreen}
        options={{title: 'Add Food'}}
      />
      <Stack.Screen
        name="TreeInfo"
        options={{title: 'Details'}}
        component={TreeInfoScreen}
      />
      <Stack.Screen
        name="CropPrivacy"
        component={NewCropPrivacy}
        options={{title: 'Add Food'}}
      />
      <Stack.Screen
        name="CropSharing"
        component={NewCropSharing}
        options={{title: 'Add Food'}}
      />
      <Stack.Screen
        name="ChatFood"
        component={Chat}
        options={{title: 'Chat'}}
      />
      <Stack.Screen
        name="CropAvailability"
        component={AddCropAvailabilityScreen}
        options={{title: 'Add Food'}}
      />
      <Stack.Screen
        name="CropName"
        component={AddCropNameScreen}
        options={{title: 'Add Food'}}
      />
      <Stack.Screen
        name="CropLocation"
        component={NewCropLocationScreen}
        options={{title: 'Add Food'}}
      />
      <Stack.Screen
        name="CropLocationTest"
        component={NewCropLocationScreen}
        options={{title: 'Add Food'}}
      />
      <Stack.Screen
        name="CropBio"
        component={AddCropBioScreen}
        options={{title: 'Add Food'}}
      />
      <Stack.Screen
        name="AddComment"
        component={AddCommentScreen}
        options={{title: 'Add Comment'}}
      />
      <Stack.Screen
        name="TreeList"
        component={TreeListScreen}
        options={{title: 'Available Food'}}
      />
      <Stack.Screen
        name="FriendsList"
        component={FriendListScreen}
        options={{title: 'Nearby Growers'}}
      />
      <Stack.Screen
        name="AddCropInfo"
        component={AddCropInfoScreen}
        options={{title: 'Add Crop Completed'}}
      />
      <Stack.Screen
        name="AddCropMap"
        component={AddTreeMapScreen}
        options={{title: 'New Tree Location'}}
      />
      <Stack.Screen
        name="GrowerList"
        component={GrowerListScreen}
        options={{title: 'Growers List'}}
      />
      <Stack.Screen
        name="CropComments"
        component={CropCommentScreen}
        options={{title: 'Crop Comments'}}
      />
      <Stack.Screen name="Friends" component={GrowerListScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AccountSetup" component={AccountSetupScreen} />
      <Stack.Screen name="AddCropPhoto" component={AddCropPhotoScreen} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
    </Stack.Navigator>
  );
}
