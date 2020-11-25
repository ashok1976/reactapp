export const countState = 0;
export const counterReducer = (state, action) => {
	switch(action.type){
		case 'INCREMENT': return state + 1;
		case 'DEINCREMENT':return state - 1;
		default: return state
	}
}