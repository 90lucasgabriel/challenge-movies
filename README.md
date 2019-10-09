# Challenge - Movies
Application to list movies from [TMDB API](https://developers.themoviedb.org/3) ([React Native](https://facebook.github.io/react-native/) + [Redux](https://redux.js.org/) + [Styled Components](https://www.styled-components.com/))


## Video Demo
https://youtu.be/vMGUDRA7-Do


## Screenshots
<img src="https://lh3.googleusercontent.com/5iNpyDmAWDWMCv5rFThMwm7AJW-t8OhC1VXVSI6z8vZUSBGK3a2CHYVt3EBWxh6SRAX3JqxSuIvhJNIjkFroP1g18k0pSTSbDMmzL4RU87eBl65jd_ekDdvIFhLHM7dvfoi8pJBrc6PMRRlcsw0Lh-sj7-QznIlMyGHurWNiJVUr5Z0u8IrkBafDe6cJpodNGu2X6keGjVpxM60upD2wtbuigrFgbLz7CbwMQqi4bBMOqZLvv-EamaLz_u0KIaxo9H2le3PYSCtwrZo0wZ7XNfPV2RjCzpUHa_IbPlJL_ejf4XYzIsY7RA15PB1Ub0DJbpaJSqBM_BF1XOFVz6j_CEljFAmVULZ89DqgiMsU4Qm5uf28GFbXJ5tQPvJ88q0kC3KJeMCE7ifA58oEs_HegoQLStzvwnbjjrlg9b5AXhhuuRy6YRMs6_eE2IDB5qE42BwbOcuZ65cS6O4-JhI0j3Yw50VlodjczZaryeEneMZVn1u_XTtcVTfilMK46kEoMdXsR8Nwvx5dM4CthtDOLMCpXM2ZkAIO6j3muKeYjBgXu11e8CI3BmFEAo8ta8HN_fEsA3xRCeA_bh14Wq6RdUWKVp77cMeieKHWH1vNuxtLVT_gc9FMA8yj_5ZE_I3UEQYI7OJYD6u57D4M-2S43u500EbUCeB-LsfaLjsF3fNYVvKwVVNgYtdK=w1080-h2280-no" width="220" /> <img src="https://lh3.googleusercontent.com/SIdNuY3PGxcvhdr46-puNKAYF7cp4-2C1fGePFF-EWRdv2DzsbpzJPO4VlvInJ0j7gJgOUgWiobYSPVXu3ErUcZXLXiBVOvhloO7MJxiD6K0BqqYjl6qAK4ojVMr4pKB-W7NtkO-JWs=w1080-h2280-no" width="220" />

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
- Run to create *local.properties* into *challenge-movies/android* and set ANDROID_SDK_ROOT path: 
```
echo "sdk.dir=/home/$(whoami)/Android/Sdk" >> android/local.properties
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
