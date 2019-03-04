import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

export interface ManageCoursePageProps {
}

class ManageCoursePage extends React.Component<ManageCoursePageProps, any> {
  constructor(props:ManageCoursePageProps, context:any){
    super(props, context);
    this.state = {
      course: Object.assign({}, (props as any).course),
      errors: {},
    }
  }
  public render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm 
          authors={[]}
          course={this.state.course}
          errors={this.state.errors}
          onSave={()=>{}}
          onChange={()=>{}}
          saving={false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state:any) => {
  let course ={id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  return {
    course: course,
  };
}

const mapDispatchToProps = (dispatch:any) =>{
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
