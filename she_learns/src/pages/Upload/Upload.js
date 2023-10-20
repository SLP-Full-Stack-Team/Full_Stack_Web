import './Upload.css';
import * as React from 'react';

function Upload() {
    const topic = [
    {label:'Sorted Array 01', value:'Sorted Array1'},
    {label:'Sorted Array 02', value:'Sorted Array'},
    {label:'Binary Tree', value:'Binary Tree'}
    ];
    const [value, setValue] = React.useState('');
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