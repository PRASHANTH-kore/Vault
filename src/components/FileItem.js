// import React from 'react';

// function FileItem({ name, pages, onFileSelect }) {
//   return (
//     <div className="file-item" onClick={onFileSelect}>
//       <input type="radio" name="file" />
      
//       <span>{name}</span>
//       <span>{pages}</span>
      
//     </div>
//   );
// }

// export default FileItem;


// import React from 'react';

// function FileItem({ name, pages, onFileSelect }) {
//   return (
//     <div className="file-item" onClick={onFileSelect}>
//       <p>{name}</p>
//       <small>{pages}</small>
//     </div>
//   );
// }

// export default FileItem;

// import React, { Component } from 'react';
// import { FaRegFileAlt } from "react-icons/fa";
// import './FileItem.css';

// class FileItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isSelected:false,
//         };
//       }
   

//     onFileSelect=()=>{
//         this.setState({
//             isSelected:!this.state.isSelected

//         })
//     }
//   render() {
//     const { name, pages, isSelected, onFileSelect } = this.props;
//     return (
//       <div className="file-item">
//         <input
//           type="radio"
//           className="file-item-radio"
//           checked={isSelected}
//           onChange={isSelected}
//         />
//         <div className="file-item-icon"><FaRegFileAlt /></div>
//         <div className="file-item-content" onClick={onFileSelect}>
//           <p className="file-item-name">{name}</p>
//           <small className="file-item-pages">{pages}</small>
//         </div>
//       </div>
//     );
//   }
// }

// export default FileItem;