
   
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    // import 'antd/dist/antd.css';
    // import '@aws-amplify/ui-react/styles.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    import Amplify from 'aws-amplify'
    import awsconfig from './aws-exports'
    Amplify.configure(awsconfig);
    try {
      Amplify.configure(awsconfig.default ? awsconfig.default : awsconfig);
    } catch (err) {
      console.log('Appologies Unable to configure Amplify');
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    
    
    reportWebVitals();
    
    