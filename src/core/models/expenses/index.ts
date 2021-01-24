export interface IExpenses {
  days: IDayExpenses[];
}

export interface IDayExpenses {
  date: string;
  status: 'success' | 'fail' | null;
  spentMoney: number;
  info: string;
}