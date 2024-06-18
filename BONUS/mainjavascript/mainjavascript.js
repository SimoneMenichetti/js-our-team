// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
    // Creare l’array di oggetti con le informazioni fornite.

                        //         MILESTONE 0:
    // creazione dell'array di oggetti per i membri del team 
    const membriTeam = [
        {
            nome: "Wayne Barnet",
            ruolo: "Founder & Ceo",
            foto: "./img/wayne-barnett-founder-ceo.jpg"
        },

        {
            nome: "Angela Caroll",
            ruolo: "Chief Editor",
            foto: "./img/angela-caroll-chief-editor.jpg"
        },

        {
            nome: "Walter Gordon",
            ruolo: "Office Manager",
            foto: "./img/walter-gordon-office-manager.jpg"
        },

        {
            nome: "Angela Lopez",
            ruolo: "Social Media Manager",
            foto: "./img/angela-lopez-social-media-manager.jpg"
        },

        {
            nome: "Scott Estrada",
            ruolo: "Developer",
            foto: "./img/scott-estrada-developer.jpg"
        },

        {
            nome: "Barbara Ramos",
            ruolo: "Graphic Designer",
            foto: "./img/barbara-ramos-graphic-designer.jpg"
        },
    ];
        // verifica oggetti inseriti nell'array
            console.log(membriTeam);

    
        const teamContainer = document.getElementById('team-container');

        for(let i = 0 ; i< membriTeam.length;i++) {
            // [*BONUS p2]
            const membro = membriTeam[i];

            // [*BONUS p3]

            const cardMembro = document.createElement("div");

            cardMembro.classList.add('card');

            cardMembro.innerHTML = 
            // Trasformare la stringa dell immagine in un immagine effettiva 
            `
            <img src="${membro.foto}" alt="Foto di ${membro.nome}">
            <div></strong> ${membro.nome}</div>
            <div>${membro.ruolo}</div>`;
                
                // [*BONUS p4]
                teamContainer.append(cardMembro);
        }
        


                    //         MILESTONE BONUS:
                     // Trasformare la stringa dell immagine in un immagine effettiva 
        // creazione const per iterare nell array le informazioni dell elemento [*BONUS p2]
        // creazione dell elemento card ed inseriamo le proprieta le oggetto al suo interno [*BONUS p3]
        // appendiamo le card create dinamicamente [*BONUS p4]

       

