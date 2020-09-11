import React from 'react';

const Content = ({tableContent}) => {
    
    
    return (
            <div className ="container">
            <div className="body">
            <div className="table-content">
            <div className="table-rows">  
                   
                    { tableContent.map((content) => 
                   
                    <div className= "table-colums"> 
                        <img className= "table-img"src ={content.img} alt='content-img'></img> 
                     
                        <h2 className= "medium-font">{content.title}</h2>
                       
                        <p className ="smoll-font">{content.text}</p>             
                    </div>
                   
                )}
            
               </div>
                
               </div>
               
            </div>
            </div>

   
    )
}

export default Content;