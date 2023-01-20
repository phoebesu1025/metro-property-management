import React from 'react'

const EmailPhone = ({ detail }) => {
    return (
        <div className="flex flex-col text-[0.6rem] font-semibold text-end text-buttonGrey">
            <div className="font-bold text-black">{`${detail.successfulClient} Successful Clients`}</div>
            <div>{detail.email}</div>
            <div>{detail.phone}</div>
        </div>
    )
}

export default EmailPhone