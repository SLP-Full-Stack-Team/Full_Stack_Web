import React , {Fragment, useEffect, useState} from "react";
import EditUpload from "./EditUpload";
import ReactPlayer from 'react-player';
import './ListUploads.css'

const ListUploads = () => {
    const [uploads, setUploads] = useState([]);
    const [videoLink, setVideoLink] = useState(null);
    // delete upload function
    const deleteUpload = async id => {
        try{
            const deleteUpload = await  fetch (`http://localhost:5001/uploads/${id}`, {
                method: "DELETE"
            });
            setUploads(uploads.filter(upload => upload.upload_id !== id));

        }catch(err){
            console.error(err.message);
        }
    }

    const getUploads = async () => {
        try{
            const response = await fetch("http://localhost:5001/uploads");
            const jsonData = await response.json();
            setUploads(jsonData);
        }catch(err){
            console.error(err.message);
        }
    };
     
    useEffect(() => {
        getUploads();
    }, []);

    console.log(uploads);

    return (
        <Fragment>
            {" "}
            <div className="list-uploads">
                {uploads.map(upload=>(
                    <p className="upload" key = {upload.upload_id}>
                        <div className="list-uploads-container">
                            <div className="container">
                                <div className="user-info">
                                    <i className="bi bi-person-circle" id = "user-icon"></i>
                                    <ul className = "user-entry">
                                        <li id="name">Jane Cooper</li>
                                        <li>Posted {new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).format(new Date(upload.upload_time))}</li>
                                    </ul>
                                </div>
                                <div className="button-div">
                                        <EditUpload id='btn' upload = {upload} />
                                        <button id='btn' className="btn btn-danger" onClick={() => deleteUpload(upload.upload_id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className="upload-info-container">
                                <ul className = "video-entry">
                                    <li id="name">{upload.upload_title}</li>
                                    <li>{upload.upload_description}</li>
                                    <li id="media">{upload.upload_video_link && (
                                        // Show preview of the video
                                        <ReactPlayer width='97%' url={upload.upload_video_link}/>
                                        // Show hyperlink of the video link
                                        // <a href={upload.upload_video_link} target="_blank" rel="noopener noreferrer">
                                        //     {upload.upload_video_link}
                                        // </a>
                                    )}</li>
                                </ul>
                            </div>
                    </p>
                ))}
            </div>
        </Fragment>
    );
    
};

export default ListUploads;