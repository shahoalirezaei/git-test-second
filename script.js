const login = (user)=> {
    if(user){
        return true
    }else{
        return false
    }
};

const register = (user)=> {
    return (user, token);
};

const getMe = (user) => {
    return user.name;
};