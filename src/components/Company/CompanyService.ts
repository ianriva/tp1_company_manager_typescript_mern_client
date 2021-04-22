import axios from 'axios'

export const getCompanies = async () => {
    return await axios.get("http://localhost:3001/companies");
}