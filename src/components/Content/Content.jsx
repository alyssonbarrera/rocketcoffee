import { ContentFirstSection } from './Content.styled';
import { ContentFirstHeader } from './Content.styled';
import { ContentFirstHeaderTitle } from './Content.styled';
import { ContentSecondSection } from './Content.styled';
import { ContentSecondHeader } from './Content.styled';
import { ContentSecondHeaderTitleOne } from './Content.styled';
import { ContentSecondHeaderTitleTwo } from './Content.styled';
import { ContentSecondSectionImg } from './Content.styled';

import { Button } from '../Button/Button';
import secondImgCoffee from './img/rocket-coffee.png'
import { Link } from 'react-router-dom';
import Vector from "./img/Vector.svg";

export function Content() {
    return (
        <>

            <ContentFirstSection>
                <ContentFirstHeader>
                    <ContentFirstHeaderTitle>
                        O café que fará seu código decolar para o próximo nível.
                    </ContentFirstHeaderTitle>
                    <Link to={"/menu"}><Button image={Vector} buttonText="pegar meu café" /></Link>
                </ContentFirstHeader>
            </ContentFirstSection>

            <ContentSecondSection>
                <ContentSecondHeader>
                    <ContentSecondHeaderTitleOne>
                        Great Coffee
                    </ContentSecondHeaderTitleOne>
                    <ContentSecondHeaderTitleTwo>
                        &lt; Great Code {"/>"}
                    </ContentSecondHeaderTitleTwo>
                </ContentSecondHeader>
                <ContentSecondSectionImg src={secondImgCoffee} alt="Dois copos de café na cor roxa e preta. Em volta do café há grãos de café, e dos copos há uma escrita menor 'o café que fará seu código decolar para o próximo nível' acompanhado do logo à esquerda, e uma maior 'rocket coffee'" />
            </ContentSecondSection>
        </>
    )
}