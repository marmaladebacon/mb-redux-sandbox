
# Rendering
 * src/index.tsx renders the App component
 * The app component renders the components/CoursesPage component
 * The CoursesPage component renders each course sotred in the state as a row

# Where is Redux Configured?
`src/index.tsx` calls configureStore from `./store/configureStore.ts`

configureStore creates the store from the `rootReducer` and `initialState`, and applies any middleware if necessary

# Redux
 * In components/CoursePage, we connected the `mapStateToProps, mapDispatchToProps` to the `CoursesPage` component
 ```js
 export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
 ```
 * Our `mapStateToProps` function maps the props we want to use to the properties in the state
 ```js
 render() {
   {(this.props as any).propsCourses.map(this.courseRow)}
 }

 function mapStateToProps(state:any, ownProps:any) {
  return {
    propsCourses: state.courses
  };
}
 ```
* Our `mapDispatchToProps` maps the actions we want to dispatch to properties under props, enabling us to use this as such
```js
function mapDispatchToProps(dispatch:any){
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };  
}

onClickSave = (event:any) => {
  (this.props as any).actions.createCourse(this.state.course);
}
```


```
    "babel-polyfill": "6.8.0",
    "bootstrap": "3.3.6",
    "jquery": "2.2.3",
    "react": "15.0.2",
    "react-dom": "15.0.2",
    "react-redux": "4.4.5",
    "react-router": "2.4.0",
    "react-router-redux": "4.0.4",
    "redux": "3.5.2",
    "redux-thunk": "2.0.1",
    "toastr": "2.1.2"