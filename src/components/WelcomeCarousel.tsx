import React, {useRef, useEffect, useState} from 'react';
import {Animated, StyleSheet, View, Dimensions} from 'react-native';

const images = [
  'https://cdn.dribbble.com/users/1466634/screenshots/5409874/dribbble-07_2x.png',
  'https://cdn.dribbble.com/users/1348461/screenshots/4646841/swyft_groupfitness.jpg',
  'https://i.pinimg.com/originals/69/8a/0e/698a0e87728a04bea0cd9cdaa3377c8a.jpg',
];

const WelcomeCarousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const fadeAnim = useRef(new Animated.Value(1));

  useEffect(() => {
    let timeout: number;
    const interval = setInterval(() => {
      Animated.timing(fadeAnim.current, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        timeout = setTimeout(() => {
          Animated.timing(fadeAnim.current, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            setCurrentImage((prev) => {
              if (prev === images.length - 1) {
                return 0;
              } else {
                return prev + 1;
              }
            });
          });
        }, 8000);
      });
    }, 12000);
    return () => {
      clearInterval(interval);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [fadeAnim]);

  return (
    <>
      <View style={styles.imgWrapper}>
        <Animated.Image
          source={{
            uri: images[currentImage],
          }}
          style={[styles.background, {opacity: fadeAnim.current}]}
          resizeMode="cover"
        />
      </View>
      <View style={styles.pinContainer}>
        {images.map((image, index) => (
          <View
            style={[
              styles.pin,
              {
                backgroundColor: index === currentImage ? 'blue' : 'black',
              },
            ]}
            key={image}
          />
        ))}
      </View>
    </>
  );
};

export default WelcomeCarousel;

const styles = StyleSheet.create({
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
  },
  pin: {
    width: 15,
    height: 3,
    backgroundColor: 'red',
    marginHorizontal: 2,
  },
  imgWrapper: {
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    height: Dimensions.get('screen').height - 320,
    width: Dimensions.get('screen').width,
  },
});
