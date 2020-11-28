import React from 'react';

export default class StarWarsPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.loadData = this.loadData.bind(this);
    }
    componentDidMount() {
        this.loadData();
    }
    render() {
        let data = this.state.data;
        let renderedData = [];
        for (let i = 0; i < data.length; i++) {
            renderedData.push(<div>{data[i].name}</div>)
        }
        return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Altura</th>
                    <th>Masa</th>
                    <th>Color de Pelo</th>
                    <th>Color de Piel</th>
                    <th>Color de Ojos</th>
                    <th>Fecha Nacimiento</th>
                    <th>Género</th>
                </tr>
            </thead>
            <tbody>
                { this.state.data.map(character => {
                    return (
                        <tr>
                            <td>{character.name}</td>
                            <td>{character.height}</td>
                            <td>{character.mass}</td>
                            <td>{character.hair_color}</td>
                            <td>{character.skin_color}</td>
                            <td>{character.eye_color}</td>
                            <td>{character.birth_year}</td>
                            <td>{character.gender}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
            );
    }
    async loadData() {
        let response = await fetch("https:swapi.dev/api/people/");
        let parsedResponse = await response.json();
        this.setState({
            data: parsedResponse.results
        })
    }
}