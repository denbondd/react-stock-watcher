import React from 'react'
import './MoreInfo.css'

function MoreInfo(props) {
    return (
        <div className='background' onClick={() => props.changeShowMoreInfoState()}>
            <div className='content'>

            </div>
        </div>
    )
}

function setData() {
    
}

export default MoreInfo
