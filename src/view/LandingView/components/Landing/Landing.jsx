import { Container, PageContent } from "./styles";
import LaunchPad from "./components/LaunchPad";
import Stats from "./components/Stats";
import Participation from "./components/Participation";
import News from "./components/News";
import Questions from "./components/Questions";

const Landing = () => {
  return (
    <Container>
      <PageContent>
        <LaunchPad />
        <Stats />
        <Participation />
        <News />
        <Questions />
      </PageContent>
    </Container>
  );
};

export default Landing;
