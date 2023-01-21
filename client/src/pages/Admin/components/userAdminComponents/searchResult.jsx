export const SearchResult = ({
  data,
  isInitialLoading,
  isError,
  error,
  handleSearchClick,
}) => {
  if (isInitialLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center">{error.message}</div>;
  }

  return (
    <div className="text-sm p-4">
      <ul>
        {data &&
          data.map((user) => (
            <li
              key={user.id}
              onClick={() => handleSearchClick(user.id)}
              className="my-1 hover:scale-100 hover:text-black hover:bg-primary-beige hover:cursor-pointer"
            >
              <b>Id:</b>
              {user.id} <b>Email:</b>
              {user.email}
            </li>
          ))}
      </ul>
    </div>
  );
};
