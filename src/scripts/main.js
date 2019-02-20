const employeeComponent = () => {
    fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
        .then(employees => employees.json())
        .then(parsedEmployees => {
            parsedEmployees.forEach(singleName => {
                document.querySelector("#employeeTable").innerHTML += `name:${singleName.name},<h2>Computer:${singleName.computer.type}</h2>
        <h2>Department:${singleName.department.name}</h2>`
            })
         } )
        }
employeeComponent()