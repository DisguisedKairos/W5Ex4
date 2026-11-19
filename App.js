import React, { useState } from 'react';
import { Image, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { datasource } from './Data';

const renderSectionHeader = ({ section }) => {
  return (
    <View style={[styles.sectionHeader, { backgroundColor: section.backgroundColor }]}>
      <MaterialCommunityIcons name={section.icon} size={23} color={section.color} />
      <Text style={[styles.sectionTitle, { color: section.color }]}>{section.title}</Text>
    </View>
  );
};

const App = () => {
  const [message, setMessage] = useState('');

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemRow} onPress={() => setMessage(item.description)}>
        <Image source={item.image} style={styles.picture} />
        <View style={styles.itemCopy}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCaption}>{item.caption}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="laptop" size={30} color="#D9F0DE" />
        <Text style={styles.title}>Desk Kit</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
      <SectionList
        sections={datasource}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 24,
    backgroundColor: '#183F35',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  title: {
    marginLeft: 12,
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
  },
  message: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingBottom: 16,
    color: '#D9F0DE',
    fontSize: 13,
  },
  list: {
    backgroundColor: '#F4F7F4',
  },
  listContent: {
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginTop: 18,
    marginBottom: 10,
    borderRadius: 12,
  },
  sectionTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DDE7DF',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  picture: {
    width: 94,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  itemCopy: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    marginBottom: 10,
    color: '#203D30',
    fontSize: 18,
    fontWeight: '700',
  },
  itemCaption: {
    color: '#6B8079',
    fontSize: 12,
  },
});

export default App;
