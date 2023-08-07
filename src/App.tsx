import React, { useState, useCallback } from 'react';
import { LoginSocialFacebook, IResolveParams } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

const App = () => {

  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState<any>();

  return (
    <div>
      <h1 className="title">ReactJS Social Login</h1>
      <LoginSocialFacebook
        appId="673209894836374"
        fieldsProfile='id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
        redirect_uri='https://www.w3schools.com/'
        onLoginStart={() => { console.log('login started'); }}
        onLogoutSuccess={() => { setProfile(null); setProvider(''); }}
        onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider);
            setProfile(data);
        }}
        onReject={err => {
          console.log(err);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
};

export default App;
