import './Upload.css';
import * as React from 'react';

function Upload() {
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
                <select>
                    <option value="Sorted_Array_01">Sorted Array</option>
                    <option value="Sorted_Array_02">Sorted Array2</option>
                    <option value="Binary_Trees">Binary Trees</option>
                </select>
            </div>
        </body>
      </header>
    </div>
  );
}

export default Upload;