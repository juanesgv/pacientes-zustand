import { create } from "zustand"
import { DraftPatient, Patient } from "./interfaces"

interface PatientState  {
    patients : Patient[]
    addPatient : (data : DraftPatient ) => void
}

export const usePatientStore = create<PatientState>(() => ({
    patients : [],
    addPatient: (data) => {
        console.log(data)
    }
}))