export interface ListResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface Room {
  id: number;
  name: string;
  avatar?: React.ReactNode;
}
