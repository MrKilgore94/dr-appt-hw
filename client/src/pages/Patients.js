import { useState, useEffect } from "react";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import List from "../components/List";

const Patients = () => {
    const { response, loading, error } = useAxiosOnMount("/api/patients");
  
    const [patients, setpatients] = useState([]);
  
    useEffect(() => {
      if (response) {
        setpatients(response.data);
      }
    }, [response]);
  
    const addPatient = () => {
        setpatients([...patients]);
    };
  
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;
    return (
      <div>
  
        <List
          header={"header"}
          data={patients}
          renderItem={(p) => {
            return (
              <div key={p.id}>
                <p>{p.name}</p>
              </div>
            );
          }}
        />
        <p onClick={addPatient}>add</p>
      </div>
    );
  };

export default Patients;
