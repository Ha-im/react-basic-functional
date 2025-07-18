import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState } from 'react'

const Modify = (props)=>{
const [formData,setFormData] = useState({
  title:props.data.title,
  desc:props.data.desc,
  difficulty:props.data.difficulty
})
  const inputFormHandler = (e)=>{
    const {name, value} = e.target;
    setFormData(prev=>({
      ...prev,
      [name]:value
    }))
  }
  return (
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <h2>Modify Article</h2>
      <Form action="#" onSubmit={(e)=>{
         e.preventDefault();
        props.modifyForm(e.target.title.value,e.target.desc.value,e.target.difficulty.value);
      }}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="제목을 입력하세요." 
          name="title"  
          value={formData.title}
          onChange={inputFormHandler}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control 
          as="textarea" 
          rows={3} 
          name="desc" 
          value={formData.desc}
          onChange={inputFormHandler}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="difficulty">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control 
          type="number" 
          name="difficulty" 
          value={formData.difficulty}
          min={0}
          max={5}
          required
          onChange={inputFormHandler}/>
        </Form.Group>
        <Button type="submit" variant="secondary">입력</Button>
      </Form>
    </div>
  )
}

export default Modify;