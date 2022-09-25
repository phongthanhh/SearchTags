var getForm = document.querySelector('.form__group')
console.log('PhongThanh 🚀 ~> getForm', getForm)
var input = document.querySelector('.form__group input')

let btnDelAll = document.querySelector('.btn')

var tags = ['JavaScript']

// Render tag
function renderTags() {
    getForm.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        getForm.innerHTML += `
        <ul>
            <li>
                ${tag}
                <i class="fa-solid fa-xmark" onclick="delTag(${i})"></i>
            </li>
        </ul>
        `
    }
    getForm.appendChild(input)
    input.focus()
}

renderTags()
    // check add
function checkAdd(input) {
    let flag = false;
    for (let i = 0; i < tags.length; i++) {
        if (input == tags[i]) {
            flag = true;
            break;
        }
    }
    return flag
}

// Add Tags
function addTag(value) {
    tags.push(value)
}

input.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        let inputValue = input.value.trim()
        if (checkAdd(inputValue)) {
            input.value = ''
            renderTags()
        } else {
            addTag(inputValue)
            input.value = ''
            renderTags()
        }
    }
})

// Del Tags

function delTag(index) {
    tags.splice(index, 1)
    renderTags()
}
// Del All

btnDelAll.addEventListener('click', function() {
    tags = []
    renderTags()
})