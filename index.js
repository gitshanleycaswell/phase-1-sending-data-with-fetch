const div = document.createElement('div')
        const li = document.createElement('li')
        const body = document.querySelector('body')

function submitData( userName, userEmail){
    const newUser = {
        name: `${userName}`,
        email: `${userEmail}`
    }
    
    const userObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUser)
    }
    return fetch("http://localhost:3000/users", userObj)
    .then(r => r.json())
    .then(newData => {
        
        body.appendChild(div)
        div.appendChild(li)
        li.textContent = `${newData.id}`
        
        })
        .catch(function(error){
            div.appendChild(li)
            li.textContent = error.message
        })
    
}




