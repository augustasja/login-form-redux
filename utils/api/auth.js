export const loginPost = (data) => {
    return new Promise((resolve, reject) => {
        if (!data.requiredEmail && !data.requiredPassword) {
            reject(new Error('Not all information provided'));
            return;
        }

        if (data.requiredEmail !== 'frontend@isawesome.com' || data.requiredPassword !== 'cool') {
            reject({ message: 'Credentials do not match :(' });
            return;
        }

        const user = {
            name: data.requiredEmail,
            password: data.requiredPassword
        }

        localStorage.setItem('user', JSON.stringify(user));

        setTimeout(() => resolve({
            message: 'Successfully logged in.'
        }), 200);
    })
}

export const logoutPost = () => {
    return new Promise((resolve) => {
        localStorage.removeItem('user');

        setTimeout(() => resolve({
            message: 'Successfully logged out.'
        }), 200);
    })
}