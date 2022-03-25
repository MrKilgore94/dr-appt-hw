import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";

const Appointments = () => {
  const { response: docResponse, loading: docLoading } =
    useAxiosOnMount("/api/doctors");
  const { response: patientsResponse, loading: patientsLoading } =
    useAxiosOnMount("/api/patients");
  const { response: apptsResponse, loading: apptsLoading } =
    useAxiosOnMount("/api/appointments");

  const normalizedData = () => {
    return apptsResponse.data.map((appt) => {
      let doctor = docResponse.data.find((doc) => doc.id === appt.doctor_id);
      let patient = patientsResponse.data.find(
        (pat) => pat.id === appt.patient_id
      );
      return {
        id: appt.id,
        date: appt.date,
        doctor: doctor.name,
        patient: patient.name,
      };
    });
  };

  const renderAppointments = (appointments) => {
    return appointments.map((a) => {
      return (
        <div key={a.id}>
          <h1>Doctor: {a.doctor}</h1>
          <h1>Patient: {a.patient}</h1>
          <p>date: {a.date}</p>
        </div>
      );
    });
  };

  const renderData = () => {
    if (docLoading || patientsLoading || apptsLoading) {
      return <p>loading</p>;
    }

    let appts = normalizedData();
    return renderAppointments(appts);
  };
  return (
    <div>
      <h1>Appointments</h1>
      {renderData()}
    </div>
  );
};

export default Appointments;
