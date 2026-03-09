import { Children } from 'react'
/*
Utilisation de Children: 
s'il y a seulement un enfant, .map ne marchera pas sans ceci.
Il est possible de le faire seulement avec props, si on est sûrs qu'il y en aura toujours au moins 2.
Sinon, le props n'est pas considéré comme un tableau avec 0 ou 1 élément.
Il ne faudra pas manipuler le contenu des enfants avec Children. 
Nous regarderons des meilleures solutions à cet effet plus tard.
Rappel: ceci vaut 20% additionnel sur une des questions et pas plus.
*/

export function ComponentA({ children }) {
    return (
        <>
            <div className="comp-a" style={{ border: '1px solid red', padding: '10px' }}>
                <h2>Service Global Alpha</h2>
                {Children.map(children, child =>
                    <div className="child">
                        {child}
                    </div>
                )}
            </div>
        </>
    )
}


