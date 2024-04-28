function Signup() {
    return (
<div>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/jk0X5z9/Group-6.png)'}}>
        <div className="text-left text-neutral-content max-w-[100%]">
        

        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-12 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
            <h1 className="text-2xl font-semibold text-center text-[#001354] pb-5">Sign up to continue</h1>
            <form className="space-y-6">
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email Address" className="w-full input input-bordered input-primary bg-white" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Email Address" className="w-full input input-bordered input-primary bg-white" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password"
                        className="w-full input input-bordered input-primary bg-white" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Re-write password</span>
                    </label>
                    <input type="password" placeholder="Enter Password"
                        className="w-full input input-bordered input-primary bg-white" />
                </div>
                <div>
                    <button className="btn bg-gradient-to-r from-[#000000] to-[#001354] text-white">Sign Up</button>
                </div>
            </form>
        </div>


        </div>
    


        </div>
      </div>





</div>

);
}
export default Signup;