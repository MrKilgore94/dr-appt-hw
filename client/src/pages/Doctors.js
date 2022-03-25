import { useState, useEffect } from "react";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import List from "../components/List";

const Doctors = () => {
  const { response, loading, error } = useAxiosOnMount("/api/doctors");

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (response) {
      setDoctors(response.data);
    }
  }, [response]);

  const addDoctor = () => {
    setDoctors([...doctors, { id: 4, name: "DR JON" }]);
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return (
    <div>

      <List
        header={"header"}
        data={doctors}
        renderItem={(d) => {
          return (
            <div key={d.id}>
              <p>{d.name}</p>
            </div>
          );
        }}
      />
      <p onClick={addDoctor}>add</p>
    </div>
  );
};

export default Doctors;
