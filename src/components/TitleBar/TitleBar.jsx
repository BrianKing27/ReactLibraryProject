import React from 'react';
import './TitleBar.css'

function TitleBar(props){
    return(
        <div className="row row-space col-align">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="TitleBar-nav">
                    <h1>React Library learning Project</h1>
                </div>
            </div>                       
        </div>
    )
}

export default TitleBar;