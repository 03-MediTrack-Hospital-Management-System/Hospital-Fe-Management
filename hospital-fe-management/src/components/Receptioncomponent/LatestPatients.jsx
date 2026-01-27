export default function LatestPatients() {
  const patients = [
    { id: 1, name: "Jane Cooper", age: 60, country: "USA", gender: "Female" },
    { id: 2, name: "Esther Howard", age: 24, country: "Indonesia", gender: "Female" },
    { id: 3, name: "Robert Fox", age: 45, country: "UK", gender: "Male" },
    { id: 4, name: "Jenny Wilson", age: 30, country: "Canada", gender: "Female" },
    { id: 5, name: "Michael Brown", age: 52, country: "Australia", gender: "Male" },
  ];

  return (
    <div className="latest-patient-data">
      <h3>Latest Patient Data</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.country}</td>
              <td>{patient.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
