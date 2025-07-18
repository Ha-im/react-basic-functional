import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Create from './components/Create'
import Modify from './components/Modify'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState } from 'react'


const App = ()=>{
  const [mode,setMode] =useState('welcome')
  const [selected_id,setSelected_id] =useState(0)
  const [max_id,setMax_id] =useState(3)
  const subject={title:'React', desc:'Single page Application'}
  const welcome ={title:'Welcome', desc:'Welcome to React'}
  const [menus,setMenus] =useState([
    {id:1,title:"HTML",desc:"Hypertext Markup Language",difficulty:1},
    {id:2,title:"CSS",desc:"CSS is for Design",difficulty:2},
    {id:3,title:"Javascript",desc:"Javascript is for interaction",difficulty:3}
  ])
  const getArticles = ()=>{
    //const {mode} = this.state; 
    let _main= null;
    if(mode === 'welcome'){
      _main = <Main data={welcome} mode={mode}/>;
    }else if(mode === 'read'){
      _main = <Main data={getReadArticle()} 
      onChangeMode={()=>{
        setMode('Modify')
      }}
        deleteForm={(id)=>{ 
        console.log(id);
        if(window.confirm('정말 삭제할까요?')){
          let _menus = [...menus]
          let del_id = menus.findIndex(m => m.id === id);

          if(del_id){
            _menus.splice(del_id,1);
          }
          setMode('welcome');
          setMenus(_menus);
        }
    }}/>;
    }else if(mode === 'Create'){
      _main = <Create createForm={(title,desc,difficulty)=>{
          console.log(title,desc,difficulty);
          let new_max_id = max_id + 1;
          let _menus = menus.concat({id:new_max_id,title:title,desc:desc,difficulty:difficulty});
          setMode('welcome');
          setMenus(_menus);
          setMax_id(new_max_id);
      }}/>;
    }else if(mode === 'Modify'){
      _main = <Modify 
      data={getReadArticle()}
      modifyForm={(title,desc,difficulty)=>{
        
        //메뉴 내용 수정 
        let _menus = menus.map(m =>
           m.id === selected_id 
           // ? {id: m.id, title: title, desc: desc} 
           ? {...m, title, desc,difficulty} 
           : m
       );
       setMode('read');
       setMenus(_menus);
    }}

    />;
    }
    return _main; // 메인부분을 내보내야함 
  }
  const getReadArticle = ()=>{
    let data = menus.find(m =>m.id === selected_id);
     return data;
  }
  return (
    <div className='container'>
      <Header title={subject.title} desc={subject.desc} onChangeMode={()=>{
          setMode('welcome');
      }}/>
      <Nav data={menus} onChangeMode={(id)=>{
        console.log(id);
        setMode('read');
        setSelected_id(id);
      }}/>
      {getArticles()}
      <hr/>
      <div className = 'd-flex justify-content-end'>
      <Button variant="primary" onClick={()=>{
          setMode('Create');
        }}>Create</Button>
      </div>
    </div>
  )
}
export default App;