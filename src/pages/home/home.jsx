import React, {useState, useEffect} from 'react';

import './home.scss';
import Card from '../../components/card';
import Loading from '../../components/loading/';
import Modal from '../../components/modal';

const Home = () => {

  const [pageLoading, setPageLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const usersError = "Não foi possível buscar a lista de usuários. :( Tente novamente mais tarde."
  const userError = "Não foi possível buscar os dados do usuário selecionado. :( Tente novamente mais tarde."

  
  useEffect(() => {

    getUsers();
  }, [])


  const getUsers = () => {

    fetch("https://reqres.in/api/users")
      .then(response => response.json())
      .then(response => {
        setPageLoading(false);
        setUsers(response.data);
      })
      .catch(error => setError(usersError));
  }


  const getUser = (id) => {

    fetch(`https://reqres.in/api/users/${id}`)
      .then(response => response.json())
      .then(response => {
        setModalLoading(false);        
        setUser(response.data);
      })
      .catch(error => setError(userError));
  }


  const toggleModal = (id) => {

    setUser({});
    setShowModal(!showModal);
    getUser(id);
    !showModal && setModalLoading(true);
  }


  return (
    <div id="Home">
      <div className="container">

        {pageLoading ? <Loading /> : (
          users.map((user) => {
            return (
              <Card
                key={user.id}
                avatar={user.avatar}
                firstName={user.first_name}
                action={() => toggleModal(user.id)}
              />
            )
          })
        )}

        {error && <p>{error}</p>}

        {showModal && 
                
          <Modal 
            action={() => setShowModal(false)} 
            modalLoading={modalLoading}
            errorMessage={error}
            user={user}
          />
        }

      </div>      
    </div>
  )
}

export default Home;
