import React, { Fragment , useState } from 'react';

const EditUpload = ({upload}) => {
    const [upload_title, setTitle] = useState(upload.upload_title)
    const [upload_description, setDescription] = useState(upload.upload_description);
     
    //edit description function
    const updateDescription = async() => {
        try{
            const body = { upload_title, upload_description };
            const response = await fetch(`http://localhost:5001/uploads/${upload.upload_id}`, {
                method: "PUT",
                headers: {"COntent-Type": "application/json"},
                body: JSON.stringify(body)
            });
            // this makes it show the change in the website
            window.location = "/Main";
        }catch(err){
            console.error(err.message);
        }
    }
    return (
        <Fragment>
       
            <button type="button" 
                    className="btn btn-warning" 
                    data-bs-toggle="modal" 
                    data-bs-target={`#id${upload.upload_id}`}>
                Edit
            </button>
            {/* 
                id = id10
            */}
            <div className="modal fade" id={`id${upload.upload_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="text" 
                                   className="form-control"
                                   value={upload_title}
                                   onChange={e => setTitle(e.target.value)}/> 
                            <input type="text" 
                                   className="form-control"
                                   value={upload_description}
                                   onChange={e => setDescription(e.target.value)}/> 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick = {e => updateDescription(e)}>Save Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditUpload; 