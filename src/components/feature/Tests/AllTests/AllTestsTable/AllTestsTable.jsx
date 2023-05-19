import "./AllTestsTable.scss";

const AllTestsTable = ({ exams }) => {
  return (
    <table className="tests-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Max Points</th>
          <th>Duration</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {exams.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.total_points}</td>
            <td>{item.total_duration}</td>
            <td>{`${item.price.amount}KZT`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllTestsTable;
