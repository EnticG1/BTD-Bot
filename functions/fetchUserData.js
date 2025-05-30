const axios = require('axios')

async function FetchUserData(oak_id){
    try{
        const url = `https://data.ninjakiwi.com/battles2/users/${oak_id}`

        const response = await axios.get(url)
        const { data } = response;
        const { body } = data
        return body

    }catch(error){
        console.error()
        return
    }
}

module.exports = FetchUserData