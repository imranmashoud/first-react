/* Conditional rendering option 1 */

// export default function Todo({ task }) {
//   return (
//     <h3>
//       <li>Task: {task}</li>
//     </h3>
//   );
// }

/* Conditional rendering option 2 */

// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work On: {task}</li>;
//   }
// }

/* Conditional rendering option 3 */

// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Work On: {task}</li>;
// }

/* Conditional rendering using Ternary Operator option 4 */

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work on"}: {task}
//     </li>
//   );
// }

/* Conditional rendering using && Operator option 5 */

// export default function Todo({ task, isDone }) {
//   return (
//     <h3>
//       <li>
//         {task} {isDone && ": Done"}
//       </li>
//     </h3>
//   );
// }

/* Conditional rendering option 6 */

export default function Todo({ task, isDone }) {
  let listItem;

  if (isDone) {
    listItem = <li>Finished: {task}</li>;
  } else {
    listItem = <li>Work On: {task}</li>;
  }
  return listItem;
}
