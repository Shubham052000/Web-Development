import { useNavigate } from "react-router";

const challenges = [
  {
    id: 1001,
    title: "Sliding Image Carousel",
  },
  {
    id: 1002,
    title: "Modal with Backdrop",
  },
  {
    id: 1003,
    title: "Accordion component",
  },
  {
    id: 1004,
    title: "Tabs component",
  },
  {
    id: 1005,
    title: "Toast Notifications",
  },
  {
    id: 2001,
    title: "Custom Hook for fetching data",
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
