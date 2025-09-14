import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useFirebase';
import './AdminLogin.css';

const AdminLogin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const { signIn } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		try {
			const result = await signIn(email, password);

			if (result.success) {
				// Redirect to root on successful login
				navigate('/');
			} else {
				setError(result.error || 'Login failed. Please try again.');
			}
		} catch (err) {
			setError('An unexpected error occurred. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='admin-login-container'>
			<div className='admin-login-card'>
				<div className='admin-login-header'>
					<h1>Admin Login</h1>
					<p>Please sign in to access the admin panel</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className='admin-login-form'
				>
					{error && <div className='error-message'>{error}</div>}

					<div className='form-group'>
						<label htmlFor='email'>Email Address</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							disabled={loading}
							placeholder='Enter your email'
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							disabled={loading}
							placeholder='Enter your password'
						/>
					</div>

					<button
						type='submit'
						className='login-button'
						disabled={loading}
					>
						{loading ? 'Signing In...' : 'Sign In'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default AdminLogin;
