import moment from 'moment'

// validation date, mininum 2 hours when create TODO
export const validationDate = (date) => {
    var tmpHours = moment(new Date()).add(2, 'hours');
    return date > tmpHours
}
    
// validation description (length, and character allowed)
export const validationTodoDescription = (description) => {
    let reg = /^(?=.{1,10}$)[0-9a-zA-Z&/.,!?@ ]+$/
    return reg.test(description)
}