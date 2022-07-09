function constructObject(){
    const name=localStorage.getItem('name')
    const email=localStorage.getItem('email')
    const phone=JSON.parse(localStorage.getItem('number'))
    const date_of_birth=localStorage.getItem('date_of_birth')
    let experience_level
    switch(localStorage.getItem('experience_level')){
        case 'Begginer':
            experience_level='begginer'
            break;
        case 'Intermediate':
            experience_level='normal'
            break;
        case 'Professional':
            experience_level='professional'
            break;
        default:
            experience_level=localStorage.getItem('experience_level')
            break;

    }
    const character_id=localStorage.getItem('character_id')
    const already_participated=JSON.parse(localStorage.getItem('already_participated'));
    const dataFactory = (name, email, phone, date_of_birth, experience_level, character_id, already_participated) => {
        return { name, email, phone, date_of_birth, experience_level, character_id, already_participated };
    }
    const dataObject = dataFactory(name, email, phone, date_of_birth, experience_level, character_id, already_participated)
    return dataObject
}
export default constructObject