import { createContext, useState, useEffect } from "react"

const FormContext = createContext({})



export const FormProvider = ({ children }) => {
    const title = {
        0: 'Your Details',
        1: 'Co-Applicants',
        2: 'Current Landlord Reference',
        3: 'Review Your Details'
    }

    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        PersonalDetailsFName: "",
        PersonalDetailsLName: "",
        PersonalDetailsPName: "",
        PersonalDetailsEmail: "",
        PersonalDetailsPhone: "",
        PersonalDetailPronouns: "",
        PersonalDetails18: "",
        PersonalDetailsSmoke: "",
        PersonalDetailPOD: "",
        PersonalDetailPets: "",
        PersonalDetailsUtilities: "",
        CoApplicantsNumber: "",
        CoApplicantsSmoke: "",
        CoApplicantsFName: "",
        CoApplicantsLName: "",
        CoApplicantsPName: "",
        CoApplicantsEmail: "",
        CoApplicantsPhone: "",
        CoApplicantsPronouns: "",
        CoApplicantsNonTenants: "",
        ReferenceAddress: "",
        ReferenceNZ: "",
        ReferenceName: "",
        ReferencePhone: "",
        ReferenceEmail: "",
        ReferenceNoLandlord: false,
        ReferencePName: "",
        ReferencePPhone: "",
        ReferencePEmail: "",
        ReferenceOtherName: "",
        ReferenceOtherPhone: "",
        ReferenceOtherEmail: "",
        ReferenceOtherRelationship: "",

    })




    return (
        <FormContext.Provider value={{ title, page, setPage, data, setData }}>
            {children}


        </FormContext.Provider>
    )
}
export default FormContext;