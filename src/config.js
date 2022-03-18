export const Private = "PRIVATE"
export const Chat = "CHAT"

//Logo
export const Yellow = 'in'
export const Gray = '.'
export const Blue = 'Ua'

export const BadPasswords = [
    '1234','12345','123456','1234567','12345678','123456789','1234567890'
]

const isProduction = process.env.REACT_APP_NODE_ENV === 'production'
export const secret = 'iEqj6pCEeiE34rl1ckm4o'

console.log(isProduction)
const config = {
    HOST_API: isProduction ? 'https://api.shortlist.pp.ua/' : 'http://localhost:5000/'
}

export default config;

