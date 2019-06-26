const API = {
    getEmployees: () => {
        return fetch("http://localhost:8088/employees?_expand=computer&_expand=department")
        .then( data => data.json())
    }
}
export {API}