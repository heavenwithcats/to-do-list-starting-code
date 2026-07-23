export const createTodo = async (todo) => {
  try {
    const res = await fetch('/api/todo/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    return { error: error.message };
  }
};

export const getTodos = async () => {
  try {
    const res = await fetch('/api/todos');

    if (!res.ok) {
      throw new Error(`Server error: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return { error: error.message };
  }
};

export const removeTodo = async (id) => {
  try {
    const res = await fetch(`/api/todo/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.statusText}`);
    }

    return 'deleted';
  } catch (error) {
    return { error: error.message };
  }
};
