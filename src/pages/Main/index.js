import React from "react";
import { FaClock, FaCalendarCheck, FaSeedling } from "react-icons/fa";
import Teachers from "../../components/Teachers";
import Form from "../../components/Form";
import LearningImage from "../../assets/images/learning-svg.svg";
import EmailField from "../../components/EmailField";
import IconsInfo from "../../components/IconsInfo";
import Price from "../../components/Price";
import { disciplinesGroup, teachers } from "../../services/api";

import {
  Container,
  Wrapper,
  Calling,
  ImageCalling,
  CourseResume,
  Details,
  Discipline,
} from "./style";
import ContentDiscipline from "../../components/ContentDiscipline";

const Main = () => {
  return (
    <>
      <Container id="Alumia">
        <Wrapper>
          <Calling>
            <h1>Alumia</h1>
            <h3>Educação do futuro, hoje!</h3>
            <p>
              Construímos programas de educação a distância para a sua
              instituição, garantimos a melhor experiência para os estudantes e
              o sucesso da sua marca no mundo digital.
            </p>
            <EmailField />
          </Calling>
          <ImageCalling src={LearningImage} alt="Pessoa estudando" />
        </Wrapper>
      </Container>

      <CourseResume id="Objetivo">
        <Wrapper>
          <h2>Análise e Desenvolvimento de Sistemas.</h2>
          <p>
            O Curso de Análise e Desenvolvimento de Sistemas da{" "}
            <span>Alumia</span> tem o objetivo de capacitar o aluno a projetar,
            documentar, especificar, implementar, testar, implantar e manter
            sistemas computacionais de informação. Para tanto, o aluno utiliza
            modernas ferramentas computacionais, bem como métodos e técnicas
            avançadas para projetos aplicados durante todo o ciclo de
            desenvolvimento de sistemas, e conta, ainda, com professores
            altamente qualificados.
          </p>
          <div>
            {teachers.map(({ name, photo }) => (
              <Teachers key={name} photo={photo} name={name} />
            ))}
          </div>

          <Form>
            <h3>Fique por dentro</h3>
            <p>
              Você não pode ficar de fora das nossas promoções, dicas e
              novidades. <br />
              Queremos estar cada vez mais perto de você!
            </p>
          </Form>
        </Wrapper>
      </CourseResume>

      <Details id="Informações">
        <Wrapper>
          <div>
            <IconsInfo>
              <FaCalendarCheck />
              <p>
                Previsão para início das aulas <br></br>
                <span>19/10/2020</span>
              </p>
            </IconsInfo>
            <IconsInfo>
              <FaClock />
              <p>
                Mais de 100 horas <br></br>
                <span>De conteúdo exclusivo.</span>
              </p>
            </IconsInfo>
          </div>
          <Price>
            <FaSeedling />
          </Price>
        </Wrapper>
      </Details>
      <Discipline id="Disciplinas">
        <Wrapper>
          <div>
            <h3>O que você irá aprender</h3>
            <span>Nossos módulos seguem em constante atualização.</span>
          </div>

          <div>
            {disciplinesGroup.map(({ title, disciplines }) => (
              <ContentDiscipline
                key={title}
                title={title}
                disciplines={disciplines}
              />
            ))}
          </div>
        </Wrapper>
      </Discipline>
    </>
  );
};

export default Main;
