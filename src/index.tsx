import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
<StrictMode><App /></StrictMode>);

