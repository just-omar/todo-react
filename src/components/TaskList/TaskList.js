import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import './TaskList.css';

const TaskList = ({ todos, onDeleted, onToggleDone, changeItem, onSubmit, onChangeHandler }) => {

  const [, forceRender] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => forceRender(new Date()), 5000);
    return () => clearInterval(timerID);
  });


	const elements = todos.map((item) => (
		<li key={item.id} className="list-group-item">
			<Task
				{...item}
				onDeleted={() => onDeleted(item.id)}
				onToggleDone={() => onToggleDone(item.id)}
				stateTask={item.label}
				changeItem={(e) => {
					changeItem(item.id, e);
				}}
				editing={item.editing}
				onSubmit={(e) => onSubmit(item.id, e)}
				onChangeHandler={(e) => onChangeHandler(item.id, e)}
			/>
		</li>
	));

	return <ul className="todo-list">{elements}</ul>;
};

TaskList.defaultProps = {
	onDeleted: () => {},
	onToggleDone: () => {},
	changeItem: () => {},
	onSubmit: () => {},
	onChangeHandler: () => {},
	countdownOn: () => {},
	countdownOff: () => {},
};

TaskList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	onDeleted: PropTypes.func,
	onToggleDone: PropTypes.func,
	changeItem: PropTypes.func,
	onSubmit: PropTypes.func,
	onChangeHandler: PropTypes.func,
	countdownOn: PropTypes.func,
	countdownOff: PropTypes.func,
};

export default TaskList;
