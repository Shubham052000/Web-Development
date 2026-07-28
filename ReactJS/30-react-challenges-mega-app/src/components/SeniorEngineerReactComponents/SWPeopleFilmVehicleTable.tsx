import { useEffect, useRef, useState } from "react";

type RowData = {
  name: string;
  vehicles: string;
  films: string;
};

const SWPeopleFilmVehicleTable = () => {
  const [page, setPage] = useState(1);
  const [rowData, setRowData] = useState<RowData[]>([]);
  const [loading, setLoading] = useState(false);
  const cacheRef = useRef(new Map());

  const fetchWithCache = async (url: string) => {
    if (cacheRef.current.has(url)) {
      return cacheRef.current.get(url);
    }
    const resp = await fetch(url);
    const data = await resp.json();
    cacheRef.current.set(url, data);
    return data;
  };

  const handlePageChange = (action: "inc" | "dec") => {
    if (action === "inc") setPage((prevPage) => prevPage + 1);
    else setPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    const fetchPeople = async () => {
      setLoading(true);
      try {
        const resp = await fetch(
          "https://swapi.py4e.com/api/people/?page=" + page,
        );
        if (!resp.ok) {
          throw new Error("Failed to fetch people");
        }

        const { results } = await resp.json();

        const people = await Promise.all(
          results.map(
            async (result: {
              films: string[];
              vehicles: string[];
              name: string;
            }) => {
              const films = await Promise.all(
                result.films.map(async (film: string) => {
                  const data = await fetchWithCache(film);
                  return data.title;
                }),
              );

              const vehicles = await Promise.all(
                result.vehicles.map(async (vehicle: string) => {
                  const data = await fetchWithCache(vehicle);
                  return data.name;
                }),
              );

              return {
                name: result.name,
                films: films.join(", "),
                vehicles: vehicles.join(", "),
              };
            },
          ),
        );
        console.log(people);
        setRowData(people);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, [page]);
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        rowData &&
        rowData.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Films</th>
                <th>Vehicles</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map((row, index) => (
                <tr key={index}>
                  <th>{row.name}</th>
                  <th>
                    {row.films.trim() === "" ? "No data available" : row.films}
                  </th>
                  <th>
                    {row.vehicles.trim() === ""
                      ? "No data available"
                      : row.vehicles}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
      <div>
        <button
          className={`bg-black text-white rounded-full px-2 py-1 mx-5 ${
            page === 1 ? "bg-gray-700 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => handlePageChange("dec")}
          disabled={page === 1}
        >
          Prev Page
        </button>
        <span>Current page: {page}</span>
        <button
          className="bg-black text-white rounded-full px-2 py-1 mx-5 cursor-pointer"
          onClick={() => handlePageChange("inc")}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default SWPeopleFilmVehicleTable;
