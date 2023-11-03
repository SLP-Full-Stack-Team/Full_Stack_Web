import React, { Fragment , useState} from "react";

const InputUpload = () => {
    const [upload_title, setTitle] = useState("");
    const [upload_description ,setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try{
            const body = { upload_title, upload_description};
            const response = await fetch ("http://localhost:5001/uploads", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/Main";

        }catch(err){
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className = 'text-center mt-5' > Welcome to sheLearns! </h1>
            <button className="upload-btn"
                    data-bs-toggle='modal'
                    data-bs-target='#myModal'>
                        Start a Upload
            </button>

            <div className='modal fade' id='myModal'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='myModalLabel'>Upload a Solution</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <form>
                                <div className="form-group">
                                    <label className="col-form-label">Title:</label>
                                    <input type="text" className="form-control" value={upload_title}
                                        onChange={e => setTitle(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Description:</label>
                                    <textarea className="form-control" value={upload_description}
                                        onChange={e => setDescription(e.target.value)}></textarea>
                                </div>
                                <div className="upload-media">
                                    {/* <input className="upload-input" type="file" /> */}
                                    <button className="btn btn-dark">Img</button>
                                    <button className="btn btn-dark">Video</button>
                                    <button className="btn btn-dark">Text/Doc</button>
                                </div>
                               
                            </form>   
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-success' data-bs-dismiss='modal' onClick = {e => onSubmitForm(e)}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );     
};

export default InputUpload;