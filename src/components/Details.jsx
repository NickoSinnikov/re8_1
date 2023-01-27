import React, { useEffect, useState } from 'react';

export default function Details(props) {
  const { info } = props;
  const [details, setDetails] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (info) {
      setLoading(true);
      fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
      )
        .then((response) => response.json())
        .then((data) => {
          setDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [info]);

  return (
    <div className="person__details">
      {isLoading ? <div className="loading">Loading...</div> : null}
      {details ? (
        <>
          <img className="person__photo" src={details.avatar} alt="avatar" />
          <div className="person__name">{details.name}</div>
          <div className="person__city Det">City: {details.details.city}</div>
          <div className="person__company Det">
            Company: {details.details.company}
          </div>
          <div className="person__position Det">
            Position: {details.details.position}
          </div>
        </>
      ) : null}
    </div>
  );
}
