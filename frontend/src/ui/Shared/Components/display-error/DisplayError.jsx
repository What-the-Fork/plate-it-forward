import React from 'react'

export function DisplayError (props) {
    const { errors, touched, field } = props

    if (errors[field] && touched[field]) {

        return (
            <>
                <div>
                    <output>
                        {errors[field]}
                    </output>
                </div>
            </>
        )
    }
}