const CREATE_TODO = "CREATE_TODO";
const READ_TODO = "READ_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

export const createTodos = (createData) => {
  return {
    type: CREATE_TODO,
    createData,
  };
};

export const readTodos = (id) => {
  return {
    type: READ_TODO,
    id,
  };
};

export const updateTodo = (todoId, isDone) => {
  return {
    type: UPDATE_TODO,
    id: todoId,
    isDone,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    id: todoId,
  };
};

const initialState = {
  list: [
    {
      id: 1,
      title: "책읽기",
      content: "책은 마음의 양식",
      isDone: false,
    },
    {
      id: 2,
      title: "닌텐도 링피트",
      content: "사놓고 안함 ",
      isDone: false,
    },
  ],
  todo: {},
};

//리듀서
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TODO": {
      return {
        ...state,
        list: [
          ...state.list,
          {
            id:
              state.list.length === 0
                ? 1
                : state.list[state.list.length - 1].id + 1,
            title: action.createData.title,
            content: action.createData.content,
            isDone: false,
          },
        ],
      };
    }

    case "READ_TODO": {
      const list = state.list.filter((item) => {
        if (item.id === Number(action.id)) return item;
      });
      return { ...state, todo: list };
    }

    case "DELETE_TODO": {
      const filterArray = state.list.filter((item) => {
        return item.id !== action.id;
      });
      return { ...state, list: filterArray };
    }

    case "UPDATE_TODO": {
      const filterArray = state.list.map((item) => {
        if (item.id === action.id) {
          return action.isDone
            ? { ...item, isDone: false }
            : { ...item, isDone: true };
        } else return item;
      });
      return { ...state, list: filterArray };
    }

    default:
      return state;
  }
};

export default todoList;
