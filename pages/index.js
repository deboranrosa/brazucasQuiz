import styled from 'styled-components';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Head from '../src/components/Head';


export const QuizContainer = styled.div `
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head></Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da galera</h1>
              <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão React fez:</p>
            </Widget.Content>
          </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/deboranrosa/"/>
   </QuizBackground>
          
        
  );
}
