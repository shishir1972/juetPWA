import React from 'react'

export default class AdmissionInfoLook extends React.Component
{
    constructor(props)
    {
        super(props)

    }
    render()
    {
        return (
            <div className="Admission__InfoWindow">
              <h1>{this.props.MainTitle}</h1>
              <div className="line"></div>
                <div className="Admission__Content">
                 {this.props.children}
                </div>
            </div>
        )
    }
}