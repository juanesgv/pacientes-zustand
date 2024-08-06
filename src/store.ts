import { create } from "zustand"
import { DraftPatient, Patient } from "./interfaces"
import { v4 as uuidv4} from 'uuid'

interface PatientState  {
    patients : Patient[]
    addPatient : (data : DraftPatient ) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
    return {
        ...patient,
        id: uuidv4()
    }
}

export const usePatientStore = create<PatientState>((set, get) => ({
    patients : [],
    addPatient: (data) => {
        const newPatient = createPatient(data)
        set ((state) =>({
            patients: [
                ...state.patients,  
                newPatient
            ]
        }))
    }
}))