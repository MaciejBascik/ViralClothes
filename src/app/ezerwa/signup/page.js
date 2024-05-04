function Signup() {
    async function handleSubmit(event) {
        'use server'
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
     
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })
     
        if (response.ok) {
          router.push('/profile')
        } else {
          // Handle errors
        }
      }
    return (
<div>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/jk0X5z9/Group-6.png)'}}>
        <div className="text-left text-neutral-content max-w-[100%]">
        

        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-12 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
            <h1 className="text-2xl font-semibold text-center text-[#001354] pb-5">Sign up to continue</h1>
            <form className="space-y-6" action={handleSubmit}>
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
                <div >
                  <a href="/login" className="text-xs text-gray-600 hover:underline hover:text-blue-600">You already have an account? Log-in</a>
                </div>
                <div>
                    <button type="submit" className="btn bg-gradient-to-r from-[#000000] to-[#001354] text-white">Sign Up</button>
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