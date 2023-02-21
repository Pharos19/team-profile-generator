const generateEngineer = (engineer) => {
    return `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <p class="card-text">Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${engineer.id}</li>
                <li class="list-group-item">
                <form action="mailto: ${engineer.email}">
                    <input type="submit" value="${engineer.email}" />
                </form>
                </li>
                <li class="list-group-item">
                    <span>Github: </span>
                    <a href="https://github.com/${engineer.github}" class="card-link">github.com/${engineer.github}</a>
                </li>
            </ul>
        </div>
    </div>
    `
}

const generateIntern = (intern) => {
    return `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <p class="card-text">Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${intern.id}</li>
                <li class="list-group-item">
                <form action="mailto: ${intern.email}">
                    <input type="submit" value="${intern.email}" />
                </form>
                </li>
                <li class="list-group-item">School: ${intern.school}</li>
                </li>
            </ul>
        </div>
    </div>
    `

}

const generateManager = (manager) => {
    return `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <p class="card-text">Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${manager.id}</li>
                <li class="list-group-item">
                <form action="mailto: ${manager.email}">
                    <input type="submit" value="${manager.email}" />
                </form>
                </li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
}

const generateHTML = (team) => {
    employeeContainer = []
    console.log(team)
    
    for (let i = 0; i < team.length; i++) {
        const employee = team[i]
    }
}