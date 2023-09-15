// import React from 'react';
//
// interface ChildProps {
//     color: string;
//     onClick: () => void;
// }
//
// const Button: React.FC<{ onClick: () => void }> = ({onClick, children}) => {
//     return <button onClick={onClick}>{children}</button>;
// };
//
// export const Child: React.FC<ChildProps> = ({color, onClick}) => {
//     return (
//         <div>
//             {color}
//             <Button onClick={onClick}>Click me</Button>
//         </div>
//     );
// };
//
// export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
//     return (
//         <div>
//             {color}
//             {children}
//             <Button onClick={onClick}>Click me</Button>
//         </div>
//     );
// };
