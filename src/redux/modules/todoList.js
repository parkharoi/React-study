const CREATE_TODO = "CREATE_TODO"; //액션 이름을 타입을 정해둠
const READ_TODO = "READ_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// export 밖에서 꺼내 쓰겠다. //액션객체를 생성해서 리듀서에게 보내주는 함수다.
export const createTodos = (sendData) => {
  return {
    //액션객체
    type: CREATE_TODO,
    sendData,
  };
};

export const readTodos = (id) => {
  return {
    //액션객체
    type: READ_TODO,
    id,
  };
};

export const deleteTodos = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const upDateTodos = (id, isDone) => {
  return {
    type: UPDATE_TODO,
    id,
    isDone,
  };
};

// 초기 상태값
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

// 리듀서 (데이터 가공)
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      //기존에 가지고 있는 state에서 새로운 객체를 주가하는 것에서 마지막에 하나 더 추가하는거 중괄호를 넣어준건 스위치 안에 함수써서 (지역변수 똑같은 변수명으로하고 싶엉서){}중관호 쓴거임
      return {
        ...state,
        list: [
          ...state.list,
          {
            id:
              state.list.length === 0
                ? 1
                : state.list[state.list.length - 1].id + 1,
            title: action.sendData.title,
            content: action.sendData.content,
            isDone: false,
          },
        ],
      };
    }

    case READ_TODO: {
      const list = state.list.filter((item) => {
        if (item.id === Number(action.id)) return item;
      });
      return { ...state, todo: list };
    }

    case DELETE_TODO: {
      const filterArray = state.list.filter((item) => {
        return item.id !== action.id;
      }); //filter 해당 조건 맞는애만 리턴
      return { ...state, list: filterArray };
    }

    case UPDATE_TODO:
      const filterArray = state.list.map((item) => {
        if (item.id === action.id) {
          return action.isDone
            ? { ...item, isDone: false }
            : { ...item, isDone: true };
        } else return item;
      });
      return { ...state, list: filterArray };
    //map 새로운 배열을 만들어서 처음부터 끝까지 순회한다.(복사))
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todoList;
