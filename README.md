# ms-hospital-service
Hospital service API provides implementation to perform CRUD operations on doctor, patient, report entities for a hospital checkup management

# use
This application can be used for a doctor to store and reterive patient status and able to get all the reports of a patient

# used collections
* Doctors - to create and provide login for a doctor
* Patients - to create a patient
* Reports - to create a patient report with required informations like checked doctor and status of the patient

# implementations involved
* Register doctor with required inputs
* Login doctor by generating jwt tokens for doctor
* Register patient with requried inputs
* Create report for a patient with attended doctors information and status of the patient after checkup
* Get all reports of a particular patient
* Get all reports of all patients with same status