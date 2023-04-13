import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento Website</td>
                        <td className="income">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/04/2023</td>
                    </tr>
                    <tr>
                        <td>ALuguel</td>
                        <td className="outcome">- R$1.100</td>
                        <td>Casa</td>
                        <td>10/04/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}