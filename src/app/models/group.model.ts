export interface MyWorker {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  phone: string;
  email: string;
  group: number;
  edit: boolean;
}

export enum MyGroups {
  it,
  sale,
  delivery,
  legal,
}
