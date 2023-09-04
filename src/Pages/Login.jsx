import React from "react";
import { useNavigate } from "react-router-dom";


const Login = () => 
{
	const navigate =useNavigate()
	return (
		<section className="flex h-screen items-center">
			<div className="w-full lg:w-1/2 xl:w-2/5 shrink-0">
				<div className="2xl:pl-24 lg:pl-16 px-4 sm:px-6 lg:pr-4">
					<div className="text-center">
						<img
							src="./assets/logo-cheva.svg"
							alt="logo-cheva.svg"
							className="mx-auto"
						/>
						<p className="font-semibold text-gray-600 mt-3">
							Login into your account
						</p>
					</div>
					<form className="mt-14">
						<div className="sm:mb-8 mb-4">
							<label
								htmlFor="email"
								className="text-gray-500 mb-3 inline-block sm:text-base text-sm"
							>
								Email address
							</label>
							<div className="relative rounded-lg overflow-hidden">
								<input
									type="email"
									placeholder="alexa@gmail.com"
									className="px-4 sm:px-6 pr-14 sm:pr-20 py-3 sm:py-4 w-full bg-gray-200/60 placeholder:text-gray-400 text-gray-900 focus:outline-transparent text-sm sm:text-base"
								/>
								<span className="absolute right-0 inset-y-0 bg-yellow-cheva w-11 sm:w-14 flex justify-center items-center rounded-lg">
									<img
										className="w-6 sm:w-auto"
										src="./assets/icon-email.svg"
										alt="icon-email.svg"
									/>
								</span>
							</div>
						</div>
						<div className="mb-4 2xl:mb-6">
							<label
								htmlFor="password"
								className="text-gray-500 mb-3 inline-block sm:text-base text-sm"
							>
								Password
							</label>
							<div className="relative rounded-lg overflow-hidden">
								<input
									type="password"
									placeholder="Enter your password"
									className="px-4 sm:px-6 pr-14 sm:pr-20 py-3 sm:py-4 w-full bg-gray-200/60 placeholder:text-gray-400 text-gray-900 focus:outline-transparent text-sm sm:text-base"
								/>
								<span className="absolute right-0 inset-y-0 bg-yellow-cheva w-11 sm:w-14 flex justify-center items-center rounded-lg">
									<img
										className="w-6 sm:w-auto"
										src="./assets/icon-lock.svg"
										alt="icon-lock.svg"
									/>
								</span>
							</div>
						</div>
						<a
							href="#"
							className="text-blue-900 underline underline-offset-4 text-xs sm:text-sm flex justify-end"
						>
							Forgot password?
						</a>
						<button  
							onClick={() =>navigate('/Content')}
							className="font-semibold bg-[#F8A400] w-full sm:text-base text-sm p-3 sm:p-4 rounded-lg mt-8 2xl:mt-10 shadow-cheva text-white"
						>
							Login now
						</button>
					</form>
					<p className="text-separator"></p>
				</div>
			</div>
			<div className="grow shrink hidden justify-center items-center lg:flex te">
				<img
					src="./assets/login.png"
					alt="login.png"
					className="max-w-lg xl:max-w-full xl:w-10/12 2xl:w-[746px]"
				/>
			</div>
		</section>
	);
};

export default Login;