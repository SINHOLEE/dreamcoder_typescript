{
	type ToDo = {
		title: string;
		description: string;
		label: string;
		priority: 'high' | 'low';
	};
	function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
		return { ...todo, ...fieldsToUpdate };
	}
	const todo: ToDo = {
		title: '제목',
		description: '설명',
		label: '라벨',
		priority: 'high',
	};

	const updated = updateTodo(todo, { priority: 'low' });
	console.log(updated);
}
