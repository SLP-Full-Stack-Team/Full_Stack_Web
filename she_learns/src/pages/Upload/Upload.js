import './Upload.css';
import * as React from 'react';

function Upload() {
    const topics = [
    {label:'Sorted_Array_01', value:'Sorted Array1'},
    {label:'Sorted_Array_02', value:'Sorted Array'},
    {label:'Binary_Tree', value:'Binary Tree'}
    ];
    const [value, setValue] = React.useState('Sorted Array1');
    const handleChange = (event) => {
        setValue(event.target.value);
    }

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
                Options={topics}
                value={value}
                onChange={handleChange}
                />

            </div>
        </body>
      </header>
    </div>
  );
}
const Dropdown = ({ label, value, topic, onChange}) => {
 return (

   <label>
     {label}
     <select value={value} onChange={onChange}>
       {topic.map((topic) => (
         <option value={topic.value}>{topic.label}</option>
       ))}
     </select>
   </label>
 );

};
export default Upload;