import { useMutation } from '@apollo/client';
import 'antd/dist/antd.css';
import '../App.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { login } from '../app/services/userdata.service'
import { useDispatch } from 'react-redux';
import { UserLogin } from '../redux/actions';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Login = () => {

  const user = localStorage.getItem('user')

  const dispatch = useDispatch()
  const history = useHistory()

  const [loginUser, { loading, error, data }] = useMutation(login);


  const onFinish = (values: any) => {

    loginUser({ variables: { loginPayload: { email: values.email, password: values.password } } })
      .then((res: any) => {
        console.log(res)
        dispatch(UserLogin(res.data?.login))
        localStorage.setItem('accessToken', res.data?.login?.token)
        localStorage.setItem('user', res.data?.login?.user)
        history.push("/")

      })
      .catch((err: any) => {
        console.log(err)
      })
  };

  useEffect(() => {
    if (user) {
      history.push("/")
    }
  }, [user])

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
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: 'Please enter valid email!',
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
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" to="/forgot-password">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login
