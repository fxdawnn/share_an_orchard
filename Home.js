import {Button, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Share an Orchard"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};
export default Home;
