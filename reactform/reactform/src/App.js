
import './App.css';
import InputForm from './component/InputForm';

function App() {
  return (
     <div className='app'>
      <InputForm placeholder="username" user='UserName'/>

      <InputForm placeholder="Email" email='Email'/>
      <InputForm placeholder="full name" fullname='FullName'/>
      <InputForm placeholder="whatever" whatever='writeAnything'/>
     </div>
    
   
  );
}

export default App;
