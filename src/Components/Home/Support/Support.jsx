import React from "react"
import "./Support.scss"
import zahir from "../../../Asset/Support/zahir.png"

const Support = () => {
    return(
        <div className="row">
            <div className="col-md-12 text-center h1-support">
                <h1>Supported By</h1>
            </div>
            <div className="col-md-12 support-col mt-5 ">
            <div className="col-md-12 d-flex justify-content-center ">
                <div className="row">
                    <div className="col-md-3">
                    <div className="card">
                        <img src="https://kauny.com/dev/askarkauny/wp-content/uploads/2018/05/logoKauny.png" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                        <img src={zahir} alt=""/>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                        <img src="https://pondokit.com/img/brand/qwords.png" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                        <img src="https://pondokit.com/img/brand/comtelindo.png" alt=""/>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
                <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src="https://pondokit.com/img/brand/tiket.png" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                        <img src="https://pondokit.com/img/brand/sublime.png" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                        <img src="https://pondokit.com/img/brand/arfa.png" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                        <img src="https://pondokit.com/img/brand/idcloudhost.png" alt=""/>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
                <div className="row">
                <div className="col-md-3">
                    <div className="card d-flex">
                        <img src="https://pondokit.com/img/brand/antmediahost.png" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                        <img src="https://pondokit.com/img/brand/flazhost.png" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                        <img src="https://pondokit.com/img/brand/mangrove.png" alt=""/>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                        <img src="https://pondokit.com/img/brand/mtt.png" alt=""/>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Support ;