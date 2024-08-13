import React from 'react';
import FileSection from './FileSection';

function Sidebar({ onFileSelect }) {
  const sections = [
    { title: 'DPEx',  },
    { title: 'GMO', },
    { title: 'Emerging Markets', },
  ];

  return (
    <div className="sidebar">
   
        <h3 className='myfiles'>My Files</h3>
        <hr></hr>
        <div style={{ overflowY: "auto"}} className="custom-scrollbar">
        <div>
      {sections.map((section, index) => (
        <FileSection key={index} title={section.title}  onFileSelect={onFileSelect} />
      ))}
      </div>
      </div>
    </div>
  );
}

export default Sidebar;

// import React, { Component } from 'react';
// import FileItem from './FileItem';
// import { FaFileAlt } from 'react-icons/fa'; // You can use an icon library like react-icons

// class Sidebar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedFile: null,
//     };
//   }

//   handleRadioChange = (file) => {
//     this.setState({ selectedFile: file.id });
//     this.props.onFileSelect(file);
//   };

//   render() {
//     const files = [
//       { name: 'File Name 1', pages: '50 Pages', icon: <FaFileAlt style={{ color: '#7a4ce0' }} />, id: 1 },
//       { name: 'File Name 2', pages: '2 Sheets', icon: <FaFileAlt style={{ color: '#7a4ce0' }} />, id: 2 },
//       // Add more file objects here
//     ];

//     return (
//       <div className="sidebar">
//         {files.map((file) => (
//           <FileItem
//             key={file.id}
//             icon={file.icon}
//             name={file.name}
//             pages={file.pages}
//             isSelected={this.state.selectedFile === file.id}
//             onRadioChange={() => this.handleRadioChange(file)}
//             onFileSelect={() => this.handleRadioChange(file)} // Optional if you want the entire item to be selectable
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Sidebar;
