import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Laura Portillo',
    email: 'laura@google.com'
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
            {children}
        </UserContext.Provider>
    )
}
