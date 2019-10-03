# Challenge - Movies
Application to list movies from [Trakt API](https://trakt.docs.apiary.io/) ([React Native](https://facebook.github.io/react-native/) + [Redux](https://redux.js.org/) + [Styled Components](https://www.styled-components.com/))


## Video Demo
https://www.youtube.com/watch?v=zwJn4hNvqBA


## Screenshots
<img src="https://lh3.googleusercontent.com/ztzDLRmpYEEUudl-7KFj5TekBWPbmgGpfgqj9M_OfzejDHf6azq1igyh_71w_AI8HJAQamMtyxTTV7VDJSMYzjJsUIqqtSIof3b7BcMpzwsyCv2hMNlJvwobVmSy5wBu3PGyfIzAWCM=w1080-h2280-no" width="220" /> <img src="https://lh3.googleusercontent.com/SIdNuY3PGxcvhdr46-puNKAYF7cp4-2C1fGePFF-EWRdv2DzsbpzJPO4VlvInJ0j7gJgOUgWiobYSPVXu3ErUcZXLXiBVOvhloO7MJxiD6K0BqqYjl6qAK4ojVMr4pKB-W7NtkO-JWs=w1080-h2280-no" width="220" />

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

## Next Steps
- Create *axiosconfig* file and *.env*;
- Create better components;
- Create all unit tests;
- Create details screen with teaser, description and cast;
- Get poster with [TMDB API](https://developers.themoviedb.org/3), suggested by Trakt;
