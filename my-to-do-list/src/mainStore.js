
const initialState = {
    dateToDo: '',
    title: '',
    activeToDOList: []
}
export const fetchToDoLists = () => dispatch => {
    fetch('http://localhost:3000/tasks')
    .then(resp => resp.json())
    .then(activeToDOList => {
        dispatch({type: 'FETCH_TO_DO_LISTS', payload: { activeToDOList }})
    })
} 
function todos (prevState = initialState, action)  {

    switch (action.type) {
    case 'FETCH_TO_DO_LISTS':
        return {...prevState, activeToDOList: action.payload.activeToDOList}
    
    case 'CREATE_TODO': 
        
        return {...prevState, activeToDOList: [...prevState.activeToDOList, action.payload]};
    
    case 'COMPLETE_TODO': {
        return {...prevState, 
            activeToDOList: prevState.activeToDOList.map(todoList=>{
                if (todoList.id===action.payload.id){
                    return action.payload
                }else { return todoList }
            })};
    }
    case 'REMOVE_TODO': {
        return {...prevState, activeToDOList: [...prevState.activeToDOList.filter(todoList => todoList.id !== action.payload.id)]};
    }
    default:
        return prevState;
    }
}

export default todos

