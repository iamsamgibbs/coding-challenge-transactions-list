declare global {
  interface Window {
    HSOverlay: any;
  }
}

export interface Transaction {
  gasLimit: string;
  gasPrice: string;
  to: string;
  from: string;
  value: string;
  data?: string;
  chainId: string;
  hash: string;
}

export interface TransactionsData {
  getAllTransactions: Transaction[];
}

export interface SingleTransactionData {
  getTransaction: Transaction;
}

export type Action<P> = {
  type: Actions;
  payload: P;
};

export enum Actions {
  SendTransaction = 'SEND_TRANSACTION',
  SendTransactionSuccess = 'SEND_TRANSACTION_SUCCESS',
  SendTransactionFailure = 'SEND_TRANSACTION_FAILURE',
}

export type NewTransactionPayload = {
  recipient: string;
  amount: number;
};
