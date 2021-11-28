import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import styles from './Header.style';
import Feather from 'react-native-vector-icons/Feather';
import {BottomSheet} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {Auth} from '../../services';

const Header = ({title}) => {
  const [visible, setVisible] = React.useState(false);
  const list = [
    {
      title: 'Display Recipes',
      desc: 'Grid (2 column)',
      onPress: () => {
        setVisible(!visible);
        navigation.navigate('Explore');
      },
      nameIcon: 'scissors',
    },
    {
      title: 'Display List Category',
      desc: 'Grid (1 column)',
      onPress: () => {
        setVisible(!visible);
        navigation.navigate('Category');
      },
      nameIcon: 'list',
    },
    {
      title: 'More Apps',
      desc: 'More apps from developer',
      onPress: () => {
        setVisible(!visible);
      },
      nameIcon: 'more-horizontal',
    },
    {
      title: 'About',
      desc: 'App Info Build Version, Copy Right',
      onPress: () => {
        setVisible(!visible);
      },
      nameIcon: 'alert-circle',
    },
    {
      title: 'Sign out',
      desc: 'Sign out application',
      onPress: () => {
        setVisible(!visible);
        Auth.SignOut();
      },
      nameIcon: 'log-out',
    },
    {
      title: 'Cancel',
      desc: 'Back to screens',
      onPress: () => {
        setVisible(!visible);
      },
      nameIcon: 'x',
    },
  ];
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.option}>
        <TouchableOpacity
          style={styles.btnSearch}
          onPress={() => navigation.navigate('Search')}>
          <Feather name="search" color="#fff" size={22} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSetting}
          onPress={() => setVisible(!visible)}>
          <Feather name="more-vertical" color="#fff" size={22} />
        </TouchableOpacity>
        <BottomSheet isVisible={visible} containerStyle={styles.backdrop}>
          <View style={styles.listItem}>
            {list.map((l, idx) => (
              <TouchableOpacity
                style={styles.btnItem}
                onPress={l.onPress}
                key={idx}
                activeOpacity={0.8}>
                <Feather
                  name={l.nameIcon}
                  color="#000"
                  size={22}
                  style={styles.iconItem}
                />
                <View>
                  <Text style={styles.textItem}>{l.title}</Text>
                  <Text style={styles.descItem}>{l.desc}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

export default Header;
