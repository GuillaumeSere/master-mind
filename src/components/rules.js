import React from 'react';

export class Rules extends React.Component {
    constructor(props) {
        super(props)
        this.toogleRules = this.toogleRules.bind(this)
        this.state = {
            show: true,
        }
    }

    toogleRules() {
        this.setState({
            show: this.state.show ? false : true,
        })
    }

    render() {
        const link = 'https://fr.wikipedia.org/wiki/Mastermind';
        const rulesTitle = this.state.show ? 'Afficher les règles' : 'Cacher les règles';
        const style = {
            display: this.state.show ? 'none' : 'block',
        }

        return (
            <div className='rules'>
                <h3 onClick={this.toogleRules}> {rulesTitle} </h3>
                <p style={style}> Essayez de deviner le motif, dans 
                l'ordre et la couleur, en dix tours. Après avoir 
                soumis une ligne, un petit carré vert est affiché pour chaque cercle
                dans une position et une couleur correctes. 
                Un carré jaune indique l'existence d'une couleur
                 correcte dans une position incorrecte. <br />
                 Plus d'infos sur<a href={link}>Wikipedia</a>.
                </p>
            </div>
        )
    }
}