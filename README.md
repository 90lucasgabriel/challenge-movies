# Challenge - Movies
Application to list movies from [TMDB API](https://developers.themoviedb.org/3) ([React Native](https://facebook.github.io/react-native/) + [Redux](https://redux.js.org/) + [Styled Components](https://www.styled-components.com/))


## Video Demo
https://youtu.be/vMGUDRA7-Do


## Screenshots
<img src="https://lh3.googleusercontent.com/j6AUODih2nQOER45ANNH6oTzQ9E4V3X4tAAMO7Sia9P-HxR2DgycC18vrl05jzqJK7QfHapX4gX_3lBs3LFSJ3zbNGlHGnlYU7hsi0Bqz0Pve6LqkT9Q-Y8tmLPCJF-d4Zn55J-oIHHxmZPLFizqqArAeUQ1ZwzKQSImtbhsmGS4HVXCp1mPpaijvA45zbiboVWWrVMcdU_CNf6NF8Jhv8HDfYrVh_oXrcRgMgMQwDGqVMST0fhi_VDPUzcibbxu6_PCZ_ozJJJ4vTJscU6jc54MGfkYCrAyn8K69y0h-a7mr70KnDPwcfjPL4c-102DhthryrUezp8qSAB9THFhPmZ96kz-16TtTjfXHXcxTzF_fE2HOcZBy3ROEoNLYHYMrCD_iPvn__uX9_3SUiiZlIMwdZnVlXf-fhi4oMs6WJS8-VeAvho09KTBLcnFG97zc8PVM8ezGXcZTW5XnEQv06OVombUZ2WbkOmOKV1Oru3Ci57c5d9-w8F0--YSDc12VnVM7dVvflSv2v7QOsNmpuwfWUNtLEIzHrQnuzjntp5yFT6k1BJ3tU4RksG_ZhJqAmQKM0PMt13S6Y75Dz3LvM5LwhrUVtOPolo5qCE5UyNb5g-R72mR-MlzigjugL1AsRPpo_EAezk7LqIDuPR8Xff8rn7P1tCNscIUaHjpCrPuaWAFJopvvCih=w1080-h2280-no" width="220" /> <img src="https://lh3.googleusercontent.com/SIdNuY3PGxcvhdr46-puNKAYF7cp4-2C1fGePFF-EWRdv2DzsbpzJPO4VlvInJ0j7gJgOUgWiobYSPVXu3ErUcZXLXiBVOvhloO7MJxiD6K0BqqYjl6qAK4ojVMr4pKB-W7NtkO-JWs=w1080-h2280-no" width="220" />

## Prerequisites
- Make sure you have [React Native](https://facebook.github.io/react-native/) environment working;
- Install [React Native](https://facebook.github.io/react-native/) and [Android Studio](https://developer.android.com/studio);

## Installing
- Clone this repo:
```
git clone git@github.com:90lucasgabriel/challenge-movies.git
```
- Access directory:
```
cd challenge-movies
```
- Create *local.properties* into *challenge-movies/android* and set: 
```
sdk.dir=/home/USERNAME/Android/Sdk
```
- Install dependencies: 
```
yarn install
```
## Running
- Connect a device or run emulator;
- Run server in background: 
```
react-native start
```
- Build and execute application in another tab: 
```
react-native run-android
```

## Next Features and Steps
- Create *axiosconfig* file and *.env*;
- Create better components;
- Create all unit tests;
- Create details screen with trailer, description and cast;
- ~~Get poster with [TMDB API](https://developers.themoviedb.org/3), suggested by Trakt~~;
