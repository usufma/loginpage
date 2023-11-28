import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginPage.css';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2>Login</h2>
        <div className="form">
          <label>Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
        </div>

        <div className="form">
          <label>Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'Password is required' })}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}
        </div>

        <button className='btn' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
