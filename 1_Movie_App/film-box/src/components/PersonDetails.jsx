import { useParams } from "react-router-dom";

const PersonDetails = () => {
  const { id } = useParams();
  return <div>PersonDetails {id}</div>;
};

export default PersonDetails;
