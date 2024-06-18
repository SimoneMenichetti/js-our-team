// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
    // Creare l’array di oggetti con le informazioni fornite.

                        //         MILESTONE 0:
    // creazione dell'array di oggetti per i membri del team 
    const membriTeam = [
        {
            nome: "Wayne Barnet",
            ruolo: "Founder & Ceo",
            foto: "wayne-barnet-founder-ceo.jpg"
        },

        {
            nome: "Angela Caroll",
            ruolo: "Chief Editor",
            foto: "angela-caroll-chief-editor.jpg"
        },

        {
            nome: "Walter Gordon",
            ruolo: "Office Manager",
            foto: "walter-gordon-office-manager.jpg"
        },

        {
            nome: "Angela Lopez",
            ruolo: "Social Media Manager",
            foto: "angela-lopez-social-media-manager.jpg"
        },

        {
            nome: "Scott Estrada",
            ruolo: "Developer",
            foto: "scott-estrada-developer.jpg"
        },

        {
            nome: "Barbara Ramos",
            ruolo: "Graphic Designer",
            foto: "barbara-ramos-graphic-designer.jpg"
        },
    ];
        // verifica oggetti inseriti nell'array
            console.log(membriTeam);

                        //         MILESTONE 1:

    // Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


    // utilizziamo un ciclo for per iterare nell'array creato in precedenza per i membri e stampare le informazioni di ogni membro del team 

        for(let i = 0 ; i< membriTeam.length;i++) {
            // verifichiamo in console le informazioni per ogni membro
            console.log(`nome: ${membriTeam[i].nome}`);
            console.log(`ruolo: ${membriTeam[i].ruolo}`);
            console.log(`foto: ${membriTeam[i].foto}`);
        }


                    //         MILESTONE 2:
        // Stampare le stesse informazioni su DOM sottoforma di stringhe

            