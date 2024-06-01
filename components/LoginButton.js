const LoginButton = ({children}) => {
    const handleLogin = () => {
        window.location.href = `/api/auth/login`;
    };

    return (
        <button className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}} onClick={handleLogin}>{children}</button>
    );
};

export default LoginButton;
