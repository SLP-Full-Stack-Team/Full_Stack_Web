import './Upload.css';
import * as React from 'react';

function Upload() {
    const [topic, setTopic] = React.useState('Sorted Array1');
  return (
    <div className="Upload">
      <header>
        <body>
            <div>
                 <p>Upload Page</p>
                        <a className="Upload-link"
                          href="https://reactjs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn React
                        </a>
            </div>
            <div>
                <Dropdown
                label="Question Topic"
                Options={[{label:'Sorted_Array_01', value:'Sorted Array1'},
                {label:'Sorted_Array_02', value:'Sorted Array'},
                {label:'Binary_Tree', value:'Binary Tree'}
                ]}
                value={topic}
                />

            </div>
        </body>
      </header>
    </div>
  );
}
const Dropdown = ({ label, value, options, onChange }) => {

 return (

   <label>
     {label}
     <select value={value} onChange={onChange}>
       {options.map((option) => (
         <option value={option.value}>{option.label}</option>
       ))}
     </select>
   </label>
 );

};
export default Upload;