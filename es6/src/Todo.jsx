// export default function Todo({task, isDone}){
//     token = 'Ami khabo akhon';
//     return(
//         <li>Task: {task}</li>
//     )
// }

// conditional rendering  option 1 
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished : {task}</li>
//     }
//     else{
//         return <li>Work on : {task}</li>
//     }
// }

// conditional rendering  option 2 
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished : {task}</li>
//     }
//         return <li>Work on : {task}</li>
    
// }


// conditional rendering  option 3 ternary operator
// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone ? 'Finished.' : 'Work on'} : {task}</li>
//     ) 
    
// }


// conditional rendering  option 4 
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }


// conditional rendering  option 5 
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ': Work on'}</li>
//     )
// }

// conditional rendering  option 5 
export default function Todo({task, isDone}){
   let listItem;
   if(isDone){
    listItem = <li>Finish: {task}</li>
   }
   else{
    listItem = <li>Work on: {task}</li>
   }
   return listItem;
}

