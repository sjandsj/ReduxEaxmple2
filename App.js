import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {addPlace} from './Root/Actions/place';
import ListItem from './Root/Components/ListItem';

class ReduxExample2 extends Component {

  constructor(props) {
    super(props);
    console.log("<><><><><><>");
  }
  state = {
    placeName: '',
    places: [],
  };

  placeOutput = () => {
    return (
      <FlatList
        style={myStyle.listContainer}
        data={this.props.places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => <ListItem placeName={info.item.value} />}
      />
    );
  };

  placeNameChangeHandler = value => {
    this.setState({
      placeName: value,
    });
  };

  button1Pressed = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
  };

  render() {
    console.log("<><><><><><")
    return (
      <View style={myStyle.mainContainer}>
        <View style={myStyle.innerContainer}>
          <TextInput
            placeholder="Find Places"
            style={myStyle.textInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <TouchableOpacity
            onPress={this.button1Pressed}
            style={myStyle.touchableOpacity}>
            <Text style={myStyle.button1}>Press Me</Text>
          </TouchableOpacity>
        </View>
        <View style={myStyle.listContainer}>{this.placeOutput()}</View>
      </View>
    );
  }
}

const myStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 20,
  },
  textInput: {
    width: '100%',
    height: 50,
    textAlign: 'center',
    backgroundColor: 'greenyellow',
    fontSize: 25,
    borderRadius: 35,
    fontWeight: '900',
  },
  touchableOpacity: {
    width: '100%',
    height: 50,
    backgroundColor: 'orangered',
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    //padding: 30
  },
  button1: {
    fontSize: 25,
    fontWeight: '900',
    color: 'yellow',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: name => {
      dispatch(addPlace(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxExample2);
