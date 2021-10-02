import React from "react";
import { useRouter } from "next/router";

const Home: React.FC = () => {
	const router = useRouter();
	const submit = (e) => {
		e.preventDefault();
		router.push("/dashboard");
	};
	return (
		<div className='custom-container md bg-dark'>
			<h1 className='m-5 uppercase font-bold'>Welcome Admin</h1>
			<form className='text-center flex-col'>
				<input
					className='p-3 my-2 w-10/12 m-auto border-2'
					type='text'
					placeholder='email'
					name='email'
				/>
				<input
					className='p-3 my-2 w-10/12 m-auto border-2'
					type='password'
					placeholder='password'
					name='password'
				/>
				<div className='w-10/12 m-auto'>
					<button
						className='uppercase py-3 px-6 rounded-full block bg-dark-btn text-white mt-3'
						type='submit'
						onClick={(e) => submit(e)}
					>
						Sign In
					</button>
				</div>
			</form>
		</div>
	);
};

export default Home;
