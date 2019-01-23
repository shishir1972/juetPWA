import React from 'react'
import Ionicon from 'react-ionicons'

export const LoadingView = (props) => {
    return (
        <div style={{position:'relative',background:'transparent',top:'0',height:'30vh',padding:'1em',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Ionicon icon="ios-sync" fontSize="100px" color="#00355f" rotate={true} />
        </div>
    )
}