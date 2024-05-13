const LoginButton = ({children}) => {
    const handleLogin = () => {
        const csrfState = Math.random().toString(36).substring(2);
        const client_key = 'aw56hlbjs9cydo18';
        const redirect_uri = 'https://viralclothes.vercel.app/';
        const scope = 'user.info.basic,video.upload,video.publish';
        const state = csrfState;
        window.location.href = `https://www.tiktok.com/v2/auth/authorize/?client_key=${client_key}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code&state=${state}`;
    };

    return (
        <button className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}} onClick={handleLogin}>{children}</button>
    );
};

export default LoginButton;
