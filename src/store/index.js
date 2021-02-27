import { createStore } from 'vuex'

const store = createStore({
        state(){
            return {
                names: [{name: 'Rajesh', id:1, image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'},
                    {name: 'Swati', id:2, image: 'https://images.unsplash.com/photo-1596072215997-cac821d05b9c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&auto=format&fit=crop&w=400&q=60'}
                ]
        
            };
        },

        getters:{
            names(state) {
                return state.names;
            },
            name(state) {
                return(nameId) => {
                    console.log(nameId)
                    return state.names.find((name) => name.id === 1);
                }
            }
        }
    }
);

export default store;