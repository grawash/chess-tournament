function constructObject() {
    const nameValue = localStorage.getItem('name')
    const emailValue = localStorage.getItem('email')
    const phoneValue = JSON.parse(localStorage.getItem('number'))
    const date = localStorage.getItem('date_of_birth')
    let experience
    switch (localStorage.getItem('experience_level')) {
        case 'Begginer':
            experience = 'begginer'
            break
        case 'Intermediate':
            experience = 'normal'
            break
        case 'Professional':
            experience = 'professional'
            break
        default:
            experience = localStorage.getItem('experience_level')
            break
    }
    const characterId = localStorage.getItem('character_id')
    const participated = JSON.parse(
        localStorage.getItem('already_participated')
    )
    const dataFactory = (
        name,
        email,
        phone,
        date_of_birth,
        experience_level,
        character_id,
        already_participated
    ) => ({
        name,
        email,
        phone,
        date_of_birth,
        experience_level,
        character_id,
        already_participated,
    })
    const dataObject = dataFactory(
        nameValue,
        emailValue,
        phoneValue,
        date,
        experience,
        characterId,
        participated
    )
    localStorage.clear()
    return dataObject
}
export default constructObject
