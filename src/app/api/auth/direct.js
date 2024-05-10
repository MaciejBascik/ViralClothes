const handleRedirect = () => {
        const client_key = 'aw56hlbjs9cydo18';
        const redirect_uri = encodeURIComponent('http://localhost:3000/');
        const scope = 'user.info.basic';
        const state = '4de3f1fa-d9be-48bf-8014-25de3d9fb3a4'; // Możesz wygenerować losową wartość stanu

        window.location.href = `https://www.tiktok.com/v2/auth/authorize/?client_key=${client_key}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code&state=${state}`;
    };

