import { React, useState } from 'react'
import AddCoApplicantBtn from './AddCoApplicantBtn'
import CoApplicants from './CoApplicants'
import CoApplicants1 from './CoApplicants1'
import OtherNonTenant from './OtherNonTenant'
import AddOtherNon from './AddOtherNon'
import NameInput from './NameInput'
const All2 = () => {
    const [addList, setAddList] = useState([]);
    const [addList2, setAddList2] = useState([])

    const onAddBtnClick = event => {
        setAddList(addList.concat(<CoApplicants1 />));
    };
    const onAddBtnClick2 = event => {
        setAddList2(addList2.concat(<NameInput />));
    };
    return (
        <div>
            <CoApplicants />
            <div className="hidden"><CoApplicants1 /></div>
            <div>{addList}</div>
            <div className='w-fit' onClick={onAddBtnClick}><AddCoApplicantBtn /></div>








            <OtherNonTenant />
            <div className="hidden"><NameInput /></div>
            <div>{addList2}</div>
            <div className='w-fit' onClick={onAddBtnClick2}><AddOtherNon /></div>

        </div >
    )
}

export default All2