const API = {
    getEmployees: () => {
        return fetch("http://localhost:8088/employees")
        .then( data => data.json())
    },
    getComputer: () => {
        return fetch(`http://localhost:8088/computers/${id}`)
    },
    getDepartment: () => {
        return fetch(`http://localhost:8088/deparments/${id}`)
    }
}
export {API}