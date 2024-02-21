// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una ":x:": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// ----- //



const {createApp} = Vue;
// Creo un'applicazione Vue e la inserisco nell'elemento HTML.
createApp({
    data() {
        return {

            tasks: [
                {
                    text: 'Fare colazione',
                    done: false
                },
                {
                    text: 'Fare lezione',
                    done: true
                },
                {
                    text: 'Studiare',
                    done: false
                },
                {
                    text: 'Fare allenamento',
                    done: false
                }
            ]


            
        }
  
    },

    methods: {
        //cancello le task
        deleteTask(taskIndex) {
            
            // Il metodo viene chiamato quando un'azione di cancellazione viene attivata

            this.tasks.splice(taskIndex, 1);
        },

        addTask() {
        
            // creo un nuovo oggetto task
            const newTask = {
                done: false
            }

            // inserisco il testo all'interno della sua proprietà "text"
            newTask.text = this.newTaskText


            // lo inserisco nell'array
            this.tasks.push(newTask)

            console.log(this.tasks)

            // resetto il contenuto del campo di input
            this.newTaskText = ""

        },
    },

}).mount("#app");