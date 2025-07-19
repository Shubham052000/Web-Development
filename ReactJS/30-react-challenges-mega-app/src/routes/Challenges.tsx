import { useNavigate } from "react-router";

const challenges = [
  {
    id: 1001,
    title: "Image Carousel",
  },
];

const Challenges = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <ul className="text-amber-50">
        {challenges.map(({ id, title }) => {
          return (
            <li
              key={id}
              className="px-4 py-2 border border-amber-50 rounded-md mb-2 cursor-pointer"
              onClick={() => navigate(`/challenges/${id}`)}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Challenges;
