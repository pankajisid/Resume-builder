import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Entry from './components/entry.jsx';
import "./styles/contact-info-style.css";
import "./styles/education-style.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Entry/>
  </StrictMode>,
)
