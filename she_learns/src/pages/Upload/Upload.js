import './Upload.css';

function Upload() {
  return (
    <div className="Upload">
      <header className="Upload-header">
        <img src= 'sheCodes_logo.png' className="Upload-logo" alt="logo" />
        <p>Upload Page</p>
        <p>
          Edit <code>src/UploadPage/Upload.js</code> and save to reload.
        </p>
        <a
          className="Upload-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Upload;