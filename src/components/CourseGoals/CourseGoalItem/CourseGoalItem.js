import React from 'react';

import classes from './CourseGoalItem.module.css';

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={classes['goal-item']} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
