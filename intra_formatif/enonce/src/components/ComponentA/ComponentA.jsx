import { Children } from "react";

export default function ComponentA({Children}){
return(
    <>
        <div className="comp-a" style={{border: '1px solid red', padding: '10px'}}>
        <h2>Service Global Alpha</h2>
    {Children.map(Children,child =>
        <div className="child"> 
{child}
        </div>
    )}
      </div>
    </>
)
}