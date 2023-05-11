import { Container, PageContent } from "./styles";
import LaunchPad from "./components/LaunchPad";
import Stats from "./components/Stats";
import QuarterReport from "./components/QuarterReport";
import PolicyReport from "./components/PolicyReport";
import Audits from "./components/Audits";
import Governance from "./components/Governance";
import RelatedLinks from "./components/RelatedLinks";

const Transparency = () => {
  return (
    <Container>
      <LaunchPad />
      <PageContent>
        <Stats />
        <QuarterReport />
        <PolicyReport />
        <Governance />
        <Audits />
      </PageContent>
      <RelatedLinks />
    </Container>
  );
};

export default Transparency;
