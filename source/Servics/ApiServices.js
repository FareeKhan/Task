
export const userData = async (accessToken) => {
    try {
        const response = await fetch(`http://18.142.153.136:3000/api/application/member_details?id=1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json',
                Accept: 'application/json',
                Authorization: accessToken,
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
};