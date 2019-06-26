import {API} from "./api.js"
import { formatWithOptions } from "util";
const createHTML = obj => {
   return `<header class="employee__name">
        <h1>${obj.name}</h1>
    </header>
    <section class="employee__department">
    Works in the ${obj.department_id} department.
    </section>
    <section class="employee__computer">
    Currently using a ${obj.computer.year} ${obj.computer.name}.
    </section>`
}

const createObj = obj => {
    let newObj = {
      name: "",
      computer: {
          name: "",
          year: "",
    },
      department_id: "",
    }
    newObj.name = obj.name
    newObj.computer.name = obj.computer.computer
    newObj.computer.year = obj.computer.year
    newObj.department_id = obj.department.department
    return newObj
}

const createHTMLArr = () => {
    API.getEmployees().then( data => {
        let arr = data.map( emp => {
            let obj = createObj(emp)
            let html = createHTML(obj)
            return html
        })
        postToDOM(arr)
    })
}
const postToDOM = ( empArr) => {
    let el = document.querySelector(".employee")
    empArr.forEach( empObj => {
        el.innerHTML += empObj
    });
}
export {createHTMLArr}