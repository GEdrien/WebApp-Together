import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import RegistrationForm from './components/profile/registration-form';
import UpdateUserForm from './components/profile/update-user-form';
import ChangePasswordForm from './components/password/change-password-form';
import Profile from './components/profile/profile-page-form';
import { HomePage } from './components/home/home-page';
import Layout from './components/logo/layout';
import { SortingHatPage } from './components/sorting-hat/sorting-hat-page';
import { HouseProvider } from './components/context/house-provider';

const App: React.FC = () => (
  <ChakraProvider>
    <HouseProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update" element={<UpdateUserForm />} />
            <Route path="/change-password" element={<ChangePasswordForm />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/sortinghat" element={<SortingHatPage />} />
          </Route>
        </Routes>
      </Router>
    </HouseProvider>
  </ChakraProvider>
);

//   <Route path="/login" element={<LoginForm />} />

export default App;
