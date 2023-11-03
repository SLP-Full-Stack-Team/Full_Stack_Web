import React , {Fragment, useEffect, useState} from "react";
import EditUpload from "./EditUpload";
import ReactPlayer from 'react-player';

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
            <table className="table mt-5 text-center">
                <thead> 
                    <tr>
                        <th scope="col">Posted</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Video Link</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {uploads.map(upload => (
                        <tr key={upload.upload_id}>
                            <td>{upload.upload_time}</td>
                            <td>{upload.upload_title}</td>
                            <td>{upload.upload_description}</td>
                            <td>{upload.upload_video_link && (
                                // Show preview of the video
                                <ReactPlayer url={upload.upload_video_link}/>
                                // Show hyperlink of the video link
                                // <a href={upload.upload_video_link} target="_blank" rel="noopener noreferrer">
                                //     {upload.upload_video_link}
                                // </a>
                                )}
                            </td>
                            {/* <td>{upload.upload_video_link}</td> */}
                            <td><EditUpload upload = {upload} /></td>
                            <td><button className="btn btn-danger" onClick={() => deleteUpload(upload.upload_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
    
};

export default ListUploads;