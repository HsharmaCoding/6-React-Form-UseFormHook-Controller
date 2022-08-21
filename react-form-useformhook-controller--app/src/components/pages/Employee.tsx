import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {IEmployee} from "../../interface"
import {DropDownList, Input,RadioGroup,CheckBox} from "../controls"
import { type } from "os";

const cityItems = [
    { id: 'city', name:'city', title: '--select one--',value:'--select one--'},
    { id: 'city', name:'city', title: 'Ahmedabad',value:'ahmedabad'},
    { id: 'city',name:'city', title: 'Udaipur',value:'udaipur' },
    { id: 'city',name:'city', title: 'Kota',value:'kota' },
]

const genderItems = [
    { id: 'gender', name:'gender', title: 'Male',value:'Male'},
    { id: 'gender',name:'gender', title: 'Female',value:'Female' },
    { id: 'gender',name:'gender', title: 'Other',value:'Other' },
]

export const Employee=()=>{

    const schema = yup.object().shape({
        fullName: yup
          .string()
          .required("First Name is required."),

        email: yup
          .string()
          .required("Email is invalid.")
          .email("Wrong email format."),   

        city: yup
          .string(),

        gender: yup
          .string(),

        hireDate: yup
          .string(),

        isActive: yup.bool(),
    })

    const {
            handleSubmit,
            formState:{errors},
            control
    } = useForm<IEmployee>({
        resolver: yupResolver(schema)
    })

    const submitForm = async (formData:IEmployee) => {
        console.log(formData);
    }

    const tableBorder={
        borderWidth:'3px',
        borderColor:'white',
        borderStyle:'solid'
    }

    return(
        <>
            <form onSubmit={handleSubmit(submitForm)}>

                <table style={tableBorder}>
                    <tbody>
                        <tr>
                            <td>Full Name</td>
                            <td>
                                <Input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    error={errors.fullName?.message}
                                    control={control}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Email</td>
                            <td>
                                 <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    error={errors.email?.message}
                                    control={control}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>City</td>
                            <td>
                                <DropDownList
                                    name='city'
                                    items={cityItems}
                                    control={control}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Gender</td>
                            <td>
                                <RadioGroup
                                    items={genderItems}
                                    control={control}
                                    name="gender"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Hire Date</td>
                            <td>
                                <Input
                                    name='hireDate'
                                    id='hireDate'
                                    type='date'
                                    placeholder='Hire Date'
                                    error={errors.hireDate?.message}
                                    control ={control}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Active</td>
                            <td>
                                <CheckBox
                                    name='isActive'
                                    id='isActive'
                                    label="Active"
                                    control={control}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><button type="submit">Submit</button></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )

}