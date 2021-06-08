import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import awsmobile from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <h1>You DID IT! You created a USER ACCOUNT!!!</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);