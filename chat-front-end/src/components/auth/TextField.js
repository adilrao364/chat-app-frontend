import React from 'react'
import { useField, ErrorMessage } from "formik"
import "./style/auth.css"

function TextField({ label,placeholder, ...props }) {
    const [field, meta] = useField(props)
    return (
        <>
            <div className="col-md-12 mb-3">
                <label htmlFor={field.name} className="form-label">{label}</label>
                <input className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
                    id={field.name}
                    {...field} {...props}
                    placeholder={placeholder}
                    autoComplete="off"
                />
                    <ErrorMessage component="div" name={field.name} className="error"/>
            </div>
        </>
    )
}

export default TextField
