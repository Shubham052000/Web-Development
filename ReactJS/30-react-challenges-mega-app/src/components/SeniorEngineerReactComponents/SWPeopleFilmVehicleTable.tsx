import { useEffect, useState } from "react";

type RowData = {
  name: string;
  vehicles: string;
  films: string;
};

const SWPeopleFilmVehicleTable = () => {
  const [page, setPage] = useState(1);
  const [rowData, setRowData] = useState<RowData[]>([]);
  const [loading, setLoading] = useState(false);

  const handlePageChange = () => {
    setPage((prevPage) => prevPage + 1);
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
                  const resp = await fetch(film);
                  const data = await resp.json();
                  return data.title;
                }),
              );

              const vehicles = await Promise.all(
                result.vehicles.map(async (vehicle: string) => {
                  const resp = await fetch(vehicle);
                  const data = await resp.json();
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
        <span>Current page: {page}</span>
        <button
          className="bg-black text-white rounded-full px-2 py-1 mx-5 cursor-pointer"
          onClick={handlePageChange}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default SWPeopleFilmVehicleTable;
