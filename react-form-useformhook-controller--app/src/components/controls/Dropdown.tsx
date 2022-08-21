import React from "react";
import { Controller } from "react-hook-form"

interface IProps{
    name:string;
    control?:any;
    items:any;
    [key: string]: any;  
}
export const DropDownList=(props:IProps)=>{

    const {name,control}=props;

    return(
        <>
             <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <div>
                        <select name={name} id={name} onChange={(e) => field.onChange(e.target.value)}>
                        {
                            props.items.map((item:any)=>(
                                <option key={item.value} value={item.value}>{item.title}</option>
                            ))
                        }
                        </select>
                     </div>
                )}
            />
        </>
    )
}