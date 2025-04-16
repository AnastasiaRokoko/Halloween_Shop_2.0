import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './commonStyles';

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: '1',
    title: 'Добро\nпожаловать',
    image: require('./assets/картинка паучок.png'),
    decorations: [
      { source: require('./assets/украшение1.png'), style: styles.design1 },
      { source: require('./assets/украшение2.png'), style: styles.design2 },
      { source: require('./assets/тень.png'), style: styles.shadow1 },
      { source: require('./assets/украшение4.png'), style: styles.design4 },
      { source: require('./assets/украшение3.png'), style: styles.design3 },
      { source: require('./assets/слайдер.png'), style: styles.slider },
    ],
    buttonText: 'Начать',
    layout: 'text-first',
  },
  {
    id: '2',
    
    title: 'Начнем\nПутешествие',
    subtitle: 'Умная, великолепная и стильная\nколлекция Изучите сейчас',
    image: require('./assets/другой паучок_2 1.png'),
    decorations: [
      { source: require('./assets/украшение 1.png'), style: styles.design5 },
      { source: require('./assets/тень.png'), style: styles.shadow2 },
      { source: require('./assets/украшение 2.png'), style: styles.design6 },
      { source: require('./assets/слайдер2.png'), style: styles.slider },
    ],
    buttonText: 'Далее',
    layout: 'image-first',
  },
  {
    id: '3',
    
    title: 'У Вас Есть Сила,\nЧтобы',
    subtitle: 'Быть незабываемым, как редкий яркий\nцветок',
    image: require('./assets/другой паучок_3 1.png'),
    decorations: [
      { source: require('./assets/тень.png'), style: styles.shadow2 },
      { source: require('./assets/украшение3.png'), style: styles.design7 },
      { source: require('./assets/слайдер3.png'), style: styles.slider },
    ],
    buttonText: 'Готово',
    layout: 'image-first',
  }
];

const OnBoarding = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    const index = viewableItems[0]?.index || 0;
    setCurrentIndex(index);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  }).current;

  const renderItem = ({ item }) => {
    const isTextFirst = item.layout === 'text-first';
  
    const TextBlock = (
      <View style={styles.header}>
        {item.title && (
          <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>
            {item.title}
          </Animated.Text>
        )}
        {item.subtitle && (
          <Animated.Text style={[styles.welcomeText3, { opacity: fadeAnim, marginTop: 20 }]}>
            {item.subtitle}
          </Animated.Text>
        )}
      </View>
    );
  
    const ImageBlock = (
      
          <Animated.Image source={item.image} style={[styles.image_spider1, { opacity: fadeAnim }]} />

    );
  
    return (
      <LinearGradient colors={['#CC2828', '#150404']} style={{ width, height }}>
        <View style={styles.container}>
  
          
        {isTextFirst ? (
    <>
      <View style={styles.blockSpacing1}>{TextBlock}</View>
      <View style={styles.blockSpacing1}>{ImageBlock}</View>
    </>
  ) : (
    <>
      <View style={styles.blockSpacing2}>{ImageBlock}</View>
      <View style={styles.blockSpacing2}>{TextBlock}</View>
    </>
  )}
  
          {item.decorations.map((decor, index) => (
            <Image key={index} source={decor.source} style={decor.style} />
          ))}
  
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (currentIndex === slides.length - 1) {
                  navigation.navigate('Apps');
                } else {
                  flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
                }
              }}
            >
              <Text style={styles.buttonText}>{item.buttonText}</Text>
            </TouchableOpacity>
          </View>
  
        </View>
      </LinearGradient>
    );
  };
  
  

  const flatListRef = useRef();

  return (
    <FlatList
      data={slides}
      ref={flatListRef}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
    />
  );
};

export default OnBoarding;
