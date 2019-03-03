import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  state:any = {
    course: { title:'' },
  };
  constructor(props:any, context:any){
    super(props, context);
    //this.onTitleChange = this.onTitleChange.bind(this);
    /*
    if we're doing a method on a class, the 'this.onTitleChange' in the input template is bound to the input tag not the class, so we need to do the above line, or 'onTitleChange = (event: any) => {...}'

    Note: You must have transform-class-properties enabled in your own Babel config in order to use class properties. If you’re using Create React App, this is already enabled for you.
     */

  }

  /*
  onTitleChange = (event:any) =>{
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course:course,
    });
    console.log('Setting title:' + course.title);
  }

  onClickSave = (event:any) => {
    (this.props as any).actions.createCourse(this.state.course);
  } */

  courseRow = (course:any, index:number) =>{
    console.log(course);
    return <div key={index}>{course.title}</div>
  }

  render() {
    //debugger;
    return (
      <div>
        <h1>Courses</h1>
        {(this.props as any).propscourses.map(this.courseRow)}
      </div>

    )
  }
}

/* old
      <div>
        <h1>Courses</h1>
        {(this.props as any).propscourses.map(this.courseRow)}
        <h2>Add Course</h2>        
        <input 
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />

      </div>
 */

function mapStateToProps(state:any, ownProps:any) {
  //debugger;
  // returns the object containing the properties we'd like to see exposed on our component
  // courses here means this.props.courses is accessible in the template render 
  // state.courses here is defined by the 'courses' property we put in our root reducer
  console.log(state);
  return {
    propscourses: state.courses
  };
}

function mapDispatchToProps(dispatch:any){
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };  
}

// connect call here returns a function, and we call that returned function with CoursesPage
// connect has a second optional parameter called 'mapDispatchToProps', if it is omitted the component gets a dispatch property injected by connect, so in our template render we can call this.props.dispatch
// what is dispatch? this.props.dispatch is a function that allows us to fire off our actions

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);