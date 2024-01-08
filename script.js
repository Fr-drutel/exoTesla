async function remplir_accessoires() {	
    let reponse = await fetch('accessoires.json');
    let Json = await reponse.json();
        
    let template = document.querySelector("#template_accessoires");

    for (const a of Json.tableau_accessoires) {					
        let clone = document.importNode(template.content, true);      
    
        newContent = clone.firstElementChild.innerHTML
        		
            .replace(/{{accessoires-image}}/g, a.image)			
            .replace(/{{accessoires-titre}}/g, a.titre)			
            .replace(/{{accessoires-texte}}/g, a.texte)

        clone.firstElementChild.innerHTML = newContent;		
    
        document.getElementById("grid-container").appendChild(clone);				
    }
}
