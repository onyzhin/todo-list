export interface ITodoItem {
  id: number;
  title: string;
  status: boolean;
}

export interface IStore {
  list: ITodoItem[];
}
