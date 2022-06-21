import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header></Header>
      <br/>
      <div id='contact-list'>
        {contacts.map(contact => <Contact key={contact.email} data={contact} />)}
      </div>
      
    </div>
  );
}

export default App;
