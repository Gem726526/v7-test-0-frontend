
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import '../App.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { register } from '../app/services/userdata.service'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UserLogin } from '../redux/actions';


const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [registerUser, { loading, error, data }] = useMutation(register);


  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);

    registerUser({ variables: { registerPayload: { email: values.email, password: values.password, username: values.username } } })
      .then((res: any) => {
        dispatch(UserLogin(res.data?.register))
        localStorage.setItem('accessToken', res.data?.register?.token)
        localStorage.setItem('user', res.data?.register?.user)
        history.push("/")
      })
      .catch((err: any) => {
        console.log(err)
      })
  };

  return (
    <div className="col-md-12" >
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: 'Please enter valid Email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign up
            </Button>
            Already have an account ? <Link to="/login">Log In!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register
