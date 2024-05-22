const LoginButton = ({children}) => {
    const handleLogin = () => {
        /*const csrfState = Math.random().toString(36).substring(2);
        const client_key = 'aw56hlbjs9cydo18';
        const redirect_uri = 'https://viralclothes.vercel.app/user/feed/';
        const scope = 'user.info.basic,video.upload,video.publish,video.list,user.info.stats,user.info.profile,artist.certification.update,artist.certification.read';
        const state = csrfState;*/
        window.location.href = `/api/auth/login`;
    };

    return (
        <button className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}} onClick={handleLogin}>{children}</button>
    );
};

export default LoginButton;
