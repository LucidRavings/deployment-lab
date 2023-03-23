const btn = document.querySelector('button')

const clickHandler = () => {
    rollbar.info('Someone clicked the button')
    alert('Yes you are!')
}

btn.addEventListener('click', clickHandler)