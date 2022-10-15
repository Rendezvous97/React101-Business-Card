import React from "react"

export default function Info(){
    return (
        <div className="info-container">
            <div className="avatar"></div>
            <h1 className="user-name">Laura Smith</h1>
            <h4 className="user-job">Frontend Developer</h4>
            <p className="user-website">laurasmith.website</p>
            <div className="button-container">
                <button className="btn" id="email-btn">
                    <div className="btn-content-container">
                        <i className="fa-solid fa-envelope fa-sm" style={{verticalAlign: "middle", marginRight:"7px"}}></i> Email
                    </div>
                </button>
                <button className="btn" id="linkedin-btn"><i className="fa-brands fa-linkedin" style={{marginRight:"7px"}}></i> Linkedin</button>
            </div>
        </div>
    )
}