import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const ListItem = props => {
  return (
    <TouchableOpacity style={{flex: 1}}>
      <View style={myStyle.containerView}>
        <Text style={myStyle.textStyle}>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const myStyle = StyleSheet.create({
  containerView: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  textStyle: {
    fontSize: 30,
  },
});

export default ListItem;
