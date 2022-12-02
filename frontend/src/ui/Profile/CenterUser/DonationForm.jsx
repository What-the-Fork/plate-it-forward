import React, {useState} from 'react'

export function DonationForm() {
    const [inputFields, setInputFields] = useState([
        {served: '', date: '' }
    ])
    return (
        <Form>
            {inputFields.map((input, index) => {
                return (
                    <div key={index}>
                        <input
                            name='served'
                            placeholder='Served'
                            />
                        <input
                            name='date'
                            placeholder='Date'
                            />
                    </div>
                )
            })}
        </Form>
    );
}