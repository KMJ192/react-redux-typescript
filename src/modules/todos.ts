//액션(추가액션, 토글액션, 삭제액션)
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

//새로운 항목 등록시 Unique한 정보
let nextId = 1;

//액션 생성 함수 작성
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload:{
        id: nextId++,
        text
    }
});
export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
});
export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: id
});

//액션에 대한 typescript type 생성
type TodosAction =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>

//상태에서 TODO의 항목에 대한 데이터 타입 지정
export interface Todo{
    id: number;
    text: string;
    done: boolean;
}

type TodosState = Todo[]; //todo의상태는 배열
const initialState: TodosState = []; //초기상태는 TodosState의 배열

//reducer작성
function todos(state: TodosState = initialState, action: TodosAction): TodosState{
    switch(action.type){
        case ADD_TODO:
            //새로운 항목 등록
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                done: false
            });
        case TOGGLE_TODO:
            //toggle
            return state.map(todo => 
                todo.id === action.payload ? {
                    ...todo,
                    done: !todo.done //done을 반전
                } : todo
            )
        case REMOVE_TODO:
            //todo.id와 action.payload가 일치하면 사라짐
            return state.filter(todo =>
                todo.id !== action.payload
            )
        default:
            return state;
    }
}
export default todos;