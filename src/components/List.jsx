import React, { useEffect, useState } from 'react';

export default function List(props) {
  const { onDetails } = props;
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="list">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            className="person"
            id={user.id}
            onClick={() => onDetails(user)}
          >
            {user.name}
          </div>
        ))
      )}
    </div>
  );
}
