import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import RecipesList from './components/RecipesList';

function App() {
  return (
    <div className="App">
      <UserForm />
      <RecipesList />
    </div>
  );
}

export default App;
