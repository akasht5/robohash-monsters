import React from 'react'
import './searchbox.styles.css'

export const Searchbox = ({placeholder,onChange}) => {
    return (
        <div className="searchbox">
            <input type="search" name="search" id="searchbox" placeholder={placeholder} onChange={onChange} /><br/><br/>
        </div>
    )
}
