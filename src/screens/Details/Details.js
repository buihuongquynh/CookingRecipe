import React, {useEffect} from 'react';
import styles from './Details.style';
import {View, Text, ScrollView, Image} from 'react-native';
import ReadMore from 'react-native-read-more-text';
const Details = ({navigation, route}) => {
  const {data} = route.params;
  var ingredient = [];
  var measure = [];
  const setIngredeients = () => {
    for (var item in data) {
      if (item.includes('strIngredient')) {
        if (data[item]) {
          ingredient.push(data[item]);
        }
      }
      if (item.includes('strMeasure')) {
        if (data[item]) {
          measure.push(data[item]);
        }
      }
    }
  };

  useEffect(() => {
    setIngredeients();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: data.strMealThumb}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.nameText}>
          {data.strMeal ? data.strMeal : null}
        </Text>
        <Text style={styles.tagText}>
          {data.strCategory ? data.strCategory : null}
        </Text>
        <Text style={styles.title}>Instructions:</Text>
        {data.strInstructions.length > 200 ? (
          <ReadMore
            numberOfLines={10}
            renderTruncatedFooter={handlePress => {
              return (
                <Text
                  onPress={handlePress}
                  style={{color: '#EA1E63', fontSize: 16, marginTop: 5}}>
                  Show More
                </Text>
              );
            }}
            renderRevealedFooter={handlePress => {
              return (
                <Text
                  onPress={handlePress}
                  style={{color: '#EA1E63', fontSize: 16, marginTop: 5}}>
                  Show Less
                </Text>
              );
            }}>
            <Text style={styles.textInstruc}>{data.strInstructions}</Text>
          </ReadMore>
        ) : (
          <Text style={styles.textInstruc}>{data.strInstructions}</Text>
        )}
        <View style={styles.line}></View>
        <Text style={styles.title}>ingredeients:</Text>
        {ingredient.map((ele, idx) => (
          <Text key={idx} style={styles.textIngredient}>
            {' '}
            • {ele} : {measure[idx]}
          </Text>
        ))}
        <View style={styles.line}></View>
        <Text style={styles.title}>tags:</Text>
        <Text style={{fontSize: 16, color: 'black', marginLeft: 15}}>
          • {data.strTags ? data.strTags : 'None'}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Details;