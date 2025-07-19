import { useParams } from "react-router";
import fetchComponentById from "../utility/fetchComponentById";

const Challenge = () => {
  const { id } = useParams<{ id: string }>();

  const Component = fetchComponentById(id);

  return <div className="text-white">{Component}</div>;
};

export default Challenge;
