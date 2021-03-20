import * as React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Table, Rows} from 'react-native-table-component';

export default class TreeInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tree_data: this.props.navigation.state.params.tree_data,
    };
  }

  render() {
    const tree = this.state.tree_data;
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const data = [
      ['Description', tree.description],
      ['Species', tree.species],
      ['Cultivar', tree.cultivar],
      ['Difficulty', tree.difficulty],
      ['Needs help?', tree.needs_help],
      ['Harvest now?', tree.can_harvest],
      ['Owner Contact', tree.user_contact_info],
      ['Average Yield (kg/year)', tree.average_yield],
      [
        'Harvest Window',
        months[tree.harvest_start - 1] + '-' + months[tree.harvest_end - 1],
      ],
      ['Time to Maturity (years)', tree.time_to_maturity],
      [
        'Propagation Window',
        months[tree.propagation_start - 1] + '-' + months[tree.propagation_end - 1],
      ],
    ];
    return (
      <ScrollView style={styles.bg}>
        <View style={styles.container}>
          <Text>{tree.common_name} Information</Text>
          <Image />
          <Table>
            <Rows data={data} />
          </Table>
        </View>
      </ScrollView>
    );
    {
      /*common_name: Sequelize.STRING,
        longitude: Sequelize.FLOAT,
        latitude: Sequelize.FLOAT,
        point: {
      type: Sequelize.GEOMETRY('POINT'),
    }
    //species: Sequelize.STRING,
    //cultivar: Sequelize.STRING,
    //time_to_maturity
    //primary_propagation_method
    //difficulty
    //hardness
    //perfered_soil_type
    //ideal_spacing
    //propagation_window_start
    //propagation_window_end
    //Average_yield
    //viability in storage**/
    }
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#43aa8b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemContainer: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainButton: {
    /* Share an orchard */

    position: 'relative',
    width: 315.77,
    height: 51.83,
    /*left: 32.62,
                            top: 630.17,*/
    backgroundColor: '#dd5252',
    borderRadius: 22,
    borderWidth: 3,
    borderColor: '#254441',

    /*filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));*/
  },
  mainButtonText: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 45,
    textAlign: 'center',
    color: '#254441',
  },
  secondaryButton: {
    /* Share an orchard */

    position: 'relative',
    width: 315.77,
    height: 51.83,
    /*left: 32.62,
                            top: 630.17,*/
    backgroundColor: '#43aa8b',
    borderRadius: 22,
    borderWidth: 3,
    borderColor: '#DD5252',

    /*filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));*/
  },
  secondaryButtonText: {
    fontFamily: 'Red Hat Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 34,
    lineHeight: 45,
    textAlign: 'center',
    color: '#254441',
  },

  logo: {
    height: 217,
    width: 217,
    margin: 12,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
