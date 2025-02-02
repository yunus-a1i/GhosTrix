const programmingLanguage = () => {
    
    document.getElementById("languageJava").onclick = (e) =>{
        e.preventDefault()
        document.getElementById("language-C").classList.toggle("hidden")
        document.getElementById("language-Python").classList.toggle("hidden")
        document.getElementById("language-C++").classList.toggle("hidden")
    }

}

export default programmingLanguage;