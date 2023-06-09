import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

interface ListItemProps {
  item: {
    id: string;
    text: string;
  };
  deleteItem: (id: string) => void;
}

const ListItem = ({item, deleteItem}: ListItemProps) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Text style={styles.deleteText} onPress={() => deleteItem(item.id)}>
          ❌
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  deleteText: {
    color: 'red',
  },
});

export default ListItem;
