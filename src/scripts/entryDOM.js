import {API} from "./api.js"
const createHTML = obj => {
    let employeeArticle = document.querySelector(".employee");
    employeeArticle.textContent =  `<header class="employee__name">
        <h1>${obj.employees.name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${obj.departments.department} department
    </section>
    <section class="employee__computer">
        Currently using a ${obj.computers.year} ${obj.computers.computer}
    </section>`
    return employeeArticle
}

const createObj = obj => {
    let newObj = {
      name: "",
      computer_id: "",
      department_id: "",
    }
    newObj.name = obj.name
    newObj.computer_id = obj.computer_id
    newObj.department_id = obj.department_id
    return newObj
}

const createHTMLObj = () => {
    API.getEmployees().then( data => {
        data.forEach( emp => {
            console.log(emp);
        });        
    })
}
export {createHTMLObj}