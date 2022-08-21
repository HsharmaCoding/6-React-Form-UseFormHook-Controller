import React from "react";
import { Controller } from "react-hook-form"

interface IProps{
    name:string;
    id:string;
    label:string;
    control?:any;
    [key: string]: any;  
}

export const CheckBox=(props:IProps)=>{

    const convertToDefEventPara = (name:string, value:boolean) => ({
        target: {
            name, value
        }
    })


    const {name,id,label,control,...rest}=props;

    return(
        <>
            <Controller
                control={control}
                name={name}
                render={({field})=>(
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        name={name}
                                        id={id}
                                        type="checkbox"
                                        onChange={(e) => field.onChange(convertToDefEventPara(props.name,e.target.checked))}
                                        {...rest}
                                    />
                                </td>
                            </tr>
                        </tbody>               
                    </table>
                )}
            />
        </>
    )
}