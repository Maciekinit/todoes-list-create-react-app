import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Mr. Maciek"
            body={(
                <><p><strong>Cześć! W wolnych chwilach uwielbiam słuchać muzyki🎧</strong>.
                    Długie spacery to dla mnie idealny sposób na <em>relaks i zebranie myśli
                        na świeżym powietrzu</em>🚶‍♀️.
                    Jestem też osobą ciekawą świata i pasjonuje mnie nauka nowych rzeczy.
                    Ostatnio najwięcej czasu poświęcam na rozwijanie
                    swoich umiejętności w świecie programowania⚛️,
                    co sprawia mi ogromną satysfakcję
                    i otwiera przede mną zupełnie nowe możliwości. 🚀
                </p>
                </>
            )}
        />
    </Container >
);