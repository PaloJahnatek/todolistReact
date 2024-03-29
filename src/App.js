import './App.css';
import Navbar from './components/Navbar';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import About from './components/About';
import User from './components/User';
import UserDetail from "./components/UserDetail";
import UserDetailEdit from "./components/UserDetailEdit";
import CreateUser from "./components/CreateUser";
import UserTasks from "./components/UserTasks";
import UserTaskCreate from "./components/UserTaskCreate";
import UserTasksEdit from "./components/UserTaskEdit";
import 'react-app-polyfill/stable';



function App() {
  return (
    <>
        <Router>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/users' element={<User/>}/>
                <Route path='/user/create' element={<CreateUser/>}/>
                <Route path='/user/:id' element={<UserDetail/>}/>
                <Route path='/user/:id/edit' element={<UserDetailEdit/>}/>
                <Route path='/user/:id/tasks' element={<UserTasks/>}/>
                <Route path='/user/:id/usertasks/create' element={<UserTaskCreate/>} />
                <Route path="/user/:id/usertasks/edit/:taskId" element={<UserTasksEdit/>}/>

            </Routes>

        </Router>
    </>
  );
}

export default App;
