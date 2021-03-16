import { ActionType } from 'typesafe-actions';
import * as actions from './action';

export type TodosAction = ActionType<typeof actions>;

export interface Todo{
    id: number;
    text: string;
    done: boolean;
}

export type TodosState = Todo[]; //todo의상태는 배열