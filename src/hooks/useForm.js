import { useState } from 'react';

const useForm = (initialUser, callback) => {

  const [user, setUser] = useState(initialUser);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback();
  };

  const handleChange = (event) => {
    event.persist();
    setUser(user => ({ ...user, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    user,
  }
};

export default useForm;