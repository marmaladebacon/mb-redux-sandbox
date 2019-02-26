export default function courseReducer(state:any, action:any) {
  if(!state){
    state = [];
  }
  switch(action.type){
    case 'CREATE_COURSE':
      return [...state, Object.assign({}, action.course)];
    default:
      return [];
  }
}