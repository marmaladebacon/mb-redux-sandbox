//file that determines what is initially in state

export interface IMbStoreState {
  authors: Record<string, any>[];
  courses: Record<string, any>[];
}

export const initialState: IMbStoreState = {
  authors: [],
  courses: [],
}

