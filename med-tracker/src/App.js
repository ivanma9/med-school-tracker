import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ConditionalRoute } from '../util/route';

import NavBar from './Navbar';


export default () => (
  <>
    <ConditionalRoute exact path="/" />
    <Switch>
      <AuthRoute path="/login" component={WelcomeLogin} />
      <AuthRoute path="/signup" component={Signup} />
      <>
        <NavBar />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route
          path="/recipes"
          render={({ match: { url } }) => (
            <>
              <ProtectedRoute path={`${url}/`} component={RecipesList} exact />
              <ProtectedRoute path={`${url}/view`} component={ViewRecipe} />
              <ProtectedRoute path={`${url}/create`} component={CreateRecipe} />
              <ProtectedRoute path={`${url}/edit`} component={EditRecipe} />
              <ProtectedRoute path={`${url}/my-recipes`} component={MyRecipes} />
            </>
          )}
        />
      </>
    </Switch>
  </>
);
