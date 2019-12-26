import React from "react"
import "./Support.scss"
import zahir from "../../../Asset/Support/zahir.png"

const Support = () => {
    return(
        <div className="row">
            <div className="col-md-12 text-center h1-support">
                <h1>Supported By</h1>
            </div>
            <div className="col-md-12 support-col mt-5">
            <div className="col-md-12 ">
                <div className="row">
                    <div className="col-md-4">
                    <div className="card">
                        <img src="https://kauny.com/dev/askarkauny/wp-content/uploads/2018/05/logoKauny.png" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                        <img src={zahir} alt=""/>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                        <img src="" alt=""/>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                    <div className="card">
                        <img src="" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                        <img src="" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                        <img src="" alt=""/>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                    <div className="card">
                        <img src="" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                        <img src="" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                        <img src="" alt=""/>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Support ;