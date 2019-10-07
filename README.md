# Challenge - Movies
Application to list movies from [TMDB API](https://developers.themoviedb.org/3) ([React Native](https://facebook.github.io/react-native/) + [Redux](https://redux.js.org/) + [Styled Components](https://www.styled-components.com/))


## Video Demo
https://youtu.be/vMGUDRA7-Do


## Screenshots
<img src="https://lh3.googleusercontent.com/cuRxELSqmcQUv0qS16ZZuZTWpopion6ud7rwUXa-LZIQZWKKwNYzZJMVz1n1sHUB89EJmrkBslPs9nH9dqg4gkYVGjk41oETix3zKAHrIxhn_mZY2NODF1frLHZGdK8Osp7FXtyp_4RAJ2F1dy1oMAEVX5CmpOWtDQ7GX5ZgNGJ9RanvvJ7hJ_nPq6HwTh7_iGectmMyzwxPxYAT9jv_eM8H6YNv3xHyxWXNPkxB4x07qm3M_F7CmEWTQA2Pn676Y4xYPLxwARFMfh289hUXYvn48PJyUVEu-xR3BSNptnPnditETTaBILggQVvNKNnyxoQ1nVZtlBwg-IRlNzGeYstSdb3s3mlxkGBnOpYbsT2HcIo6snTakWVrQrC-cnuLRUN0qn0Nn0R0C1hgsvtRBpx2C87qCkmbmygL0Vh9SK_OxOcEenePUVV6Du0b5xG3itAZf2pGn0oPeO_VAKBwne7YbTw3Loa6DhE5K5cLdrlPhP7_0_CMZve5zJ9F5BX0pBUDDnr1b2QIzCP2IjV4vwI1NAIuaP7rFxAQLP-UYitTC81vivF1CEIjaXoeiDi36yD4yTIdrGH0qUGqfWy9mLNpdARKwUDSWMgNZ2chGGOWGWTv8r5gYsGiQR0LQJzvdeH2LEAuOPymYCw3DTYS6vkoc2ysLCPVAkHCoHx3UIfwmFpvSnmhuejq=w1080-h2280-no" width="220" /> <img src="https://lh3.googleusercontent.com/SIdNuY3PGxcvhdr46-puNKAYF7cp4-2C1fGePFF-EWRdv2DzsbpzJPO4VlvInJ0j7gJgOUgWiobYSPVXu3ErUcZXLXiBVOvhloO7MJxiD6K0BqqYjl6qAK4ojVMr4pKB-W7NtkO-JWs=w1080-h2280-no" width="220" />

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
