//액션(추가액션, 토글액션, 삭제액션)
export const ADD_TODO = 'todos/ADD_TODO' as const;
export const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
export const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

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
