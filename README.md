# challenge-movies
Application to list movies from API Trakt (React Native + Redux + Styled Components)

# Video Demo
https://www.youtube.com/watch?v=zwJn4hNvqBA

# Screenshots
<img src="https://lh3.googleusercontent.com/ztzDLRmpYEEUudl-7KFj5TekBWPbmgGpfgqj9M_OfzejDHf6azq1igyh_71w_AI8HJAQamMtyxTTV7VDJSMYzjJsUIqqtSIof3b7BcMpzwsyCv2hMNlJvwobVmSy5wBu3PGyfIzAWCM=w1080-h2280-no" width="220" /> <img src="https://lh3.googleusercontent.com/SIdNuY3PGxcvhdr46-puNKAYF7cp4-2C1fGePFF-EWRdv2DzsbpzJPO4VlvInJ0j7gJgOUgWiobYSPVXu3ErUcZXLXiBVOvhloO7MJxiD6K0BqqYjl6qAK4ojVMr4pKB-W7NtkO-JWs=w1080-h2280-no" width="220" />

# Run
- Install React Native and Android Studio;
- Create *local.properties* into *challenge-movies/android* and set: 
```
sdk.dir=/home/USERNAME/Android/Sdk
```
- Install dependencies: 
```
yarn install
```
- Run server: 
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
- Get poster with other API suggested by Trakt;
