import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
const Create = (props)=>{
     return (
       <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
         <h2>Create Article</h2>
         <Form action="#" onSubmit={(e)=>{
            e.preventDefault();
           // console.log(e.target[0].value);
           // console.log(e.target.title.value); // 네임값을 적어둬서 네임값으로 받아올 수 있다.
           // debugger;
           // console.log(document.querySelector('#title').value()); // 이렇게도 사용할 수 있지만, 여기선 보통 이렇게 잘 사용하지 않는다.
           props.createForm(e.target.title.value,e.target.desc.value,e.target.difficulty.value);
         }}>
           <Form.Group className="mb-3" controlId="title">
             <Form.Label>Title</Form.Label>
             <Form.Control type="text" placeholder="제목을 입력하세요." name="title" />
           </Form.Group>
 
           <Form.Group className="mb-3" controlId="desc">
             <Form.Label>Description</Form.Label>
             <Form.Control as="textarea" rows={3} name="desc" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="difficulty">
             <Form.Label>Difficulty</Form.Label>
             <Form.Control type="number" name="difficulty" min={0} max={5} required/>
           </Form.Group>
           <Button type="submit" variant="secondary">입력</Button>
         </Form>
       </div>
     )
   }
 

export default Create;