import './Upload.css';
import * as React from 'react';

function Upload() {
    const topic = [
    {label:'Sorted_Array_01', value:'Sorted Array1'},
    {label:'Sorted_Array_02', value:'Sorted Array'},
    {label:'Binary_Tree', value:'Binary Tree'}
    ];
    const [value, setValue] = React.useState('Select a game');
    const handleChange = (event) => {
        setValue(event.target.value);
    }

  return (
    <div className="Upload">
      <header>
        <body>
            <div>
                <Dropdown
                label="Question Topic"
                options={topic}
                value={value}
                placeholder="Select a game"
                onChange={handleChange}
                />

            </div>
        </body>
      </header>
    </div>
  );
}
const Dropdown = ({label, value, options, placeholder, onChange}) => {
 return (

   <label>
     {label}
     <select value={value} onChange={onChange}>
     {placeholder && (
               <option value="" disabled selected>
                 {placeholder}
               </option>
      )}
       {options.map((option) => (
         <option value={option.value}>{option.label}</option>
       ))}
     </select>
   </label>
 );

};
export default Upload;