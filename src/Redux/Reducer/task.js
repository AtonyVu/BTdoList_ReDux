import data from '../../todolist/data.json'
let initialState  ={
    dataList:data
}
const taskReducer = (state=initialState,action)=>{
   switch(action.type)
   {
       case "DELETE_TASK":
           {
                 let vitri = state.dataList.findIndex((item)=>{
                     return(item.id ===action.payload.id);
                 });
                 let deletaTask = [...state.dataList];
                 deletaTask.splice(vitri,1);
                 state.dataList=[...deletaTask];
               return{...state}
           }
           case "UPDATE_TASK":
            {
                  let vitri = state.dataList.findIndex((item)=>{
                      return(item.id ===action.payload.id);
                  });
                  let UpdateTask = [...state.dataList];
               if(action.payload.status==="comple")
               {
                   UpdateTask[vitri].status='uncomple'
               }
               else
               {
                UpdateTask[vitri].status='comple'
               }
                  state.dataList=[...UpdateTask];
                return{...state}
            }
            case "ADD_TASK":
                {
                    let addTask = [...state.dataList];
                     let newTask ={id:Math.random(),status:'uncomple',textTask:action.payload};
                      addTask.push(newTask);
                      state.dataList=[...addTask];
                    return{...state}
                }
       default:
           return{...state}
   }
}
export default taskReducer;