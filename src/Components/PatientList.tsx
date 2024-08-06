import { usePatientStore } from "../store"

const PatientList = () => {

    const patients = usePatientStore(state => state.patients)
    console.log(patients)
    
    return (
        <div>
            patientList
        </div>
    )
}

export default PatientList
