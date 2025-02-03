const programmingLanguage = () => {
    const buttons = ["Java", "C", "Python", "Cpp"];
    
    let activeLang = "C";
    
    buttons.forEach(lang => {
        const button = document.getElementById(`language${lang}`);
        button.onclick = (e) => {
            e.preventDefault();
            
            buttons.forEach(l => {
                document.getElementById(`language-${l}`).classList.toggle("hidden", l !== lang);
                document.getElementById(`language${l}`).classList.toggle("text-color", l === lang);
            });
            
            activeLang = lang;
        };
    });
};

export default programmingLanguage;