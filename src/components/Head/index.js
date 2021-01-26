import styled from "styled-components";

export default function Head(props) {
    return (
        <head {...props}>
            <title>Brazuca's Quiz</title>
            <link rel="icon" href="https://img2.gratispng.com/20180802/ebt/kisspng-ball-game-football-sports-bowling-balls-soccer-ball-svg-png-icon-free-download-531450-5b6304aeafa745.2914575215332159187195.jpg"/>
            <meta name="Brazuca's Quiz" content="Brazuca's Quiz" />
            <meta name="Brazuca's Quiz" content="Quiz para testar seus conhecimentos sobre o universo do Futebol" />
            
            {/* Open Graph*/}
            <meta property="og:type" content="website"/>
            <meta property="og:url"  content="https://brazucas-quiz.vercel.app/"/>
            <meta property="og:title" content="Brazuca's Quiz"/>
            <meta property="og:description" content="Quiz para testar seus conhecimentos sobre o universo do Futebol"/>
            <meta property="og:image" content="https://cdn.pixabay.com/photo/2014/10/14/20/24/ball-488718_960_720.jpg"/>
            
            {/*Twitter*/}
            <meta property="twitter:type" content="website"/>
            <meta property="twitter:url"  content="https://brazucas-quiz.vercel.app/"/>
            <meta property="twitter:title" content="Brazuca's Quiz"/>
            <meta property="twitter:description" content="Quiz para testar seus conhecimentos sobre o universo do Futebol"/>
            <meta property="twitter:image" content="https://cdn.pixabay.com/photo/2014/10/14/20/24/ball-488718_960_720.jpg"/>
        </head>
    );
}