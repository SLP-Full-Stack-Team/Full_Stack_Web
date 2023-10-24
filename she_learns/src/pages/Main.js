import React, { Fragment } from "react";

//components
import InputUpload from "../components/InputUpload";
import ListUploads from "../components/ListUploads";

const Main = () => {
    return(
        <Fragment>
            <div className='main-container'>
                <InputUpload />
                <ListUploads />
            </div>
        </Fragment>
    )

}

export default Main;
