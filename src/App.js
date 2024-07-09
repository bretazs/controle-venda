import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [transactionsList, setTransactionsList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (currentUser) {
      const userTransactions = JSON.parse(localStorage.getItem(`transactions_${currentUser}`)) || [];
      setTransactionsList(userTransactions);
    }
  }, [currentUser]);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const predefinedUser = { email: 'pgbretas@gmail.com', password: 'Bretas12@', profileData: {} };

    const userExists = users.some(user => user.email === predefinedUser.email);
    if (!userExists) {
      users.push(predefinedUser);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, []);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem(`transactions_${currentUser}`, JSON.stringify(newArrayTransactions));
  };

  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(email);
      localStorage.setItem('user_token', JSON.stringify({ email, token: 'sd8lmyp1k' }));
    } else {
      alert('Invalid credentials');
    }
  };

  const handleShowRegister = () => {
    setIsRegistering(true);
  };

  const handleShowLogin = () => {
    setIsRegistering(false);
  };

  const handleRegister = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ email, password, profileData: {} });
    localStorage.setItem('users', JSON.stringify(users));
    setIsRegistering(false);
    handleLogin(email, password);
  };

  const updateUserProfileData = (email, newData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(user => {
      if (user.email === email) {
        return { ...user, profileData: newData };
      }
      return user;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <>
      <GlobalStyle />
      {!isLoggedIn ? (
        isRegistering ? (
          <Register onRegister={handleRegister} onShowLogin={handleShowLogin} />
        ) : (
          <Login onLogin={handleLogin} onShowRegister={handleShowRegister} />
        )
      ) : (
        <>
          <Header />
          <Resume income={income} expense={expense} total={total} />
          <Form
            handleAdd={handleAdd}
            transactionsList={transactionsList}
            setTransactionsList={setTransactionsList}
          />
          <button onClick={() => updateUserProfileData(currentUser, { key: 'value' })}></button>
        </>
      )}
    </>
  );
};

export default App;
