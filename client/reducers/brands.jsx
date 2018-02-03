//a reducer takes in two things:

//1. the action (info about what happened)
//2. copy of current state
//reducer takes a state, modifies it and returns it

const brands = (state = [], action) => {
  switch(action.type) {
    case 'CHOOSE_BRAND' :
      console.log('choose your brand');
      const i = action.index;
      return [
        ...state.slice(0, i),  //before the one we are updating
        {...state[i], brand: state[i].brand + 1},
        ...state.slice(i + 1), //after the one we are updating
      ]
    default:
      return state;
  }
}

export default brands;

//in redux we dont mutate a state, but create a copy of a state and return it - pure function
//var copy = Object.assign({}, original object)
//return copy
