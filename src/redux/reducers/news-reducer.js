const defaultState = {
    items: [
        { 
            text: `Практический опыт показывает, что рамки и место обучения
                кадров играет важную роль в формировании новых предложений. 
                Разнообразный и богатый опыт социально-экономическое 
                развитие создаёт предпосылки качественно новых шагов для форм воздействия.
                С другой стороны повышение уровня гражданского сознания позволяет 
                выполнить важнейшие задания по разработке ключевых компонентов планируемого обновления!`,
            image: 'https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/14.10/23stunning-landscape-view-argentina.jpg'
        },
        {
            text: `Практический опыт показывает, что рамки и место обучения
                кадров играет важную роль в формировании новых предложений. 
                Разнообразный и богатый опыт социально-экономическое 
                развитие создаёт предпосылки качественно новых шагов для форм воздействия.
                С другой стороны повышение уровня гражданского сознания позволяет 
                выполнить важнейшие задания по разработке ключевых компонентов планируемого обновления!`,
            image: 'https://mobimg.b-cdn.net/v3/fetch/fc/fc97db329bd4482025eaa1e3961dc80e.jpeg?w=1470&r=0.5625'
        },
        {
            text: `Some quick example text to build on the card title and make up the
                bulk of the card's content.`
        },
        {
            text: `Some quick example text to build on the card title and make up the
                bulk of the card's content.`
        }
    ]
}

const newsReducer = (state=defaultState, action) => {
    switch(action.type) {
        default :
            return state
    }
}

export default newsReducer