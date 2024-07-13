import { useParams } from "react-router-dom";

const PersonDetails = () => {
  const { id } = useParams();
  return (
    <div>
      PersonDetails
      <h1>{id}</h1>
    </div>
  );
};

export default PersonDetails;
