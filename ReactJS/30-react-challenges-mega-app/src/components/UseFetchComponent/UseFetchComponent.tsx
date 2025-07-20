import useFetch from "../../hooks/useFetch";

const UseFetchComponent = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <ul>
        {data && data.map((user: any) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
};

export default UseFetchComponent;
