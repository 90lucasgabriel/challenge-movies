# Challenge - Movies
Application to list movies from [TMDB API](https://developers.themoviedb.org/3) ([React Native](https://facebook.github.io/react-native/) + [Redux](https://redux.js.org/) + [Styled Components](https://www.styled-components.com/))


## Video Demo
https://youtu.be/vMGUDRA7-Do


## Screenshots
<img src="https://lh3.googleusercontent.com/p6be51ij5NqcdU7Rb2CYCMf7rhArBkdUBzhUccWdl6mjmnZU40b6MS-T0gvjw9G_esJSt4Y14q2dWGW-TrXBw3_CHQ2glUbea9FqusYUjUtpuG63g_0mLu7LSHrtxD16SgIswLzuzYQ20FiW0OJ13Np5mbBogZAW0dfkBc6YDXQaxOD-KXlugbDe1-orrPV80J5VqDt4Ur1fOAFpwLgFElItW3uQ0Tfax-1LrozlGyUY2VWtu1xtUOCzaY4IgJLnIgnyMDEq8w2ziSakdHClV1MMuO9eQES3jtZ3pPPuRQkYbV0hfiixQI0GBYO7Zc4uPQYUjCx28mVrT_pg0IdBYGTbiGWE54FcXvfQAxeFtjmZ6arVvbnUVYSv3ZCdgV5nbxTfK3u-ncHDudSBnXKDoy5Xv68yZFQx4bJMeklIzHFyl37w7_m5l4fFtBEDpolyNP4qaABa56fG6ES7a7ihhPvSEOHVuM9zA9DS8mnxYPhzzuaNOB18rjLmVXz8QKEOQPzcyqqtXAlPw2_7vJNwkyd98sekQUp7gkJnrBg7PAfb0hhGjQVzI5fkOeuWQXXZglbLx2c_H7D1FmChCruF01vLAJj-WbjfrLEkYQ2UEqhOTgUVGF6HykV4cRYxSp7eC7ANLRkYHWtC41DcmB82J9NxpDsixM6D36X-FcejtQpPo7PtsdwRRrI=w458-h965-no" width="220" /> <img src="https://lh3.googleusercontent.com/SIdNuY3PGxcvhdr46-puNKAYF7cp4-2C1fGePFF-EWRdv2DzsbpzJPO4VlvInJ0j7gJgOUgWiobYSPVXu3ErUcZXLXiBVOvhloO7MJxiD6K0BqqYjl6qAK4ojVMr4pKB-W7NtkO-JWs=w1080-h2280-no" width="220" />

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
