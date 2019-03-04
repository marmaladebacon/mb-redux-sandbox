import React from 'react';
import {Link} from 'react-router-dom';

const CourseListRow = (options:any) => {
  const {course} = options;
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank"></a></td>
      <td><Link to={'/managecourse/'+course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );

}

export default CourseListRow;