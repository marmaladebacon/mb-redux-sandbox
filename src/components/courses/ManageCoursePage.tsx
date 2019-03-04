import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

export interface ManageCoursePageProps {
}

class ManageCoursePage extends React.Component<ManageCoursePageProps, any> {
  constructor(props:ManageCoursePageProps, context:any){
    super(props, context);
  }
  public render() {
    return (
      <div>
        <h1>Manage Course</h1>
      </div>
    );
  }
}

const mapState2Props = (state:any) => {
  return {
  };
}

const mapDispatchToProps = (dispatch:any) =>{
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapState2Props, mapDispatchToProps)(ManageCoursePage);
