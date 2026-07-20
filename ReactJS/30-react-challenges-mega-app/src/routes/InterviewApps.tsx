import { useNavigate } from "react-router";

const InterviewApps = () => {
  const navigate = useNavigate();
  const arrPDFTitles = [
    {
      id: 1,
      value: "Senior Exp Engineer React",
      path: "senior-exp-engineer-react-challenges",
    },
  ];
  return (
    <ul className="p-5">
      {arrPDFTitles.map(({ id, value, path }) => (
        <li
          key={id}
          className="px-4 py-2 border border-amber-50 rounded-md mb-2 cursor-pointer"
          onClick={() => navigate("/" + path)}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default InterviewApps;
