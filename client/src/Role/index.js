const ROLE={
    USER:"user",
    ADMIN:"admin",
    SUPERADMIN:"superAdmin"
}

let USERS = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'Admin', role: ROLE.ADMIN },
    { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: ROLE.USER },
    { id: 2, username: 'superadmin', password: 'superadmin', firstName: 'SUPERADMIN', lastName: 'SUPERADMIN', role: ROLE.SUPERADMIN }
];


export { USERS };