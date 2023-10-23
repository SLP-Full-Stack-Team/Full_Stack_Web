import './Upload.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
//need to install npm install react-router-dom
function Upload() {
    const [d_type, set_Data] = React.useState('');
    const data_type = [
    {name:'.pdf',id:'pdf', d_type:'pdf'},
    {name:'.jpg', id:'jpg', d_type:'jpg'},
    {name:'youtube', id:'url', d_type:'url'}
    ];
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
                label=""
                options={topic}
                value={value}
                placeholder="Select a game"
                onChange={handleChange}
                />
            </div>
             <div className="custom-dropdown">
             {
             data_type.map((option) => (
                <label key={option.d_type}>
                <input
                    type="radio"
                    value={option.d_type}
                    id={option.id}
                    checked={value === option.d_type}
                    onChange={handleChange}
                />
                {option.name}
                </label>
              ))
              }
             </div>
             <div>
                <Link to="/path-to-another-page">
                    <button className="rect-btn">Next
                    </button>
                </Link>
             </div>
        </body>
      </header>
    </div>
  );
}
const handleButtonClick = () => {

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