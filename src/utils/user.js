export function getUserFirstAndLastChar(user) {
    if(!user) return null;
    let result = "";
    if(user.firstName) result+= user.firstName[0];
    if(user.lastName) result+= user.lastName[0];
    return result;
}

export function getFullName(user) {
    if(!user) return null;
    return user.firstName + " " + user.lastName;
}