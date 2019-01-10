import React from 'react';
import Head from 'next/head';

class HeadTop extends React.PureComponent{
    constructor(props)
    {
        super(props);
        this.state={
            title:''
        }
    }
    
    componentWillMount()
    {
        this.setState({title:this.props.TitleName});
    }
    render()
   {
      
        return (
            <div>
            <Head>
            <title>{this.state.title}</title>
            <link rel="icon" href="/static/favicon.ico"/>
            <meta name="theme-color" content="#003A68"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>    
            </div>
        )
       }
       
}
export default HeadTop;

