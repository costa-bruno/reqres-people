import React, {useState, useEffect} from 'react';

import './home.scss';
import Card from '../../components/card';
import Loading from '../../components/loading/';

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(response => {
        setIsLoading(false);
        setUsers(response.data)
      })
  }, [])

  return (
    <div id="Home">
      <div className="container">
        {isLoading ? <Loading /> : (
          users.map((user) => {
            return (
              <Card
                key={user.id}
                avatar={user.avatar}
                firstName={user.first_name}
                lastName={user.last_name}
                email={user.email}
              />
            )
          })
        )}
      </div>      
    </div>
  )
}

export default Home;
