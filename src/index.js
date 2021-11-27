document.addEventListener('DOMContentLoaded', () => {

let accordion = document.querySelectorAll('.accordion')

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('is-open')

        let panel =this.nextElementSibling
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'rem'
        }
    })
}

})