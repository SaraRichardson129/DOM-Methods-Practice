const parentElement = document.querySelector('body')

let buttonElement = document.createElement('button')
buttonElement.append('Remove')
parentElement.append(buttonElement)

let mainElement = document.createElement('main')
parentElement.append(mainElement)

let imgElement = document.createElement('img')
imgElement.className = 'image'
imgElement.src = 'https://images.unsplash.com/photo-1453473552141-5eb1510d09e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
mainElement.append(imgElement)

let anchorElement = document.createElement('a')
anchorElement.className = 'link'
anchorElement.href = 'https://www.nashvillezoo.org/'
anchorElement.append('Nashville Zoo')
mainElement.append(anchorElement)

buttonElement.addEventListener('click', removeMainElement);
function removeMainElement() {
    mainElement.remove()
}

let textInput = document.createElement('input')
textInput.className = 'input'
parentElement.append(textInput)

let removeElementButton = document.createElement('button')
removeElementButton.append('Remove Element')
parentElement.append(removeElementButton)

removeElementButton.addEventListener('click', function () {
    const userInput = document.querySelector(textInput.value)
    userInput.remove()
});

let textInput2 = document.createElement('input')
textInput2.id = 'input2'
parentElement.append(textInput2)

let createElementButton = document.createElement('button')
createElementButton.append('Create Element')
parentElement.append(createElementButton)

createElementButton.addEventListener('click', function () {
    const userInput2 = document.getElementById('input2').value
    let divElement = document.createElement('div')
    divElement.append(userInput2)
    parentElement.append(divElement)
});