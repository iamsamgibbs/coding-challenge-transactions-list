// Define the state type
export interface RootState {
  transactions: any[];
  isSubmitting: boolean;
  error: boolean;
}

// Initial state
const initialState: RootState = {
  transactions: [],
  isSubmitting: false,
  error: false,
};

const reducer = (state = initialState, action: any): RootState => {
  switch (action.type) {
    // Define your actions
    case 'SEND_TRANSACTION': {
      return { ...state, isSubmitting: true, error: false };
    }
    case 'SEND_TRANSACTION_SUCCESS': {
      return { ...state, isSubmitting: false, error: false };
    }
    case 'SEND_TRANSACTION_FAILURE': {
      return { ...state, isSubmitting: false, error: true };
    }
    default:
      return state;
  }
};

export default reducer;
