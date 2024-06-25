const LogoutButton = ({children}) => {
    const handle = () => {
        window.location.href = `/api/auth/logout`;
    };

    return (
        <button className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}} onClick={handle}>{children}</button>
    );
};

export default LogoutButton;
