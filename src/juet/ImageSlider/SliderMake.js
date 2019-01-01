import React, { Component } from 'react';
import ImageWrapper from './ImageWrapper';


class MakeImageSlider extends Component
{
  constructor()
  {
      super();
      this.state = {
          data:[],
          quantityToDisplay:3
      }
  }
  componentDidMount()
  {
      this.setState(()=>{
          return {
              data:[{id:'juetSlider0Data1',index:1,image:'',title:''},
              {id:'juetSlider0Data2',index:2,image:'',title:''}   
            ]
          }
      })
  }
 render()
 {
    
     return (
         <div>
             <ImageWrapper data={this.state.data} quantityToDisplay={this.state.quantityToDisplay} /> 
         </div>
     )
 }
}

export default MakeImageSlider;