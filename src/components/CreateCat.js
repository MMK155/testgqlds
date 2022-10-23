
import React from 'react'
import { useState } from 'react';
import { Form, Input, InputNumber, Upload, Select, Button } from 'antd';
import { Breadcrumb, Layout, Menu,Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { saveCat, udpateCat } from '../services/apiCalls';
const { Option } = Select;
export const CreateCat = () => {
  const [id, setId] = useState("123123123")
  const [loading, setLoading] = useState(false)
  const uuid = uuidv4();

  const options = [
    {
      label: "Company 1",
      value: "company 1",
    },
    {
      label: "Company 2",
      value: "company 2",
    },

  ];

  const [state, setState] = useState({
    name: '',
    color: '',
  })

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    saveCat(state);
  }



  return (
    <>
        <div className="site-card-border-less-wrapper" style={{
              display: 'inline-block',
              // width: 'calc(50% - 8px)',
              width: '60%',
              margin: '0 auto',
              marginTop: '20px',
         
            }}>
          <Card title="Card title" bordered={false} style={{ width: '80%' }}>
          <Form onFinish={handleSubmit}>
          <Form.Item
            name="name"
            onChange={handleInput}
            label="Enter name"
            rules={[{ required: true }]}
            style={{
              display: 'inline-block',
              // width: 'calc(50% - 8px)',
              width: '70%',
              margin: '0 auto',
              marginBottom: '20px'
            }}
          >
            <Input defaultValue={state.name} style={{ marginLeft: '22px' }} />
          </Form.Item>
          <Form.Item
            name="color"
            onChange={handleInput}
            label="Enter color"
            rules={[{ required: true }]}
            style={{
              display: 'inline-block',
              // width: 'calc(50% - 8px)',
              width: '70%',
              margin: '0 auto',
              marginBottom: '20px'
            }}
          >
            <Input defaultValue={state.color} style={{ marginLeft: '22px' }} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
          </Card>
        </div>
 
   

    </>
  )
}
export default CreateCat;