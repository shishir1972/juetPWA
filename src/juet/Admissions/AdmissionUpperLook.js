import React, { Component } from 'react'

export default class AdmissionUpperLook extends Component {
  constructor(props)
  {
      super(props)
  }
    render() {
    return (
        <div className="Admission__Upper">
            <div className="container">
                    <label className="Admission__Title">
                            <h1>{this.props.UpperTitle}</h1>
                     </label>
            </div>
        </div>
    )
  }
}
