import React from "react";
import { Controller } from "react-hook-form"

interface IProps{
    name:string
    control?:any;
    items:any;
    [key: string]: any;  
}
export const RadioGroup=(props:IProps)=>{

    const {name,control,...rest}=props;

    return(
        <>
             <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <div>
                        {
                            props.items.map((item:any)=>(
                                <tr key={item.value}>
                                    <td>
                                        <input
                                            type="radio"
                                            value={item.value}
                                            name={item.name}
                                            id={item.id}
                                            onChange={(e) => field.onChange(e.target.value)}
                                        />
                                    </td>
                                    <td>{item.title}</td>
                                </tr>

                            ))
                        }
                     </div>
                )}
            />
        </>
    )
}