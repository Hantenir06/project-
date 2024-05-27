const btns = document.getElementsByTagName("button")

for (let i = 0; i < btns.length; i++) {
 
    btns[i].onclick = () => {
        document.body.style.backgroundColor = btns[i].innerText
    }
}